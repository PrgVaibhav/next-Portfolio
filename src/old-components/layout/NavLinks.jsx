import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.scss";

export const NavLinks = ({ closeMenu }) => {
  return (
    <ul className="nav_links">
      <li onClick={closeMenu}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          end
        >
          Home.
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink
          to={"/projects"}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Projects.
        </NavLink>
      </li>
      {/* <li onClick={closeMenu}>
        <NavLink
          to={"/updates"}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Updates.
        </NavLink>
      </li> */}
    </ul>
  );
};
