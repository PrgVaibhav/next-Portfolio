import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

import "./Navbar.scss";
import { Button } from "../UI/Button";
export const Navbar = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const menuToggler = () => {
    setHiddenMenu((prevState) => !prevState);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="header" aria-label="header component">
      <div className="logo">
        <h1 aria-label="logo">VK.</h1>
      </div>

      <nav
        className={hiddenMenu ? "navbar active" : "navbar"}
        aria-label="navigation menu"
      >
        <NavLinks closeMenu={menuToggler} />
      </nav>

      <div className="right">
        <div className="toggle">
          {hiddenMenu ? (
            <RiCloseLine className="icon" onClick={menuToggler} />
          ) : (
            <RiMenuLine className="icon" onClick={menuToggler} />
          )}
        </div>
        <div className="control">
          <a href="#contact">
            <Button>Let's Talk.</Button>
          </a>
        </div>
      </div>
    </header>
  );
};
