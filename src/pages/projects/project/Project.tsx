import { Link, useParams } from "react-router-dom";
import { DetailedProjectData } from "../../../helper/data/ProjectData";
import { Button } from "../../../components";
import { Github, MoveRight } from "lucide-react";
import React from "react";
import { useTitle } from "../../../helper/hooks/useTitle";

export const Project = () => {
  const { id } = useParams<string>();

  const filterProjects = DetailedProjectData.filter(
    (project) => project.name === id
  );

  useTitle({ title: filterProjects[0].name });
  console.log(filterProjects);

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
            {project.type && (
              <div className="flex gap-4 sm:gap-[1vw] ">
                <p className="text-[#b5b5b5]">Type</p>
                <span>{project.type}</span>
              </div>
            )}

            {project.duration && (
              <div className="flex gap-4 sm:gap-[1vw] ">
                <p className="text-[#b5b5b5]">Year</p>
                <span>{project.duration}</span>
              </div>
            )}
            <div className="flex gap-4 sm:gap-[1vw] ">
              <p className="text-[#b5b5b5]">Tech</p>
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
            <div>
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-[15vw]  h-[15vw] sm:w-[5vw] sm:h-[5vw] rounded-lg  sm:rounded-[1vw] object-contain bg-black/30 p-2"
              />
            </div>
            <div className="flex  flex-col gap-4 sm:gap-[1vh] ">
              <h1 className="text-2xl font-bold sm:text-[clamp(1.4rem,2vw,4rem)]">
                {project.name}
              </h1>
              <p className="text-sm sm:text-[clamp(.9rem,1vw,2rem)] leading-relaxed text-[#b5b5b5]">
                {project.projectDescription}
              </p>
            </div>
            <div className="flex items-center  gap-4 sm:gap-[1vw]  border-b-[.1vw] border-neutral-700 w-full pb-4 sm:pb-[2vh]">
              <a href={project.link} target="_blank" rel="noreferrer">
                <Button
                  cn="bg-[#393839] text-sm sm:text-[clamp(.8rem,1vw,2rem)] px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
                  rightIcon={<MoveRight />}
                >
                  Visit Website
                </Button>
              </a>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <Github
                    className="rounded-lg px-2 py-2 sm:px-[.4vw] sm:py-[.4vw] bg:[#2d2d2d] border border-[#2d2d2d] "
                    size={30}
                  />
                </a>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:gap-[1vh] ">
              {project.aboutProject.map((about, index) => (
                <React.Fragment key={index}>
                  <h1 className="text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)] font-bold">
                    {about.header}
                  </h1>
                  {about.image && (
                    <img
                      src={about.image}
                      alt={about.header}
                      className="shadow-lg mb-2"
                      loading="lazy"
                    />
                  )}
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
