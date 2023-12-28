import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { MdSlowMotionVideo, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode, FaGithub } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ProjectPortal.scss";
export const ProjectPortal = ({ project, close }) => {
  const techStacks = project?.techStack?.map((item) => `${item}, `);

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="project-portal">
        <div className="controls">
          <p onClick={close}>
            <MdKeyboardDoubleArrowRight className="icon" />
          </p>
        </div>
        <div className="project-portal-images">
          <Carousel
            autoPlay={true}
            ariaLabel="Project Images Carousel"
            infiniteLoop={true}
            interval={2000}
            stopOnHover={true}
            width={`100%`}
          >
            {project?.images.map((image) => (
              <img src={image.url} alt={image.alt} key={image.id} />
            ))}
          </Carousel>
        </div>
        <div className="project-portal-header">
          <span className="icon">{project.icon}</span>
          <h2>{project.title}</h2>
          <div className="links">
            <div>
              <span>
                <FaCode className="icon" /> Stack: {techStacks}
              </span>
            </div>
            <div>
              <span>
                <MdSlowMotionVideo className="icon" /> Live:{" "}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </span>
            </div>

            <div>
              <span>
                <FaGithub className="icon" /> Github:{" "}
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title} Github
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="project-portal-body">
          <div className="project-description">
            <p>{project.description}</p>
          </div>
          <div className="project-features">
            <h2>Key Features:</h2>
            <div className="feature">
              {project?.keyFeatures?.map((feature, index) => (
                <div className="feature-item" key={feature.id}>
                  <h3>
                    {index}. {feature.title}:
                  </h3>
                  {feature?.features?.map((item) => (
                    <Fragment key={item.id}>
                      <p>{item.featureOne}</p>
                      <p>{item.featureTwo}</p>
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="controls">
          <p onClick={close}>
            <MdKeyboardDoubleArrowRight className="icon" /> Go Back To Projects
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("project-portal")
  );
};
