import styles from "../styles/Update.module.scss";
import { UpdateData } from "../data/UpdateData";
import { BiTime } from "react-icons/bi";
import Head from "next/head";
import Seo from "@/components/Seo";
const Update = () => {
  return (
    <>
      <Seo title="Updates" description="Update page of vaibhav kumar" />
      <div className={styles.update_container} id="main">
        <h2>Updates.</h2>
        <p>
          I am learning everyday that is why whenever I learn any new thing I
          want to add that stuff in my projects, and by doing this I build my
          muscle memory, and I also get to implement all the new things which I
          learn.
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
