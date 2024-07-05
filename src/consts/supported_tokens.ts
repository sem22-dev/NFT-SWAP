import type { Chain } from "thirdweb";
import {  sepolia } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [


  


  {
    chain: sepolia,
    tokens: [
      {
        tokenAddress: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x36160274b0ed3673e67f2ca5923560a7a0c523aa",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [sepolia.id]: "/native-token-icons/eth.png",

};
