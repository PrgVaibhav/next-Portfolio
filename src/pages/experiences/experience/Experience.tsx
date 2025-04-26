import { Link, useParams } from "react-router-dom";
import { DetailedCompanyData } from "../../../helper/data/CompanyData";
import React from "react";
import { useTitle } from "../../../helper/hooks/useTitle";
import { Image } from "../../../components";

export const Experience = () => {
  const { id } = useParams<string>();

  const filterProjects = DetailedCompanyData.filter(
    (project) => project.name === id
  );
  console.log(filterProjects);
  useTitle({ title: filterProjects[0].name });

  if (filterProjects.length === 0) {
    return (
      <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
        <p>
          OOPS, I think you are lost. Please go back to the{" "}
          <Link to="/">Home</Link> page.
        </p>
      </section>
    );
  }

  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] ">
        {filterProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 sm:gap-[1vh] text-sm sm:text-[clamp(.8rem,1vw,2rem)]"
          >
            <div className="flex gap-4 sm:gap-[1vw] ">
              <p className="text-[#b5b5b5] w-[12vw] sm:w-[5vw]">Role</p>
              <span>{project.role}</span>
            </div>
            <div className="flex gap-4 sm:gap-[1vw] ">
              <p className="text-[#b5b5b5] w-[12vw] sm:w-[5vw]">Location</p>
              <span>{project.location}</span>
            </div>

            <div className="flex gap-4 sm:gap-[1vw] ">
              <p className="text-[#b5b5b5] w-[12vw] sm:w-[5vw]">Year</p>
              <span>{project.duration}</span>
            </div>
            <div className="flex gap-4 sm:gap-[1vw] ">
              <p className="text-[#b5b5b5] w-[12vw] sm:w-[5vw]">Tech</p>
              <ul className="flex gap-4 sm:gap-[1vw] items-center flex-wrap">
                {project.tech.map((t, index) => (
                  <li key={t + index} className="text-wrap">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        {filterProjects.map((project) => (
          <div className="flex flex-col gap-4 sm:gap-[2vh]  ">
            <Image
              url={project.thumbnail}
              alt="thumbnail"
              aspect="aspect-video"
              objectFit="contain"
              imgClassName="w-full h-full rounded-lg  sm:rounded-[1vw] bg-white/60"
              containerClassName="rounded-lg sm:rounded-[1vw] overflow-hidden w-[20vw] h-[10vh] sm:w-[10vw] sm:h-[10vh] "
            />
            <div className="flex  flex-col gap-4 sm:gap-[1vh] ">
              <h1 className="text-2xl font-bold sm:text-[clamp(1.4rem,2vw,4rem)]">
                {project.name}
              </h1>
              <p className="text-sm sm:text-[clamp(.9rem,1vw,2rem)] leading-relaxed text-[#b5b5b5]">
                {project.projectDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-[1vh] ">
              {project.aboutProject.map((about, index) => (
                <React.Fragment key={index}>
                  <h1 className="text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)] font-bold">
                    {about.header}
                  </h1>
                  {about.image && <img src={about.image} alt={about.header} />}
                  <p className="text-sm sm:text-[clamp(.9rem,1vw,2rem)] leading-relaxed text-[#b5b5b5]">
                    {about.description}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
