import { NextPage } from "next";
import { useAccount } from "wagmi";
import LoginPage from "@/components/view/loginPage";
import { SimpleGrid } from "@chakra-ui/react";
import PayerWalletBanner from "@/components/PayerWallet/payerWalletBanner";
import PayerPlanBanner from "@/components/payerPlan/payerPlanBanner";
import PayerPlanStartBanner from "@/components/payerPlanStart/payerPlanStartBanner";
import { PayerDashboardLayout } from "@/layouts/payer";

const Dashboard: NextPage = () => {
  const { address } = useAccount();
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
            <PayerPlanBanner
              bgImagePath={payerPlanBgImagePaht}
              serviceName={serviceName}
              planImagePath={planImagePaht}
              startDate={startDate}
              planTokenSymbol={planTokenSymbol}
              symbolName={symbolName}
            />
            <PayerPlanStartBanner />
          </SimpleGrid>
        </PayerDashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
