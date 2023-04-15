import { NextPage } from "next";
import { useAccount } from "wagmi";
import LoginPage from "@/components/view/loginPage";
import { SimpleGrid } from "@chakra-ui/react";
import PayerWalletBanner from "@/components/PayerWallet/payerWalletBanner";
import PayerPlanBanner from "@/components/payerPlan/payerPlanBanner";
import PayerPlanStartBanner from "@/components/payerPlanStart/payerPlanStartBanner";
import { PayerDashboardLayout } from "@/layouts/payer";
import { usePayerPayments } from "@/hooks/payer/usePaymentsByPayer";
import { ethers } from "ethers";

const Dashboard: NextPage = () => {
  const { address } = useAccount();
  const { payerPayments } = usePayerPayments();
  const intmaxWalletAddress = "0x12345...abcd";
  const formatedBalance = "1000";
  const assetSymbol = "USDC";
  const assetSymbolImage = "/img/USDC.png";

  const payerPlanBgImagePaht = "/img/bg_image_payer_plan.png";
  const serviceName = "tmpLLMv4.0";
  const planImagePaht = "/img/pro-plan.jpg";
  const startDate = "04/15/2023";
  const planTokenSymbol = "/img/USDC.png";
  const symbolName = "USDC";

  return (
    <>
      {address === undefined && <LoginPage />}
      {address !== undefined && (
        <PayerDashboardLayout>
          <br></br>
          <br></br>
          <br></br>
          <SimpleGrid columns={{ base: 3, md: 3, xl: 3 }} gap="20px" mb="20px">
            <PayerWalletBanner
              address={intmaxWalletAddress}
              assetBalance={formatedBalance}
              assetSymbol={assetSymbol}
              assetIconImg={assetSymbolImage}
            />
            {payerPayments?.map((paymentPlan) => {
              console.log(paymentPlan);
              return (
                <>
                  <PayerPlanBanner
                    bgImagePath={payerPlanBgImagePaht}
                    serviceName={serviceName}
                    planImagePath={planImagePaht}
                    startDate={new Date(
                      ethers.BigNumber.from(
                        paymentPlan.payment.startTime
                      ).toNumber()
                    ).toDateString()}
                    planTokenSymbol={planTokenSymbol}
                    symbolName={symbolName}
                  />
                  <PayerPlanStartBanner
                    payment={paymentPlan.payment}
                    plan={paymentPlan.plan}
                  />
                </>
              );
            })}
          </SimpleGrid>
        </PayerDashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
