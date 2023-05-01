import styles from "../styles/Socials.module.scss";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

const Socials = () => {
  return (
    <div className={styles.social_container}>
      <h2>Connect With Me.</h2>
      <div className={styles.socials}>
        <div className={styles.social}>
          <FiGithub className={styles.social_icons} />
          <span>GitHub</span>
          <a
            href="https://github.com/PrgVaibhav"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile Link"
          >
            @prgVaibhav <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <BsMailbox className={styles.social_icons} />
          <span>Mail</span>
          <a
            href="mailto:vaibhav.pandey1508@gmail.com"
            aria-label="Email Message Link"
          >
            @vaibhav <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <CiTwitter className={styles.social_icons} />
          <span>Twitter</span>
          <a
            href="https://twitter.com/SyntaxError408"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile Link"
          >
            @SyntaxError408 <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <RxInstagramLogo className={styles.social_icons} />
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/codeewithme/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile Link"
          >
            @codeewithme <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <AiOutlineLinkedin className={styles.social_icons} />
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/devxvaibhav"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile Link"
          >
            @devXvaibhav <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <SiHashnode className={styles.social_icons} />
          <span>Hashnode</span>
          <a
            href="https://vaibhavwrites.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Hashnode Profile Link"
          >
            @devXvaibhav <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <AiOutlineYoutube className={styles.social_icons} />
          <span>YouTube</span>
          <a
            href="https://www.youtube.com/channel/UCGbaw2zSU3QlqlGDC7gXmag"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube Profile Link"
          >
            @WebDevCode <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
        <div className={styles.social}>
          <TbBrandFiverr className={styles.social_icons} />
          <span>Fiverr</span>
          <a
            href="https://www.fiverr.com/webdevvaibhav/be-your-front-end-developer-and-designer-with-react-js"
            target="_blank"
            rel="noreferrer"
            aria-label="Fiverr Profile Link"
          >
            @WebDevVaibhav <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
