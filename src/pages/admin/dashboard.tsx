import { NextPage } from "next";
import { useEffect } from "react";

const Dashboard: NextPage = () => {
  useEffect(() => {
    document.location = "/dashboard";
  }, []);
  return <></>;
};

export default Dashboard;
