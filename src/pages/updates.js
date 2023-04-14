import styles from "../styles/Update.module.css";
import { UpdateData } from "../data/UpdateData";
import { BiTime } from "react-icons/bi";
import Head from "next/head";
const Update = () => {
  return (
    <>
      <Head lang="en">
        <title>Updates | Vaibhav Kumar</title>
        <meta name="title" content="Update Page" />
        <meta name="description" content="Update page for Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Update Page" />
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
      <div className={styles.update_container} id="main">
        <h2>Updates 💹</h2>
        <p>
          I'm learning everyday that's why whenever I learn any new thing I want
          to add that stuff in my projects, and by doing this I build my muscle
          memory, and I also get to implement all the new things which I learn.
        </p>
        {UpdateData.map((update) => {
          return (
            <div className={styles.update} key={update.id}>
              <div className={styles.update_description}>
                <h3 className={styles.update_title}>{update.title}</h3>
                <p className={styles.update_brief}>{update.description}</p>
                <p className={styles.update_date}>
                  <BiTime />
                  {update.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Update;
