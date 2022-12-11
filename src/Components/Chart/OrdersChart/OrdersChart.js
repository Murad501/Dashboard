import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OrdersChart = () => {
  const data = [
    {
      name: "Jul",
      pv: 25
    },
    {
      name: "Aug",
      pv: 20
    },
    {
      name: "Sep",
      pv: 30
    },
    {
      name: "Oct",
      pv: 23
    },
    {
      name: "Nov",
      pv: 18
    },
    {
      name: "Dec",
      pv: 30
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-black p-1 text-white border-none rounded-md py-0">
          <p className="label leading-none font-semibold text-sm">{`${label}`}</p>
          <div className="flex gap-1 items-center pb-1">
          <div className="w-4 h-4 border border-white bg-orange-700"></div>
          <p className="text-xs font-semibold">{`${payload[0].value}`}</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="my-5 rounded-md w-full bg-white border">
      <div className="mb-5 p-5 border-b">
        <p className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider">
          PERFORMANCE
        </p>
        <h3 className="font-semibold text-xl text-black">Total orders</h3>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} tickCount={4} domain={[0, 'dataMax']} />
          <Tooltip cursor={false} content={<CustomTooltip />}/>
          <Bar dataKey="pv" fill="#FF481F" radius={20} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
