import React from "react";
import { SectionWrapper } from "../helpers/SectionWrapper";

import "./AboutMe.scss";
export const AboutMe = () => {
  return (
    <SectionWrapper label={"About Me."}>
      <div className="about_section">
        <div className="section_header">
          <h2>👀 About Me.</h2>
          <p>Know more about me :)</p>
        </div>
        <div className="details">
          <p>
            Hello, I'm Vaibhav, a ReactJS Developer with a passion for building
            responsive and beautiful websites. I completed my graduation in 2023
            with BCA (Bachelor's in Computer Application).
          </p>
          <p>
            I enjoy building websites that are both beautiful and user-friendly.
            I believe in simplicity and minimalism and enjoy bringing that mood
            into every project I touch.
          </p>
          <p>
            Let's connect and explore how we can collaborate on any project.
            Feel free to browse through my portfolio to see some of my latest
            work, and don't hesitate to reach out for any inquiries or
            opportunities. I look forward to connecting with you!
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
