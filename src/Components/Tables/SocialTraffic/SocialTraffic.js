import React from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";

const SocialTraffic = () => {
  const pageVisits = [
    {
      name: "Facebook",
      visitors: "4,569",
      completed: 60,
      color: "#F54C48",
    },
    {
      name: "Facebook",
      visitors: "3,985",
      completed: 70,
      color: "#2DCEBD",
    },
    {
      name: "Google",
      visitors: "3,513",
      completed: 80,
      color: "#5E72E4",
    },
    {
      name: "Instagram",
      visitors: "2,050",
      completed: 75,
      color: "#118CEF",
    },
    {
      name: "Twitter",
      visitors: "1,795",
      completed: 30,
      color: "#FB9A40",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center bg-white rounded-t-lg p-4">
        <p className="text-xl font-semibold text-gray-900 capitalize">
          Social traffic
        </p>
        <button className="bg-blue-500 rounded-md px-3 py-2 text-[12px] text-white font-semibold">
          See all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tr>
            <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
              REFERRAL
            </td>
            <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
              VISITORS
            </td>
            <td className="text-[10px] font-semibold text-gray-500 bg-gray-100"></td>
          </tr>
          <tbody>
            {pageVisits.map((page, idx) => (
              <tr key={idx}>
                <td className="text-sm font-semibold text-gray-700">
                  {page.name}
                </td>
                <td className="text-sm text-gray-700">{page.visitors}</td>
                <td className="text-sm text-gray-700 flex items-center gap-2">
                  <span>{page.completed}%</span>
                  {/* <span
                    className={`w-36 h-[3px] ${page.color} rounded-sm`}
                  ></span> */}
                  <ProgressBar bgcolor={page.color} completed={page.completed}></ProgressBar>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialTraffic;
