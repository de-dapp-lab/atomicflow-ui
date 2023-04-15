import { NextPage } from "next";
import { useEffect } from "react";

const In: NextPage = () => {
  useEffect(() => {
    document.location = "/dashboard";
  }, []);
  return <></>;
};

export default In;
