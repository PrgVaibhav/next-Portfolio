import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Socials = () => {
  return (
    <div className="socials" aria-label="Socials section">
      <p title="Twitter">
        <a
          href="https://twitter.com/SyntaxError408"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter Account link"
        >
          <FaXTwitter />
        </a>
      </p>
      <p title="GitHub">
        <a
          href="https://github.com/PrgVaibhav"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Account link"
        >
          <FaGithub />
        </a>
      </p>
      <p title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/devxvaibhav"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Account link"
        >
          <FaLinkedin />
        </a>
      </p>
      <p title="Email">
        <a
          href="mailto:vaibhav.pandey1508@gmail.com?subject=Subject%20Here&body=Hello,%20I%20would%20like%20to%20contact%20you."
          aria-label="Email me link"
        >
          <MdEmail />
        </a>
      </p>
    </div>
  );
};
