import error from "../../public/error.gif";
import Head from "next/head";
import styles from "../styles/Error.module.scss";
import Image from "next/image";
import Seo from "@/components/Seo";
const Error = () => {
  return (
    <>
      <Seo title="Error 404" description="Error page for Vaibhav Kumar" />
      <div className={styles.error_container}>
        <Image
          src={error}
          alt="Error giphy"
          aria-label="error giphy"
          width={100}
          height={100}
        />
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </>
  );
};

export default Error;
