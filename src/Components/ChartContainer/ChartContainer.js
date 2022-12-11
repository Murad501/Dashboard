import React from "react";
import MonthChart from "../Chart/LineChart/LineChart";
import OrdersChart from "../Chart/OrdersChart/OrdersChart";

const ChartContainer = () => {
  return (
    <div className="-mb-28 grid grid-cols-1 lg:grid-cols-6 bg-gray-200 pb-36 px-5 lg:px-10 gap-7">
      <div className="lg:col-span-3 xl:col-span-4 -mt-28">
        <MonthChart></MonthChart>
      </div>
      <div className="lg:col-span-3 xl:col-span-2 lg:-mt-28">
        <OrdersChart></OrdersChart>
      </div>
    </div>
  );
};

export default ChartContainer;
