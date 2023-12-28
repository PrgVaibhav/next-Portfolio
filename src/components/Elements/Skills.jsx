import React from "react";
import { SectionWrapper } from "../helpers/SectionWrapper";
import { SKILLS, learning } from "../../data/SkillsData";
import "./Skills.scss";
export const Skills = () => {
  return (
    <SectionWrapper label="Skills section">
      <div className="skills_section">
        <div className="skills_header">
          <h2>🛠 Skills.</h2>
          <p>
            Prepare yourself for a sneak peek into my skill arsenal! Contrary to
            popular belief, I didn't attain these powers by deciphering ancient
            scrolls or consulting a wise old owl (although that would've been
            cool).
          </p>
        </div>

        <div className="skills_body">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill">
              <h3>🏆 {skill.heading}</h3>
              <ul>
                {skill.list.map((item, index) => (
                  <li key={index} className="skill_item">
                    <img src={item.img} alt={item.alt} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {learning.map((skill, index) => (
            <div key={index} className="skill">
              <h3>🎯 {skill.heading}</h3>
              <ul>
                {skill.list.map((item, index) => (
                  <li key={index} className="skill_item">
                    <img src={item.img} alt={item.alt} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
