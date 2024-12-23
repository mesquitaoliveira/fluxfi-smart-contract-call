import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
import { CONSTANTS, POOL_CONSTANTS, DEPLOYED_POOLS } from "./constants";
import { POOL_ABI } from "./abi/poolABI";
import { ERC20_ABI } from "./abi/erc20ABI";

// Configurações iniciais
const privateKey = process.env.PRIVATE_KEY as string;
const provider = new ethers.JsonRpcProvider(CONSTANTS.RPC_URL);
const signer = new ethers.Wallet(privateKey, provider);

// Dados do Pool e Tokens
const poolAddress = DEPLOYED_POOLS.POOL_3.CONTRACT_ADDRESS; // Endereço do Pool
const tokenA = POOL_CONSTANTS.POOL_3.TOKEN_A; // Endereço do Token A
const tokenB = POOL_CONSTANTS.POOL_3.TOKEN_B; // Endereço do Token B
const tokenDecimals = POOL_CONSTANTS.TOKEN_DECIMALS; // Decimais dos Tokens são iguais

const amountA = ethers.parseUnits("326.50", tokenDecimals); // 1 Token A
const amountB = ethers.parseUnits("0.09805448", tokenDecimals); // 0.3 Token B

async function addLiquidity() {
  console.log("Iniciando processo de adicionar liquidez...");

  try {
    // Instância do contrato Pool
    const poolContract = new ethers.Contract(poolAddress, POOL_ABI, signer);

    // Instância dos contratos ERC20
    const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, signer);
    const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, signer);

    // Verificar saldo do usuário para Token A
    const balanceA = await tokenAContract.balanceOf(signer.address);
    console.log(
      `Saldo do usuário em Token A: ${ethers.formatUnits(
        balanceA,
        tokenDecimals
      )}`
    );
    if (balanceA < amountA) throw new Error("Saldo insuficiente para Token A.");

    // Verificar saldo do usuário para Token B
    const balanceB = await tokenBContract.balanceOf(signer.address);
    console.log(
      `Saldo do usuário em Token B: ${ethers.formatUnits(
        balanceB,
        tokenDecimals
      )}`
    );
    if (balanceB < amountB) throw new Error("Saldo insuficiente para Token B.");

    // Aprovar Pool para gastar Token A
    console.log("Aprovando Token A para o contrato Pool...");
    const approveA = await tokenAContract.approve(poolAddress, amountA);
    await approveA.wait();
    console.log("Token A aprovado com sucesso!");

    // Aprovar Pool para gastar Token B
    console.log("Aprovando Token B para o contrato Pool...");
    const approveB = await tokenBContract.approve(poolAddress, amountB);
    await approveB.wait();
    console.log("Token B aprovado com sucesso!");

    // Adicionar liquidez ao Pool
    console.log("Adicionando liquidez ao Pool...");
    const tx = await poolContract.addLiquidity(amountA, amountB);
    await tx.wait();
    console.log("Liquidez adicionada com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar liquidez:", error);
  }
}

// Executar a função
addLiquidity();
