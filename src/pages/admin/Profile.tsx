import { NextPage } from "next";
import { useEffect } from "react";

const Profile: NextPage = () => {
  useEffect(() => {
    document.location = "/dashboard";
  }, []);
  return <></>;
};

export default Profile;
