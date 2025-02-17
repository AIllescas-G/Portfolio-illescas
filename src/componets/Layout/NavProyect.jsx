import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavProyect() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="ul">
        <li className={`nav-items s2 ${location.pathname === "/moverick" ? "active" : ""}`}>
          <NavLink to="/moverick">Moverick</NavLink>
        </li>
        <li className={`nav-items s2 ${location.pathname === "/go" ? "active" : ""}`}>
          <NavLink to="/go">GO-Certius</NavLink>
        </li>
        <li className={`nav-items s2 ${location.pathname === "/icired" ? "active" : ""}`}>
          <NavLink to="/icired">ICIRED</NavLink>
        </li>
        <li className={`nav-items s2 ${location.pathname === "/meka" ? "active" : ""}`}>
          <NavLink to="/meka">MEKA</NavLink>
        </li>
        <li className={`nav-items s2 ${location.pathname === "/subbetica" ? "active" : ""}`}>
          <NavLink to="/subbetica">Subbetica</NavLink>
        </li>
      </ul>
    </nav>
  );
}
