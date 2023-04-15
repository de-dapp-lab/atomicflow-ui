import { NextPage } from "next";
import { useAccount } from "wagmi";
import LoginPage from "@/components/view/loginPage";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useRouter} from "next/router";

const Dashboard: NextPage = () => {
  const { address } = useAccount();

  if ( address ) {
      return (
          <LoginPage />
      )
  }

  return (
      <>
        <ConnectButton/>
      </>
  );
};

Dashboard.getInitialProps = async () => {
    return {}
}

export default Dashboard;
