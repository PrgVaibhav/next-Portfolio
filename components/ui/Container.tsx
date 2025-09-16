import React from "react";

interface ContainerProps {
  label?: string;
  cn?: string;
  children: React.ReactNode;
  tag?: string;
}

const Container: React.FC<ContainerProps> = ({
  label,
  children,
  cn,
  tag = "section",
}) => {
  return (
    <section
      className={`${cn} container mx-auto max-w-6xl flex flex-col justify-center items-center px-6 sm:px-4 py-10 border-b-2 border-black`}
      aria-label={label}
    >
      {children}
    </section>
  );
};

export default Container;
