import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PageVisitor = () => {
  const pageVisits = [
    {
      name: "/argon/",
      visitors: "4,569",
      users: "340",
      rate: "46,53%",
      increase: true,
      statusIcon: <FaArrowUp></FaArrowUp>,
    },
    {
      name: "/argon/index.html",
      visitors: "3,985",
      users: "319",
      rate: "46,53%",
      increase: false,
      statusIcon: <FaArrowDown></FaArrowDown>,
    },
    {
      name: "/argon/charts.html",
      visitors: "3,513",
      users: "294",
      rate: "36,49%",
      increase: false,
      statusIcon: <FaArrowDown></FaArrowDown>,
    },
    {
      name: "/argon/tables.html",
      visitors: "2,050",
      users: "147",
      rate: "50,87%",
      increase: true,
      statusIcon: <FaArrowUp></FaArrowUp>,
    },
    {
      name: "/argon/profile.html",
      visitors: "1,795",
      users: "190",
      rate: "46,53%",
      increase: false,
      statusIcon: <FaArrowDown></FaArrowDown>,
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <td className="text-[10px] font-semibold text-gray-900 capitalize text-lg  bg-white">
                Page Visitor
              </td>
              <td className="bg-white"></td>
              <td className="bg-white"></td>
              <td className="text-[10px] font-semibold text-gray-500 bg-white">
                <button className="bg-blue-500 rounded-md px-3 py-2 text-[12px] text-white">
                  See all
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
                PAGE NAME
              </td>
              <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
                VISITORS
              </td>
              <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
                UNIQUE USERS
              </td>
              <td className="text-[10px] font-semibold text-gray-500 bg-gray-100">
                BOUNCE RATE
              </td>
            </tr>
            {pageVisits.map((page, idx) => (
              <tr key={idx}>
                <td className="text-sm font-semibold text-gray-700">
                  {page.name}
                </td>
                <td className="text-sm  text-gray-700">{page.visitors}</td>
                <td className="text-sm  text-gray-700">{page.users}</td>
                <td className="text-sm text-gray-700 flex gap-2 items-center">
                  <span
                    className={`${
                      page.increase ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {page.statusIcon}
                  </span>{" "}
                  <span>{page.rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageVisitor;
