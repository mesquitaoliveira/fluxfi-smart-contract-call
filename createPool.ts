import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
import { CONSTANTS, POOL_CONSTANTS } from "./constants";
import { POOL_ABI, POOL_BYTECODE } from "./abi/poolABI";


const privateKey = process.env.PRIVATE_KEY as string;
const provider = new ethers.JsonRpcProvider(CONSTANTS.RPC_URL);
const signer = new ethers.Wallet(privateKey, provider);

async function deployPool() {
  console.log("Iniciando o deploy do contrato Pool...");

  try {
    const poolFactory = new ethers.ContractFactory(
      POOL_ABI,
      POOL_BYTECODE,
      signer
    );

    // Implantação do contrato
    const poolContract = await poolFactory.deploy(
      CONSTANTS.VAULT_ADDRESS,
      POOL_CONSTANTS.POOL_3.TOKEN_A,
      POOL_CONSTANTS.POOL_3.TOKEN_B,
      POOL_CONSTANTS.WEIGHT_A,
      POOL_CONSTANTS.WEIGHT_B
    );

    console.log("Contrato sendo implantado na rede...");
    await poolContract.waitForDeployment(); // Aguarda o contrato ser minerado

    const poolAddress = await poolContract.getAddress();
    console.log(
      `Contrato Pool implantado com sucesso no endereço: ${poolAddress}`
    );

    return poolAddress;
  } catch (error) {
    console.error("Erro ao implantar o contrato Pool:", error);
  }
}

deployPool();
