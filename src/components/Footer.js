import { BsArrowUpCircleFill } from "react-icons/bs";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>
          Made with <span className={styles.emoji}>❤</span> by Vaibhav
        </p>
        <a
          className={styles.go_up}
          href="#main"
          aria-label="Link to go on the front page"
        >
          <BsArrowUpCircleFill />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
