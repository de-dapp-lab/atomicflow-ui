import { BigNumber } from "ethers";

export type Payment = {
  planKey: BigNumber;
  payer: string;
  payerWallet: BigNumber;
  startTime: BigNumber;
  status: boolean;
  memberCount: BigNumber;
};
