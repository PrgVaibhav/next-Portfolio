import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <span>{`</Vaibhav>`}</span>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname == "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={router.pathname == "/blogs" ? styles.active : ""}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
