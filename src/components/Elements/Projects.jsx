import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ProjectData } from "../../data/ProjectData.js";
import { FaLink, FaGithub } from "react-icons/fa";
import { Button } from "../UI/Button";
import { SectionWrapper } from "../helpers/SectionWrapper";
import "./Projects.scss";
import { ProjectPortal } from "./ProjectPortal.jsx";
export const Projects = ({ header, featured }) => {
  const [selectedProject, setSelectedProject] = useState([]);
  const [show, setShow] = useState(false);

  const clickHandler = (id) => {
    const foundData = ProjectData.find((item) => item.id === id);
    setSelectedProject(foundData);
    setShow(true);
  };

  const sortDataOnGreaterSeenId = ProjectData.sort(
    (a, b) => b.seenId - a.seenId
  );

  const data = header
    ? sortDataOnGreaterSeenId
    : sortDataOnGreaterSeenId.slice(0, 3);

  const closePortal = () => {
    setShow(false);
  };
  return (
    <>
      {show && <ProjectPortal project={selectedProject} close={closePortal} />}
      <SectionWrapper label="Projects section">
        <div className="projects_section">
          {header && (
            <div className="project_header">
              <div className="header_top">
                <h2>🏆 Project.</h2>
              </div>
              <p>
                Here lie my code adventures—tiny islands of digital awesomeness
                in the vast sea of the internet. Each project is a
                mini-expedition where I tamed pixels, wrestled bugs, and emerged
                victorious. Explore these digital treasures, and may your
                journey be as enjoyable as mine!
              </p>
            </div>
          )}
          <div className="projects">
            {featured && (
              <div className="featured-projects">
                <div className="featured-projects-top">
                  <h2>🐾 Featured Projects.</h2>
                  <Link to={"projects"}>
                    View All <FaLink className="link-icon" />
                  </Link>
                </div>
                <p>
                  If life throws you errors, just add some try-catch blocks,
                  laugh it off, and keep coding your way to success!
                </p>
              </div>
            )}
            {data.map((project) => (
              <div className="project" key={project.id}>
                <div className="left">
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay={true}
                    ariaLabel="Project Images Carousel"
                    infiniteLoop={true}
                    interval={2000}
                    stopOnHover={true}
                    width={`100%`}
                  >
                    {project.images.map((image) => (
                      <img src={image.url} alt={image.alt} key={image.id} />
                    ))}
                  </Carousel>
                </div>
                <div className="right">
                  <span>{project.icon}</span>
                  <h2>{project.title}.</h2>
                  <p>{project.description}</p>

                  <div className="control">
                    <Button
                      className={"read_more_btn"}
                      onClick={() => clickHandler(project.id)}
                      aria-label="Read More"
                    >
                      Read More
                    </Button>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink
                        className="icon"
                        title="Live Link"
                        aria-label="Live Link"
                      />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        className="icon"
                        title="Github Link"
                        aria-label="Github Link"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

// If life throws you errors, just add some try-catch blocks, laugh it off, and keep coding your way to success!
