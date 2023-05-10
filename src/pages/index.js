import styles from "../styles/Home.module.scss";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Freelancing from "../components/Freelancing";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Updates from "../components/Update";
import Seo from "@/components/Seo";
export default function Home({ projects }) {
  return (
    <>
      <Seo title="Vaibhav Kumar" />
      <div id="main">
        <div className={styles.home_container}>
          <div className={styles.greeting}>
            <blockquote>नमस्ते 🙏 </blockquote>
          </div>
          <AboutMe />
          <Experience />
          <Freelancing />
          <Projects projects={projects} />
          <Updates />
          <Socials />
        </div>
      </div>
    </>
  );
}

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
