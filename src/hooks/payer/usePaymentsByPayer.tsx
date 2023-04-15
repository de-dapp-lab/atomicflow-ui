import { useAccount } from "wagmi";
import { useContract } from "@/hooks/useContract";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { Payment } from "@/model/payment";
import { Plan } from "@/model/plan";

export const usePayerPayments = () => {
  const { address } = useAccount();
  const { subscriptionManager } = useContract();
  const [payerPayments, setPayerPayments] = useState<
    { payment: Payment; plan: Plan }[]
  >([]);

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
        const py = { ...payment } as Payment;
        const pl = { ...plans[i] } as Plan;
        payments.push({ payment: py, plan: pl });
      }
      setPayerPayments(payments);
    })();
  }, [address, subscriptionManager]);

  return { payerPayments };
};
