import styles from "../styles/Projects.module.css";
import { CgArrowTopRight } from "react-icons/cg";
import { ProjectData } from "../data/ProjectData";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {ProjectData.map((project) => {
          return (
            <div
              className={styles.project}
              key={project.id}
              aria-label="All images  priority of my projects"
            >
              {project.image1 &&
              project.image2 &&
              project.image3 &&
              project.image4 &&
              project.image5 &&
              project.image6 &&
              project.image7 &&
              project.image8 &&
              project.image9 ? (
                <Fade indicators={true} arrows={false}>
                  <Image
                    src={project.image1}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image2}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image3}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image4}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image5}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image6}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image7}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image8}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  <Image
                    src={project.image9}
                    alt={project.alt}
                    placeholder="blur"
                  />
                </Fade>
              ) : (
                <Image
                  src={project.image1}
                  alt={project.alt}
                  placeholder="blur"
                />
              )}
              <div className={styles.project_title}>
                <h3>{project.title}</h3>
                <span>
                  {project.completed === true
                    ? "💫 Completed"
                    : "⚒ Under Development"}
                </span>
              </div>
              <p>{project.description}</p>
              {project.liveLink && (
                <div className={styles.links}>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Preview <CgArrowTopRight className={styles.arrow} />
                  </a>
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                    GitHub <CgArrowTopRight className={styles.arrow} />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
