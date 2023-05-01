import Link from "next/link";
import styles from "../styles/projects.module.scss";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { CgArrowTopRight } from "react-icons/cg";

const Projects = ({ projects }) => {
  const recentProjects = projects?.slice(0, 2);
  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_header}>
        <h2>Projects.</h2>
        <Link href="/projects">
          See all projects <CgArrowTopRight className={styles.arrow} />
        </Link>
      </div>
      <div className={styles.projects_cards}>
        {recentProjects?.map((project) => {
          return (
            <div className={styles.projects_card} key={project.id}>
              <div>
                <Fade
                  arrows={false}
                  duration={1500}
                  //   indicators={true}
                  canSwipe={true}
                >
                  {project.images.map((image) => {
                    return (
                      <Image
                        src={image.name}
                        alt={image.alt}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100%, 100%"
                        style={{ height: "auto", width: "100%" }}
                        loading="lazy"
                        key={image.id}
                        className={styles.project_image}
                      />
                    );
                  })}
                </Fade>
              </div>
              <div className={styles.project_top}>
                <h3>{project.title} </h3>
                <span className={styles.completed}>
                  {project.completed === true ? "💫 Completed" : "🌟 Ongoing"}
                </span>
                {<span className={styles.date}>{project.date}</span>}
              </div>
              <p>{project.description}</p>
              <div className={styles.project_links}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    aria-label="Preview Link for project"
                    title={project.title}
                  >
                    Preview <CgArrowTopRight className={styles.arrow} />
                  </a>
                )}
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    aria-label="Preview Link for project"
                    title={project.title}
                  >
                    GitHub <CgArrowTopRight className={styles.arrow} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
