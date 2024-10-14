import { NavLink } from "react-router-dom";
import { ProjectCards, Section } from "../../../Components";
import { FaArrowRightLong } from "react-icons/fa6";
export const ProjectSection = () => {
  return (
    <Section label="Projects section">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl font-semibold text-white  mb-2">Projects.</h2>
          <NavLink
            to={"/projects"}
            className="bg-[#212121] px-4 py-2 rounded-md text-sm "
          >
            <button className="flex items-center gap-2">
              View All <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
        <p className="text-sm md:text-lg text-gray-400 font-medium">
          Solving problems and creating things one cup of tea at a time!
        </p>
      </div>
      <div className="project-cards mt-4 flex flex-wrap items-stretch gap-4">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </Section>
  );
};
