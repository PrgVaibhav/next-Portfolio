import styles from "../styles/Loader.module.css";
import Seo from "./Seo";

const Loader = () => {
  return (
    <>
      <Seo title="Loading..." />
      <div className={styles.loader}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Loader;
