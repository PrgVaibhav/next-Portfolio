import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import styles from "../styles/Updates.module.scss";
const Update = () => {
  return (
    <>
      <div className={styles.updates_container}>
        <p>
          If you're interested you can see the updates I am making in my
          portfolio from this{" "}
          <Link href="/updates">
            Update
            <CgArrowTopRight className={styles.arrow} />
          </Link>{" "}
          section
        </p>
      </div>
    </>
  );
};

export default Update;
