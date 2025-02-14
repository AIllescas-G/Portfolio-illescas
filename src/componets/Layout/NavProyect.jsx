import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavProyect() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="ul">
        <li className={`items s2 ${location.pathname === "/moverick" ? "active" : ""}`}>
          <NavLink to="/moverick">MOVERICK</NavLink>
        </li>
        <li className={`items s2 ${location.pathname === "/go" ? "active" : ""}`}>
          <NavLink to="/go">GO-CERTIUS</NavLink>
        </li>
        <li className={`items s2 ${location.pathname === "/icired" ? "active" : ""}`}>
          <NavLink to="/icired">ICIRED</NavLink>
        </li>
        <li className={`items s2 ${location.pathname === "/meka" ? "active" : ""}`}>
          <NavLink to="/meka">MEKA</NavLink>
        </li>
        <li className={`items s2 ${location.pathname === "/subbetica" ? "active" : ""}`}>
          <NavLink to="/subbetica">SUBBETICA</NavLink>
        </li>
      </ul>
    </nav>
  );
}
