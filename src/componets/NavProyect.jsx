import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavProyect() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="ul">
        <li
          className={`nav-items  ${
            location.pathname === "/moverick" ? "active" : ""
          }`}
        >
          <NavLink to="/moverick">Moverick</NavLink>
        </li>
        <li
          className={`nav-items ${location.pathname === "/go" ? "active" : ""}`}
        >
          <NavLink to="/go">GO-Certius</NavLink>
        </li>
        <li
          className={`nav-items  ${
            location.pathname === "/subbetica" ? "active" : ""
          }`}
        >
          <NavLink to="/subbetica">Subbética</NavLink>
        </li>
        <li
          className={`nav-items  ${
            location.pathname === "/icired" ? "active" : ""
          }`}
        >
          <NavLink to="/icired">ICIRED</NavLink>
        </li>
      </ul>
    </nav>
  );
}
