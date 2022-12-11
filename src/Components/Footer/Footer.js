import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerMenu = [
    <li>
      <Link>Creative Tim</Link>
    </li>,
    <li>
      <Link>About Us</Link>
    </li>,
    <li>
      <Link>Blog</Link>
    </li>,
    <li>
      <Link>MIT License</Link>
    </li>,
  ];
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start  px-5 lg:px-10 bg-gray-200">
      <p className="text-sm text-gray-600 font-semibold mb-5 md:mb-0">
        © 2022 <span className="text-blue-600 ">Creative Tim</span>
      </p>
      <div>
        <ul className="flex gap-5 justify-center lg:justify-end">
          {footerMenu.map((menu, idx) => (
            <span className="text-gray-500" key={idx}>
              {menu}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
