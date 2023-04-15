import styles from "../styles/Freelancing.module.css";
import { CgArrowTopRight } from "react-icons/cg";
const Freelancing = () => {
  return (
    <div className={styles.freelancing_container}>
      <p>
        I'm currently open to work as a freelancer or a team member on any
        project which includes front end development.
      </p>
      <p>
        You can drop a message on my mail{" "}
        <a
          href="mailto:vaibhav.pandey1508@gmail.com"
          aria-label="Mail me at vaibhav.pandey1508@gmail.com"
        >
          here
          <CgArrowTopRight className={styles.arrow} />
        </a>
      </p>
    </div>
  );
};

export default Freelancing;
