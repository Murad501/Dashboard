import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartBar,
  FaChartPie,
  FaUsers,
} from "react-icons/fa";
import HeroCard from "./HeroCard";

const Hero = () => {
  const cardsDetails = [
    {
      title: "TRAFFIC",
      total: "350,897",
      icon: <FaChartBar></FaChartBar>,
      iconBg: "bg-rose-500",
      status: 3.48,
      increase: true,
      statusText: "Since last month",
      statusIcon: <FaArrowUp></FaArrowUp>,
    },
    {
      title: "NEW USERS",
      total: "2,356",
      icon: <FaChartPie></FaChartPie>,
      iconBg: "bg-orange-600",
      status: 1.1,
      increase: false,
      statusText: "Since last week",
      statusIcon: <FaArrowDown></FaArrowDown>,
    },
    {
      title: "SALES",
      total: "924",
      icon: <FaUsers></FaUsers>,
      iconBg: "bg-yellow-400",
      status: 3.48,
      increase: false,
      statusText: "Since yesterday",
      statusIcon: <FaArrowDown></FaArrowDown>,
    },
    {
      title: "PERFORMANCE",
      total: "49,65%",
      icon: <FaChartBar></FaChartBar>,
      iconBg: "bg-cyan-400",
      status: 12,
      increase: true,
      statusText: "Since last month",
      statusIcon: <FaArrowUp></FaArrowUp>,
    },
  ];
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 py-36 px-5 lg:px-10  bg-gradient-to-r from-cyan-400 to-blue-500">
      {cardsDetails.map((card, idx) => (
        <HeroCard key={idx} card={card}></HeroCard>
      ))}
    </div>
  );
};

export default Hero;
