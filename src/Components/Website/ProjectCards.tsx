import { NavLink } from "react-router-dom";
import { FaFortAwesome } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const ProjectCards = () => {
  return (
    <div className="project-card w-full md:w-[300px] h-auto rounded-md bg-[#212121] border-solid border-2 border-slate-500 ">
      <div className="card-img">
        <img
          src="https://kumarvaibhav.vercel.app/static/media/tic-tac-toe-ui.25b2320abd2c80e73393.webp"
          alt="Project Thumbnail"
          className="rounded-md p-2 bg-[#212121]"
        />
      </div>
      <div className="card-content p-2 flex flex-col gap-2">
        <div className="card-icon">
          <FaFortAwesome />
        </div>
        <div className="flex justify-between items-center">
          <div className="card-title">
            <h2 className="text-2xl font-bold text-white">DevFort.</h2>
          </div>
          <div>
            <NavLink
              to={""}
              className="bg-[#2f2f2f] text-white px-3 py-2 rounded-lg text-sm flex items-center gap-4 max-w-max"
            >
              <FaArrowRightLong />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="card-description">
          <p className="text-sm md:text-md font-medium text-gray-400">
            A React site styled with CSS offering developers tools, tutorials,
            and insights.
          </p>
        </div>
      </div>
    </div>
  );
};
