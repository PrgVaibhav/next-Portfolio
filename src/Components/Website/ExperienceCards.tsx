import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const ExperienceCards = () => {
  const showMoreLink = true;
  return (
    <div className="text-md w-full sm:w-[350px] md:w-[450px] border-dashed border-2 border-slate-500 p-4 rounded-md  nav-font experience-card-bs transition-all">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="exp-title text-white flex flex-col gap-2">
          <strong>Frontend Developer at ABC Corp</strong>
          <span className="text-gray-400">India</span>
        </div>
        <div className="exp-tenure mt-2 md:mt-0 text-gray-400">
          <em>2021 - Present</em>
        </div>
      </div>
      <div className="mt-4 text-gray-400 text-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          deserunt nam adipisci architecto pariatur, dolore placeat cumque optio
          asperiores nesciunt!
        </p>
        {showMoreLink && (
          <>
            <hr className="gradient-hr" />
            <div className="mt-4">
              <NavLink
                to={""}
                className=" bg-[#161616] text-white px-3 py-2 rounded-lg text-sm flex items-center gap-4 max-w-max"
              >
                Learn More <FaArrowRightLong />
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
