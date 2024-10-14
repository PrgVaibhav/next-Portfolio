import React from "react";

type SectionProps = {
  children: React.ReactNode;
  label: string;
  background?: string;
};

export const Section = ({ children, label, background }: SectionProps) => {
  return (
    <section
      className={`${background} w-full py-12 nav-font`}
      aria-label={label}
    >
      <div className="flex justify-center items-start flex-col md:w-3/4 m-auto px-5">
        {children}
      </div>
    </section>
  );
};
