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
                <Fade indicators={true} arrows={false} duration={1000}>
                  <Image
                    src={project.image1}
                    alt={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    aria-label={project.alt}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image2}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image3}
                    aria-label={project.alt}
                    alt={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image4}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image5}
                    alt={project.alt}
                    placeholder="blur"
                    aria-label={project.alt}
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image6}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image7}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image8}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                  <Image
                    src={project.image9}
                    alt={project.alt}
                    aria-label={project.alt}
                    placeholder="blur"
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100%, 100%"
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                  />
                </Fade>
              ) : (
                <Image
                  src={project.image1}
                  alt={project.alt}
                  aria-label={project.alt}
                  placeholder="blur"
                  width={100}
                  height={100}
                  sizes="(max-width: 768px) 100%, 100%"
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
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
