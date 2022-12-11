import React, { useState } from "react";
import {
  FaAlignCenter,
  FaCalendar,
  FaCertificate,
  FaRegLifeRing,
  FaRunning,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import user from "../../Assets/team-4-800x800.99c612eb.jpg";
import logo from '../../Assets/argon-react.128d71d3.png'
import AsideBar from "../AsideBar/AsideBar";



const Navbar = () => {
  const [tabIdx, setTabIdx] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  console.log(menuBar)
  const menu = [
    <>
      <p className="text-xs">WELCOME!</p>
      <li>
        <Link>
          <FaUser className="text-black"></FaUser>
          My Profile
        </Link>
      </li>
      <li>
        <Link className="hover:text-black">
          <FaCertificate></FaCertificate>
          Setting
        </Link>
      </li>
      <li>
        <a className="hover:text-black" href="#projects">
          <FaCalendar></FaCalendar>
          Activity
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#contact">
          <FaRegLifeRing></FaRegLifeRing>
          Support
        </a>
      </li>
      <div className="divider my-1 h-1"></div>
      <li>
        <a className="hover:text-black" href="#contact">
          <FaRunning></FaRunning>
          Logout
        </a>
      </li>
    </>,
  ];

  return (
    <div>
      <div className="flex relative justify-center lg:justify-between items-center text-black bg-white md:bg-transparent md:text-white py-5 px-5 lg:px-10 -mb-24">
      <p className="font-semibold text-md text-white hidden lg:block hover:text-gray-100">
        DASHBOARD
      </p>
      <div className="flex w-full items-center justify-between md:justify-end gap-5 lg:gap-10">
        <div className="hidden md:block">
        <div class="flex items-center">
          <FaSearch class="absolute ml-2 w-10 text-gray-200 opacity-70"></FaSearch>
          <input
            placeholder="Search"
            type="text"
            className="border rounded-full pl-12 p-3 w-80 bg-transparent border-white text-white focus:outline-none text-sm placeholder-gray-200 opacity-70"
          />
        </div>
        </div>
        <div onClick={() => setMenuBar(!menuBar)} className="md:hidden"><FaAlignCenter></FaAlignCenter></div>
        <div className="md:hidden"><img className="w-32" src={logo} alt='logo' /></div>
        <div className="flex items-center gap-2">
          <img
            onClick={() => setTabIdx(!tabIdx)}
            src={user}
            alt="userPhoto"
            className="w-8 rounded-full"
          />
          <p className=" font-semibold text-sm hover:text-gray-100">
            Jessica Jones
          </p>
        </div>
        <ul
          className={`menu menu-compact absolute right-10 top-20 bg-white text-black p-2 rounded-md w-52 ${
            tabIdx ? "block" : "hidden"
          }`}
        >
          {menu}
        </ul>
      </div>
    </div>
    <div className="md:hidden absolute top-20 left-0 bg-white">
      {menuBar && <AsideBar></AsideBar>}
    </div>
    </div>
  );
};

export default Navbar;
