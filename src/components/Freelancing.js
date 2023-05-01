import styles from "../styles/Freelancing.module.scss";
import { CgArrowTopRight } from "react-icons/cg";
const Freelancing = () => {
  return (
    <div className={styles.freelancing_container}>
      <p>
        I'm currently open to work as a freelancer on any project which includes
        front end development.
      </p>
      <p>
        Drop a message on my{" "}
        <a
          href="mailto:vaibhav.pandey1508@gmail.com"
          aria-label="Mail me at vaibhav.pandey1508@gmail.com"
        >
          mail
          <CgArrowTopRight className={styles.arrow} />
        </a>
      </p>
    </div>
  );
};

export default Freelancing;
