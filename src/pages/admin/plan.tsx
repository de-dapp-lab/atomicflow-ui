import { NextPage } from "next";
import { useEffect } from "react";

const Plan: NextPage = () => {
  useEffect(() => {
    document.location = "/plan";
  }, []);
  return <></>;
};

export default Plan;
