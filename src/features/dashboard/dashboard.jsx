import React, { useEffect } from "react";
import DashboardAmountCardSkeleton from "../../components/cards/DashboardAmountCardSkeleton";
import DashboardAmountCard from "../../components/cards/DashboardAmountCard";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import OrderHead from "../farmer/order/OrderHead";
import { useDispatch, useSelector } from "react-redux";
import { getOrderCount, getSales } from "../../state/reducers/dashboard/dashboardSlice";
const dashboard = () => {
  const isLoading = false;
  const skeletonArray = new Array(6).fill(null);
  const {token} = useSelector((state)=> state.user.user);
  const {sales, orders} = useSelector((state)=> state.dashboard);
  const dispatch = useDispatch();
  useEffect( ()=> {
    dispatch(getSales(token));
    dispatch(getOrderCount(token));
  }, [])
  const history = {
    todayTotalAmount: sales.todaySales,
    todayOnlineTotalAmount: 500,
    todayCashTotalAmount: 250,
    todayDueTotalAmount: 480,
    yearlySale: sales.yearSales,
    thisMonthTotalAmount: sales.monthSales,
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
              amountText={"Today's Total Sale"}
              amount={history?.todayTotalAmount ? history?.todayTotalAmount : 0 }
              link={"/today"}
              cardColor="#48C9B0"
            />
            <DashboardAmountCard
              amountText={"Today's Online Payment"}
              amount={history?.todayOnlineTotalAmount}
              link={"/today"}
              cardColor="#F1948A"
            />
            <DashboardAmountCard
              amountText={"Today's Cash Sales"}
              amount={history?.todayCashTotalAmount}
              link={"/today"}
              cardColor="#5DADE2"
            />
            <DashboardAmountCard
              amountText={"Total Due"}
              amount={history?.todayDueTotalAmount}
              link={"/today"}
              cardColor="#DE3163"
            />
            <DashboardAmountCard
              amountText={"Total Monthly Sales"}
              amount={history?.thisMonthTotalAmount ? history?.thisMonthTotalAmount : 0}
              link={"/today"}
              cardColor="#8A2BE2"
            />
            <DashboardAmountCard
              amountText={"Total Yearly Sale"}
              amount={history?.yearlySale ? history?.yearlySale : 0}
              link={"/today"}
              cardColor="#6495ED"
            />
          </>
        )}
      </div>
      <OrderHead orders={orders}/>
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <BarChart />
        <LineChart />
      </div>
    </>
  );
};

export default dashboard;
