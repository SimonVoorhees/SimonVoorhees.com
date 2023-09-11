import React from "react";
import "./index.scss";

export const Navbar = ({ children = [] }) => {
  return (
    <nav className="Navbar">
      <div className="Navbar_Block">
        <h3 className="Navbar_Title">Projects:</h3>
        {...children}
      </div>
    </nav>
  );
};
