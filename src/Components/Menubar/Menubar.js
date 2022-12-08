import React from "react";
import { FaAlignCenter, FaAtom, FaDesktop, FaKey, FaMap, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menubar = () => {
  const menus = [
    {
      icon: <FaDesktop></FaDesktop>,
      iconColor: "text-blue-400",
      name: "Dashboard",
    },
    {
      icon: <FaAtom></FaAtom>,
      iconColor: "text-blue-400",
      name: "Icons",
    },
    {
        icon: <FaMap></FaMap>,
        iconColor: "text-orange-400",
        name: "Maps",
    },
    {
        icon: <FaUserAlt></FaUserAlt>,
        iconColor: "text-yellow-400",
        name: "User Profile",
    },
    {
        icon: <FaAlignCenter></FaAlignCenter>,
        iconColor: "text-red-400",
        name: "Tables",
    },
    {
        icon: <FaKey></FaKey>,
        iconColor: "text-cyan-400",
        name: "Login",
    },
    {
        icon: <FaUserCircle></FaUserCircle>,
        iconColor: "text-red-200",
        name: "Register",
    }
  ];
  const docMenus = [
    {
      icon: <FaDesktop></FaDesktop>,
      name: "Getting started",
    },
    {
      icon: <FaAtom></FaAtom>,
      name: "Foundation",
    },
    {
        icon: <FaMap></FaMap>,
        name: "Components",
    },
    
  ];
  return (
    <div className="w-96 px-3">
      {menus.map((menu, idx) => (
        <Link key={idx} className="flex items-center gap-5 py-3">
          <span className={menu.iconColor}>{menu.icon}</span>
           <p className="text-gray-500 text-sm">{menu.name}</p>
        </Link>
      ))}
      <div className="divider"></div>
      <div>
        <p className="font-semibold tracking-wide text-xs text-gray-400 mb-4">DOCUMENTATION</p>
        {docMenus.map((menu, idx) => (
        <Link key={idx} className="flex items-center gap-5 py-3">
          <span className="text-gray-500">{menu.icon}</span>
           <p className="text-gray-500 text-sm">{menu.name}</p>
        </Link>
      ))}
      </div> 
    </div>
  );
};

export default Menubar;
