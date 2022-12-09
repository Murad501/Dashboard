import React from "react";
import { FaSearch } from "react-icons/fa";
import user from "../../Assets/team-4-800x800.99c612eb.jpg";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-transparent py-5 px-5 lg:px-10 -mb-24">
      <p className="font-semibold text-md text-white hover:text-gray-100">
        DASHBOARD
      </p>
      <div className="flex items-center gap-10">
        <div class="flex items-center">
        <FaSearch class="absolute ml-2 w-10 text-gray-200 opacity-70"></FaSearch>
          <input
            placeholder="Search"
            type='text'
            className="border rounded-full pl-12 p-3 w-80 bg-transparent border-white text-white focus:outline-none text-sm placeholder-gray-200 opacity-70"
          />

        </div>
        <div className="flex items-center gap-2">
          <img src={user} alt="userPhoto" className="w-8 rounded-full" />
          <p className="text-white font-semibold text-sm hover:text-gray-100">Jessica Jones</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
