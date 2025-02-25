import { Link, NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileCode,
  House,
  // NotebookPen,
  Sparkles,
  // Sun,
  // SunMoon,
  User,
} from "lucide-react";
// import { useState } from "react";
import { Button } from "../../ui/button/Button";

const ROUTES = [
  {
    id: 3,
    path: "/",
    name: "Home",
    icon: <House />,
  },
  {
    id: 5,
    path: "/about",
    name: "About",
    icon: <User />,
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
  // {
  //   id: 4,
  //   path: "/blogs",
  //   name: "Blogs",
  //   icon: <NotebookPen />,
  // },
];

export const Navbar = () => {
  // const [theme, setTheme] = useState("dark");

  return (
    <nav className="w-full flex items-center justify-between card-color border border-neutral-700 rounded-lg sm:rounded-[.7vw] mt-2 sm:mt-[2vh] p-4 sm:p-[1.2vw]">
      <div className="flex gap-5 sm:gap-[2vw]">
        {ROUTES.map((route) => (
          <div key={route.id} className="relative group">
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "active"
                  : "text-2xl sm:text-[clamp(1.4rem,1.4vw,3rem)] text-[#898989]"
              }
            >
              <span>{route.icon}</span>
            </NavLink>
            <p className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs sm:text-[clamp(.6rem,.8vw,1rem)] px-2 py-1 sm:px-[.4vw] sm:py-[.2vw] rounded-md sm:rounded-[.4vw] opacity-0 group-hover:opacity-100 transition-opacity">
              {route.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5 sm:gap-[2vw]">
        {/* <div>
          <span className="text-2xl sm:text-[clamp(1.4rem,1.4vw,3rem)] text-[#898989]">
            {theme === "light" ? (
              <div className="relative group">
                <Sun onClick={() => setTheme("dark")} />
                <p className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs sm:text-[clamp(.6rem,.8vw,1rem)] px-2 py-1 sm:px-[.4vw] sm:py-[.2vw] rounded-md sm:rounded-[.4vw] opacity-0 group-hover:opacity-100 transition-opacity w-max">
                  Light Mode
                </p>
              </div>
            ) : (
              <div className="relative group">
                <SunMoon onClick={() => setTheme("light")} />
                <p className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs sm:text-[clamp(.6rem,.8vw,1rem)] px-2 py-1 sm:px-[.4vw] sm:py-[.2vw] rounded-md sm:rounded-[.4vw] opacity-0 group-hover:opacity-100 transition-opacity w-max">
                  Dark Mode
                </p>
              </div>
            )}
          </span>
        </div> */}
        <div>
          <Link to={"/contact"}>
            <Button leftIcon={<Sparkles size={15} />} cn="bg-[#393839]">
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
