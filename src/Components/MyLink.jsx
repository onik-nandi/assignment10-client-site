import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-2  text-sm font-medium ${
            isActive ? "text-secondary " : "text-gray-600 hover:text-secondary"
          } ${className || ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
