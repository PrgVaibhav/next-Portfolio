import styles from "../styles/Update.module.css";
import { UpdateData } from "../data/UpdateData";
import { BiTime } from "react-icons/bi";
import Head from "next/head";
const Update = () => {
  return (
    <>
      <Head>
        <title>Updates | Vaibhav Kumar</title>
        <meta name="description" content="Update page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.update_container}>
        <h2>Updates 💹</h2>
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
