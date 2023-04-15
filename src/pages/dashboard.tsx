import { NextPage } from "next";
import { DashboardLayout } from "@/layouts/dashboard";
import ComplexTable from "@/components/complexTable/ComplexTable";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import WeeklyRevenue from "@/components/weeklyRevenue/weeklyRevenue";
import Banner from "@/components/banner/banner";
import BannerPlan from "../components/banner/bannerPlan";
import LoginPage from "@/components/view/loginPage";
import { useAccount } from "wagmi";

type TableDataObj = {
  address: string;
  status: string;
  lastTransaction: string;
  cumulativeAmount: number;
};

type TableDatasObj = {
  title: string;
  tableDataComplex: TableDataObj[];
};

const tableDataComplexs: TableDatasObj[] = [
  {
    title: "table1",
    tableDataComplex: [],
  },
  {
    title: "table2",
    tableDataComplex: [
      {
        address: "Horizon UI PRO",
        cumulativeAmount: 1000,
        status: "Approved",
        lastTransaction: "12 Jan 2021",
      },
      {
        address: "Horizon UI Free",
        cumulativeAmount: 1000,
        status: "Disable",
        lastTransaction: "21 Feb 2021",
      },
      {
        address: "Weekly Update",
        cumulativeAmount: 1000,
        status: "Error",
        lastTransaction: "13 Mar 2021",
      },
      {
        address: "Marketplace",
        cumulativeAmount: 1000,
        status: "Approved",
        lastTransaction: "24 Oct 2022",
      },
    ],
  },
  {
    title: "table3",
    tableDataComplex: [
      {
        address: "Horizon UI PRO",
        cumulativeAmount: 1000,
        status: "Approved",
        lastTransaction: "12 Jan 2021",
      },
      {
        address: "Horizon UI Free",
        cumulativeAmount: 1000,
        status: "Disable",
        lastTransaction: "21 Feb 2021",
      },
      {
        address: "Weekly Update",
        cumulativeAmount: 1000,
        status: "Error",
        lastTransaction: "13 Mar 2021",
      },
      {
        address: "Marketplace",
        cumulativeAmount: 1000,
        status: "Approved",
        lastTransaction: "24 Oct 2022",
      },
    ],
  },
];

export const barChartDataConsumption = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export const barChartOptionsConsumption: any = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

const Dashboard: NextPage = () => {
  const { address } = useAccount();

  const [tableDataComplexMap, setTableDataComplexMap] = useState(
    tableDataComplexs.map((output) => {
      return (
        <ComplexTable
          title={output.title}
          tableData={output.tableDataComplex}
          key={output.title}
        />
      );
    })
  );

  const [weeklyReport, setWeeklyReport] = useState(<></>);

  useEffect(() => {
    setTableDataComplexMap(
      tableDataComplexs.map((output) => {
        return (
          <ComplexTable
            title={output.title}
            tableData={output.tableDataComplex}
            key={output.title}
          />
        );
      })
    );
  }, []);

  useEffect(() => {
    setWeeklyReport(
      <WeeklyRevenue
        barChartDataConsumption={barChartDataConsumption}
        barChartOptionsConsumption={barChartOptionsConsumption}
      />
    );
  }, []);

  return (
    <>
      {address === undefined && <LoginPage />}
      {address !== undefined && (
        <DashboardLayout>
          <br></br>
          <br></br>
          <br></br>
          {tableDataComplexs.length !== 0 ? (
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 2 }}
              gap="20px"
              mb="20px"
            >
              {tableDataComplexMap}
              {weeklyReport}
            </SimpleGrid>
          ) : (
            <>
              <SimpleGrid
                columns={{ base: 1, md: 1, xl: 1 }}
                gap="20px"
                mb="20px"
              >
                <Banner />
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 2, md: 2, xl: 2 }}
                gap="20px"
                mb="20px"
              >
                <BannerPlan />
              </SimpleGrid>
            </>
          )}
        </DashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
