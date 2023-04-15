import { NextPage } from "next";
import { ApplyPlanModal } from "@/components/sdk/ApplyPlanModal";
import { AdminLayout } from "@/layouts/admin";

const Home: NextPage = () => {
  return (
    <AdminLayout>
      <ApplyPlanModal mode="wallet" />
      <></>
    </AdminLayout>
  );
};

export default Home;
