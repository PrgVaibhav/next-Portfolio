// import error from "../assets/error.gif";
import styles from "../styles/Error.module.scss";
import Image from "next/image";
const Error = () => {
  return (
    <div className={styles.error_container}>
      {/* <Image
        src={error}
        alt="Error giphy"
        aria-label="error giphy"
        width={100}
        height={100}
      ></Image> */}
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default Error;
