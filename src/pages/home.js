import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Freelancing from "../components/Freelancing";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Updates from "../components/Update";
const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.greeting}>
        <span>नमस्ते 🙏 </span>
      </div>
      <AboutMe />
      <Experience />
      <Freelancing />
      <Projects />
      <Updates />
      <Socials />
    </div>
  );
};

export default HomePage;
