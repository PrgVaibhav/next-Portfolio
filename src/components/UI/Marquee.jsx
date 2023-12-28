import React from "react";
import "./Marquee.scss"; // Import your CSS file
import { SectionWrapper } from "../helpers/SectionWrapper";

export const Marquee = () => {
  return (
    <SectionWrapper label="Marquee section">
      <div className="marquee-container">
        <div className="marquee-content">
          <p>🌟 Website Developer</p>
          <p>🌟 Bug/UI fixing</p>
          <p>🌟 Open for freelancing / Job Opportunities</p>
        </div>
      </div>
    </SectionWrapper>
  );
};
