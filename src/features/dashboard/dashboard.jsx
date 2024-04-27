import React from "react";
import DashboardAmountCardSkeleton from "../../components/cards/DashboardAmountCardSkeleton";
import DashboardAmountCard from "../../components/cards/DashboardAmountCard";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import OrderCard from "../../components/cards/OrderCard";
import TitleCard from "../../components/cards/TitleCard";
import { Typography } from "@mui/material";
import { CancelScheduleSend, EventAvailable, LocalMall, LocalShipping } from "@mui/icons-material";

const dashboard = () => {
  const isLoading = false;
  const skeletonArray = new Array(6).fill(null);
  const history = {
    todayTotalAmount: 100,
    todayOnlineTotalAmount: 500,
    todayCashTotalAmount: 250,
    todayDueTotalAmount: 480,
    totalSaleProduct: 20,
    thisMonthTotalAmount: 45060,
  };
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-2 md:grid-cols-3 gap-4">
        {isLoading ? (
          <>
            {skeletonArray.map((_, index) => (
              <DashboardAmountCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            <DashboardAmountCard
              amountText={"আজকের মোট বিক্রয়"}
              amount={history?.todayTotalAmount}
              link={"/today"}
              cardColor="#48C9B0"
            />
            <DashboardAmountCard
              amountText={"আজকের অনলাইন পেমেন্ট"}
              amount={history?.todayOnlineTotalAmount}
              link={"/today"}
              cardColor="#F1948A"
            />
            <DashboardAmountCard
              amountText={"আজকের নগদ বিক্রয়"}
              amount={history?.todayCashTotalAmount}
              link={"/today"}
              cardColor="#5DADE2"
            />
            <DashboardAmountCard
              amountText={"আজকের বাকিতে বিক্রয়"}
              amount={history?.todayDueTotalAmount}
              link={"/today"}
              cardColor="#DE3163"
            />
            <DashboardAmountCard
              amountText={"আজকের মোট বিক্রিত পণ্য"}
              amount={history?.totalSaleProduct}
              link={"/today"}
              cardColor="#6495ED"
            />
            <DashboardAmountCard
              amountText={"মাসিক মোট বিক্রয়"}
              amount={history?.thisMonthTotalAmount}
              link={"/today"}
              cardColor="#8A2BE2"
            />
          </>
        )}
      </div>
      <TitleCard title="Orders">
        <Typography variant="body2">This Month</Typography>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-2 md:grid-cols-3 gap-4">
          <OrderCard
            text="New Orders"
            count={0}
            cardColor="#6495ED"
            icon={<LocalMall sx={{ fontSize: "50px" }} />}
          />
         <OrderCard
            text="Cancelled"
            count={0}
            cardColor="#8A2BE2"
            icon={<CancelScheduleSend sx={{ fontSize: "50px" }} />}
          />
          <OrderCard
            text="On Delivery"
            count={0}
            cardColor="#5DADE2"
            icon={<LocalShipping sx={{ fontSize: "50px" }} />}
          />
          <OrderCard
            text="Delivered"
            count={0}
            cardColor="#F1948A"
            icon={<EventAvailable sx={{ fontSize: "50px" }} />}
          />
        </div>
      </TitleCard>
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <BarChart />
        <LineChart />
      </div>
    </>
  );
};

export default dashboard;
