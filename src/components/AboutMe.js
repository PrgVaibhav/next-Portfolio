import styles from "../styles/AboutMe.module.scss";
import hello from "../../public/hey hey hey.webp";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className={styles.about_me_container}>
      <div className={styles.about_me_header}>
        <Image
          src={hello}
          alt="user saying hello"
          aria-label="user saying hello"
          placeholder="blur"
          priority={true}
          style={{ height: "auto", width: "100%" }}
        />
        <div className={styles.about_me_description}>
          <h1>Hey I am Vaibhav</h1>
          <p>
            FrontEnd Developer From India. Love to make things alive by code.
          </p>
          <p>20 years old.</p>
        </div>
      </div>
      <div className={styles.about_me_body}>
        <h2>About me.</h2>
        <p>
          I am a <strong className={styles.special}>FrontEnd developer</strong>,
          I love creating things that live on the web. I specialize in{" "}
          <strong className={styles.special}> Creating websites</strong> and{" "}
          <strong className={styles.special}>web applications</strong>. I am a{" "}
          <strong className={styles.special}>fast learner</strong> and I love to{" "}
          <strong className={styles.special}>Craft digital experiences</strong>{" "}
          with code.
        </p>
      </div>
      <div className={styles.tools}>
        <div className={styles.daily}>
          <h2>💻 Tools which I use daily:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className={styles.learning}>
          <h2>🌠 Tools which I am learning:</h2>
          <ul>
            <li>Next Js</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySql</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
