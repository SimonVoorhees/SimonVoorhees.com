import React from "react";
import "./index.scss";

export const Navlink = ({ ref, linkTitle, altTitle }) => {
  return (
    <a className="Navlink" href={ref} alt={altTitle}>
      {linkTitle}
    </a>
  );
};
