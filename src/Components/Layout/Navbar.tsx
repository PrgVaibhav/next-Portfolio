import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { LuServerCog } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";

const navlinks = [
  { id: 1, title: "Home.", url: "/", icon: <IoHomeSharp /> },
  { id: 2, title: "Projects.", url: "/projects", icon: <GrProjects /> },
  { id: 3, title: "Updates.", url: "/updates", icon: <LuServerCog /> },
  { id: 4, title: "Hire Me.", url: "/hire-me", icon: <MdOutlineWork /> },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between p-5 items-center relative z-20 nav-font font-medium">
      <div className="my-logo">
        <h1 className="text-lg md:text-3xl font-semibold">Vaibhav</h1>
      </div>
      <div className="toggle md:hidden z-30">
        <span className="text-3xl cursor-pointer" onClick={handleToggle}>
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </span>
      </div>
      <ul
        className={`md:flex flex-col md:flex-row items-center justify-center gap-1 fixed md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-[#2e2e2e] md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
          isOpen ? "menu-open" : "menu-closed"
        }`}
      >
        {navlinks.map((link, index) => (
          <React.Fragment key={link.id}>
            <li
              className={`menu-item ${isOpen ? "menu-item-visible" : ""}`}
              style={{
                transitionDelay: isOpen ? `${index * 0.1 + 0.1}s` : "0s",
                animation: isOpen ? `fallDown 0.5s ease-out forwards` : "none",
                animationDelay: `${index * 0.1 + 0.1}s`,
              }}
            >
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `nav-link flex items-center gap-2 text-md ${
                    isActive ? "active" : ""
                  }`
                }
                onClick={handleToggle}
              >
                {link.icon} {link.title}
              </NavLink>
            </li>
            {index < navlinks.length - 1 && (
              <span className="text-slate-500">/</span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
