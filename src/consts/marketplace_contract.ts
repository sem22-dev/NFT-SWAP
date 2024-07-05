import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, sepolia, testnethekla } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8C1D464B385A2B7EAa80dcAAD66DD8BC0256e717",
    chain: avalancheFuji,
  },
  {
    address: "0x571B773F1e4A7C080b51C36f37e06f371C515569",
    chain: polygonAmoy,
  },
  {
    address: "0xe0eFD6fb388405b67b3E9FaFc02649c70E749f03",
    chain: sepolia,
  },
  {
    address: "0x8ad4Ed145A78579Ef29644F95846476B5111A5b7",
    chain: testnethekla,
  },
  
  
];
