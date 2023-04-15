import { useAccount } from "wagmi";
import { useContract } from "@/hooks/useContract";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export const usePayerPayments = () => {
  const { address } = useAccount();
  const { subscriptionManager } = useContract();
  const [payerPayments, setPayerPayments] = useState([]);

  useEffect(() => {
    if (address === undefined) {
      return;
    }
    if (subscriptionManager === undefined) {
      return;
    }

    (async () => {
      const payments = [];
      const plans = await subscriptionManager.getAllPlans();
      for (let i = 0; i < plans.length; i++) {
        const payment = await subscriptionManager.payments(
          address,
          ethers.BigNumber.from(plans[i].planKey)
        );
        if (ethers.BigNumber.from(payment.payer).eq(ethers.BigNumber.from(0))) {
          continue;
        }

        // todo model作りたい
        payments.push({ payment: payment, plan: plans[i] });
      }
      setPayerPayments(payments);
    })();
  }, [address, subscriptionManager]);

  return { payerPayments };
};
