import { NextPage } from "next";
import exp from "constants";
import { useAccount } from "wagmi";
import LoginPage from "@/components/view/loginPage";

const Dashboard: NextPage = () => {
  const { address } = useAccount();

  console.log(address);
  if (address === undefined) {
    return (
      <>
        <LoginPage />
      </>
    );
  }
  return (
    <>
      <div>dashboard</div>
    </>
  );
};

export default Dashboard;
