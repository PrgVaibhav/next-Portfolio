import styles from "../styles/projects.module.scss";
import { CgArrowTopRight } from "react-icons/cg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
const Projects = ({ projects }) => {
  return (
    <>
      <Seo title="Projects | Vaibhav Kumar" description="Projects of Vaibhav" />
      <div className={styles.projects_container}>
        <div className={styles.projects_header}>
          <h2>Projects.</h2>
        </div>
        <div className={styles.projects_cards}>
          {projects?.map((project) => {
            return (
              <div className={styles.projects_card} key={project.id}>
                <div>
                  <Fade arrows={false} duration={1500} canSwipe={true} autoplay>
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
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const { projects } = await import("../data/ProjectData.json");
  const sortedProjectsByDate = projects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return {
    props: {
      projects: sortedProjectsByDate,
    }, // will be passed to the page component as props
  };
}
