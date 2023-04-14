import styles from "../styles/AboutMe.module.css";
import hello from "../assets/hey hey hey.webp";
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
          loading="lazy"
        />
        <div className={styles.about_me_description}>
          <h1>I'm Vaibhav</h1>
          <p>FrontEnd Developer From Bihar, India</p>
          <p>20</p>
        </div>
      </div>
      <div className={styles.about_me_body}>
        <h2>About me.</h2>
        <p>
          Hey, I'm a{" "}
          <strong className={styles.special}>FrontEnd developer</strong>, I love
          creating things that live on the web. I specialize in
          <strong className={styles.special}>
            {" "}
            creating websites
          </strong> and{" "}
          <strong className={styles.special}>web applications</strong>. I'm a{" "}
          <strong className={styles.special}>fast learner</strong> and I love to
          learn new things.
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
          <h2>🌠 Tools which I'm learrning:</h2>
          <ul>
            <li>Next Js</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySql</li>
          </ul>
        </div>
      </div>
      {/* <div className="about-hobbies">
        <h2>🎮 Hobbies:</h2>
      </div> */}
    </div>
  );
};

export default AboutMe;
