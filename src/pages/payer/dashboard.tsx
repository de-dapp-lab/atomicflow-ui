import { NextPage } from "next";
import { useAccount } from "wagmi";
import LoginPage from "@/components/view/loginPage";
import {ConnectButton} from "@rainbow-me/rainbowkit";

const Dashboard: NextPage = () => {
  const { address } = useAccount();


  return (<>
      { address === undefined && <LoginPage/> }
      { address !== undefined && (
          <>
              <ConnectButton/>
              dashboard
          </>
          )}
      </>
  );
};

export default Dashboard;
