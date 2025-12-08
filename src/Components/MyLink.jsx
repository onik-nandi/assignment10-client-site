import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-2  text-sm font-medium ${
            isActive ? "text-green-600  " : "text-gray-600 hover:text-green-600"
          } ${className || ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
