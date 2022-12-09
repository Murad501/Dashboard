import React from "react";

const HeroCard = ({ card }) => {
  console.log(card);
  return (
    <div className="bg-white rounded-md py-3 px-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-400">{card.title}</h3>
          <h2 className="text-xl font-semibold text-slate-900">{card.total}</h2>
        </div>
        <span className={`${card.iconBg} text-xl p-4 rounded-full text-white`}>{card.icon}</span>
      </div>
      <div className="flex gap-3 mt-5 font-light">
        <span className={`${card.increase ? 'text-green-500': 'text-red-500'} flex gap-1 items-center`}>
          {card.statusIcon} {card.status}%
        </span>
        <p className="text-gray-400">{card.statusText}</p>
      </div>
    </div>
  );
};

export default HeroCard;
