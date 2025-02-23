import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileCode,
  House,
  Sparkles,
  Sun,
  SunMoon,
} from "lucide-react";
import { useState } from "react";

const ROUTES = [
  {
    id: 3,
    path: "/",
    name: "Home",
    icon: <House />,
  },
  {
    id: 1,
    path: "/experience",
    name: "Experience",
    icon: <BriefcaseBusiness />,
  },
  {
    id: 2,
    path: "/projects",
    name: "Projects",
    icon: <FileCode />,
  },
];

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <nav className="w-full flex items-center justify-between card-color border border-neutral-700 rounded-lg sm:rounded-[.5vw] mt-2 sm:mt-[2vh] p-5 sm:p-[1.2vw]">
      <div className="flex gap-5 sm:gap-[2vw]">
        {ROUTES.map((route) => (
          <NavLink
            key={route.id}
            to={route.path}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "text-2xl sm:text-[clamp(1.4rem,1.4vw,3rem)] text-[#898989]"
            }
          >
            <span className="">{route.icon}</span>
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-5 sm:gap-[2vw]">
        <div>
          <span className="text-2xl sm:text-[clamp(1.4rem,1.4vw,3rem)] text-[#898989]">
            {theme === "light" ? (
              <Sun onClick={() => setTheme("dark")} />
            ) : (
              <SunMoon onClick={() => setTheme("light")} />
            )}
          </span>
        </div>
        <div>
          <button className="inter flex gap-2 sm:gap-[.5vw] items-center text-lg sm:text-[clamp(1rem,1vw,2rem)] bg-[#393839] px-4 py-2 rounded-lg sm:px-[.6vw] sm:py-[.4vw] sm:rounded-[.5vw]">
            <Sparkles size={15} /> Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};
