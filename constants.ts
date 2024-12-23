import dotenv from "dotenv";
dotenv.config();

export const CONSTANTS = {
  // Swap
  RPC_URL: "https://rpc-evm-sidechain.xrpl.org" as string,
  POOL_ID:
    "0xbfef5ac32e9925bb0ba5a625a41e54b8c3f378a2abcb4a35dc9222728186db19" as string,
  TOKEN_A: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294" as string,
  TOKEN_B: "0x22e7163f6ED77D7ff19608392f06fdB4b12A0686" as string,
  TOKEN_A_DECIMALS: 18 as number, // USDC
  TOKEN_B_DECIMALS: 18 as number, // WBTC
  VAULT_ADDRESS: "0xD7694ef8BB38E6ba80065748DDFEf9c52904BF10" as string,
  EXPLORER_URL: "https://explorer.xrplevm.org/tx" as string,
  P_KEY: process.env.PRIVATE_KEY as string
};

export const POOL_CONSTANTS = {
  // Token Decimals
  TOKEN_DECIMALS: 18 as number,

  // Pool with 50/50 weights
  WEIGHT_A: 50 as number,
  WEIGHT_B: 50 as number,

  /**
   * Pool 1
   * Token A: USDC
   * Token B: WBTC
   */
  POOL_1: {
    TOKEN_A: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294" as string,
    TOKEN_B: "0x22e7163f6ED77D7ff19608392f06fdB4b12A0686" as string
  },
  /**
   * Pool 2
   * Token A: USDC
   * Token B: WXRP
   */
  POOL_2: {
    TOKEN_A: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294" as string,
    TOKEN_B: "" as string
  },
  /**
   * Pool 3
   * Token A: USDC
   * Token B: WETH
   */
  POOL_3: {
    TOKEN_A: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294" as string,
    TOKEN_B: "0x2A40A6D0Fb23cf12F550BaFfd54fb82b07a21BDe" as string
  },

  /**
   * Pool 4
   * Token A: USDC
   * Token B: BRL
   */
  POOL_4: {
    TOKEN_A: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294" as string,
    TOKEN_B: "" as string
  }
};

export const DEPLOYED_POOLS = {
  POOL_1: {
    CONTRACT_ADDRESS: "0xa96a5ed31f4020E6dd5784d1C32f44e7F3d736F5" as string,
    POOL_ID:
      "0xbfef5ac32e9925bb0ba5a625a41e54b8c3f378a2abcb4a35dc9222728186db19" as string
  },
  POOL_2: {
    CONTRACT_ADDRESS: "" as string,
    POOL_ID: "" as string
  },
  POOL_3: {
    CONTRACT_ADDRESS: "0xf9601c0A7c714A89d5e87F0d981059f4C54CD152" as string,
    POOL_ID: "" as string
  },
  POOL_4: {
    CONTRACT_ADDRESS: "" as string,
    POOL_ID: "" as string
  }
};
