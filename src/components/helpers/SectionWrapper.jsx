import React from "react";
import "./SectionWrapper.scss";
export const SectionWrapper = ({ children, label, custom }) => {
  return (
    <section aria-label={label || ""} className={"section "}>
      {children}
    </section>
  );
};
