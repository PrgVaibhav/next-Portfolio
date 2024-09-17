import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";

import { SectionWrapper } from "../helpers/SectionWrapper";
import { Button } from "../UI/Button";
import logo from "../../assets/avataaars.svg";
import "./HeroSection.scss";
export const HeroSection = () => {
  return (
    <SectionWrapper label="Intro section">
      <div className="hero_section">
        <div className="hero_section_details">
          <h3>Hello,</h3>
          <h2>
            I'm Vaibhav, a <span>ReactJS Developer.</span>
          </h2>

          <div className="small_details">
            <p>
              <span>
                <GrLocationPin className="icon" /> Patna, Bihar.
              </span>
            </p>
            <p>
              <span>
                <MdOutlineMenuBook className="icon" /> Graduated.
              </span>
            </p>
          </div>
          <div className="hobbies">
            <p>
              <span>👨‍💻 Developer.</span>
            </p>
            <p>
              <span>🎮 Gamer.</span>
            </p>
            <p>
              <span>🙎‍♂️ Writer.</span>
            </p>
          </div>

          <div className="opportunities">
            <p>Open for Job / Internship / Freelance opportunities</p>
          </div>
          <div className="controls">
            <a
              href="https://drive.google.com/file/d/10soR5OtWgnleAE8mqXq4jUatN7zoLuu9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="resume link"
            >
              <Button className={"resume"} label={"Button to view resume"}>
                Resume.
              </Button>
            </a>
            <a href="#contact">
              <Button className={"talk"} label={"Button to contact me"}>
                Let's Talk.
              </Button>
            </a>
          </div>
        </div>
        <div className="hero_section_img">
          <img src={logo} alt="avatar logo" />
        </div>
      </div>
    </SectionWrapper>
  );
};
