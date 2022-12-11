import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthChart = () => {
  const data = [
    {
      name: "May",
      pv: 8,
    },
    {
      name: "Jun",
      pv: 14,
    },
    {
      name: "Jul",
      pv: 25,
    },
    {
      name: "Aug",
      pv: 60,
    },
    {
      name: "Sep",
      pv: 41,
    },
    {
      name: "Oct",
      pv: 30,
    },
    {
      name: "Nov",
      pv: 22,
    },
    {
      name: "Dec",
      pv: 53,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-black p-1 text-white border-none rounded-md py-0">
          <p className="label leading-none font-semibold text-sm">{`${label}`}</p>
          <div className="flex gap-1 items-center pb-1">
          <div className="w-4 h-4 border border-white bg-indigo-900"></div>
          <p className="text-xs font-semibold">${`${payload[0].value}`}k</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="my-5 bg-indigo-900 rounded-md w-full pr-4">
      <div className="flex justify-between items-center mb-5 md:pl-10 p-5">
        <div>
          <p className="font-semibold text-[10px] text-gray-200 uppercase tracking-wider">
            overview
          </p>
          <h3 className="font-semibold text-xl text-white">Sales value</h3>
        </div>
        <div className="flex gap-3 items-center">
          <button className="py-1 px-4 text-white bg-indigo-500 rounded-sm">
            Month
          </button>
          <button className="text-indigo-500 bg-white py-1 px-4 rounded-sm">
            Week
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis
            tick={{ fill: "#8898AA" }}
            axisLine={false}
            tickLine={false}
            dataKey="name"
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#8898AA" }}
            tickFormatter={(tick) => {
              return `$${tick}k`;
            }}
            tickLine={false}
            tickCount={7}
            domain={[0, "dataMax"]}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Line
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="#5E72E4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthChart;
