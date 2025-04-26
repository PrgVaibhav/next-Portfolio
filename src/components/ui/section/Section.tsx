import React from "react";

interface SectionProps {
  children: React.ReactNode;
  label: string;
  cn?: string;
}

export const Section: React.FC<SectionProps> = ({ children, label, cn }) => {
  return (
    <section
      className={`bg-[#2c2c2c60] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw] flex flex-col gap-4 sm:gap-[1vw] ${cn}`}
      aria-label={label}
    >
      {children}
    </section>
  );
};
