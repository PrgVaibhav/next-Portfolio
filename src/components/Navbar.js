import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  const time = new Date();
  const hour = time.getHours();
  const greeting = () => {
    if (hour <= 12) {
      return "Good Morning Visitor 👋, Happy Coding 🚀";
    } else if (hour <= 16) {
      return "Good Afternoon Visitor 👋, Happy Coding 🚀";
    } else if (hour <= 20) {
      return "Good Evening Visitor 👋, Happy Coding 🚀";
    } else {
      return "Good Night Visitor 👋, Happy Coding 🚀";
    }
  };

  console.log(hour);
  return (
    <>
      <div className={styles.greeting}>
        <p>{greeting()} </p>
      </div>
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
    </>
  );
};

export default Navbar;
