import { ethers, parseUnits } from "ethers";
import { CONSTANTS } from "./constants";
import {VAULT_ABI} from "./abi/vaultABI";
import {ERC20_ABI} from "./abi/erc20ABI";

const signer = new ethers.Wallet(CONSTANTS.P_KEY,new ethers.JsonRpcProvider(CONSTANTS.RPC_URL));

const tokenInAddress = CONSTANTS.TOKEN_A
const tokenOutAddress = CONSTANTS.TOKEN_B

const vault = new ethers.Contract(CONSTANTS.VAULT_ADDRESS, VAULT_ABI, signer);

async function executeSwap() {
  try {
    const amountIn = parseUnits("0.123", CONSTANTS.TOKEN_A_DECIMALS);

    console.log("Amount In:", amountIn.toString());
    console.log("Token In Address:", tokenInAddress);
    console.log("Token Out Address:", tokenOutAddress);

    const tokenInContract = new ethers.Contract(
      tokenInAddress,
      ERC20_ABI,
      signer
    );

    // Verificar saldo do usuário
    const userBalance = await tokenInContract.balanceOf(signer.address);
    console.log("User Token In Balance:", userBalance.toString());

    // Verificar allowance
    const allowance = await tokenInContract.allowance(
      signer.address,
      CONSTANTS.VAULT_ADDRESS
    );
    console.log("Allowance:", allowance.toString());

    if (allowance < amountIn) {
      console.log("Aprovando o Vault para gastar tokens...");
      const approveTx = await tokenInContract.approve(CONSTANTS.VAULT_ADDRESS, amountIn);
      await approveTx.wait();
      console.log("Aprovação realizada com sucesso.");
    }

    // Verificar pool registrado
    const registeredPool = await vault.getPool(CONSTANTS.POOL_ID);
    console.log("Registered Pool Address:", registeredPool);

    // Chamar a função swap
    console.log("Executando swap...");
    const tx = await vault.swap(
      CONSTANTS.POOL_ID,
      tokenInAddress,
      tokenOutAddress,
      amountIn
    );
    const receipt = await tx.wait();
    console.log(
      "Swap executado com sucesso. Hash da transação:",
      `${CONSTANTS.EXPLORER_URL}/${receipt.hash}`
    );
  } catch (error) {
    console.error("Erro ao executar o swap:", error);
  }
}

executeSwap();
