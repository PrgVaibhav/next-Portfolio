import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const ExperienceCards = () => {
  const showMoreLink = true;

  return (
    <div className="relative mt-4 group bg-[#161616]">
      <div className="text-md w-full sm:w-[350px] md:w-[450px] border-dashed border-2 border-slate-500   hover:border-solid p-4 rounded-md nav-font experience-card-bs transition-all duration-500 relative  ">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="w-full text-white flex flex-col gap-2">
            <strong>Frontend Developer at ABC Corp</strong>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">India</span>
              <em className="text-gray-400 text-sm">2021 - Present</em>
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-400 text-sm md:text-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt nam adipisci architecto pariatur, dolore placeat cumque
            optio asperiores nesciunt!
          </p>
          {showMoreLink && (
            <>
              <hr className="gradient-hr" />
              <div className="mt-4">
                <NavLink
                  to={""}
                  className="bg-[#212121] text-white px-2 py-2 rounded-lg text-sm flex items-center gap-4 max-w-max"
                >
                  Learn More <FaArrowRightLong />
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Status behind the card */}
      <div className="status absolute -bottom-7  md:-bottom-0 left-0  md:opacity-0 md:group-hover:-bottom-7 group-hover:opacity-100 transition-all duration-500  flex gap-3">
        {/* Smooth transition */}
        <p className="capitalize bg-[#161616] text-sm px-4 py-1 rounded-md">
          🍳 Working
        </p>
        {/* <p className="capitalize bg-[#161616] text-sm px-4 py-1 rounded-md">
          🏗️ Ongoing
        </p>
        <p className="capitalize bg-[#161616] text-sm px-4 py-1 rounded-md">
          🛠️ Maintained
        </p> */}
      </div>
    </div>
  );
};
