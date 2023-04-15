import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useSigner } from "wagmi";
import { SubscriptionManager } from "@/ethers-contracts/contracts";
import { SubscriptionManager__factory } from "@/ethers-contracts/factories/contracts";

export const useContract = () => {
  const subscriptionManagerAdddress =
    "0x643ab057B5F4DC79f6a45FF1D3dE02693DeA15dA";
  const { data: signer, isError, isLoading } = useSigner();

  const [subscriptionManager, setSubscriptionManager] =
    useState<SubscriptionManager>();

  useEffect(() => {
    if (!!signer && !!subscriptionManagerAdddress) {
      setSubscriptionManager(
        SubscriptionManager__factory.connect(
          subscriptionManagerAdddress,
          signer as ethers.Signer
        )
      );
    }
  }, [subscriptionManagerAdddress, signer]);

  return useMemo(() => {
    return { subscriptionManager };
  }, [subscriptionManager]);
};
