import styles from "../styles/Greeting.module.css";
const Greeting = () => {
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
  return (
    <div className={styles.greeting}>
      <p>{greeting()} </p>
    </div>
  );
};

export default Greeting;
