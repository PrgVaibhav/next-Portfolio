import error from "../assets/error.gif";
import Head from "next/head";
import styles from "../styles/Error.module.css";
import Image from "next/image";
const Error = () => {
  return (
    <>
      <Head lang="en">
        <title>404 Error | Vaibhav Kumar</title>
        <meta name="title" content="404 Error Page" />
        <meta name="description" content="404 Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Error Page" />
        <meta
          property="og:description"
          content="Portfolio website of Vaibhav Kumar"
        />
        <meta property="og:url" content="https://vaibhavkumar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vaibhav Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
