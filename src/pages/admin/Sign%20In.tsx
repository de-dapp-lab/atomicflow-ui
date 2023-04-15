import { NextPage } from "next";
import { useEffect } from "react";

const In: NextPage = () => {
  useEffect(() => {
    document.location = "/dashboad";
  }, []);
  return <></>;
};

export default In;
