import { BigNumber } from "ethers";

export type Plan = {
  planKey: BigNumber;
  amountPerMonth: BigNumber;
  receiverWallet: BigNumber;
  maxMember: BigNumber;
};
