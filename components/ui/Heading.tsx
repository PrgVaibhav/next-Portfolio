import React from "react";

interface HeadingProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  cn?: string;
  label?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  tag = "h1",
  cn = "text-2xl font-medium leading-none ",
  label,
  children,
}) => {
  const Tag = tag;

  return (
    <Tag className={`${cn && cn}`} aria-label={label}>
      {children}
    </Tag>
  );
};

export default Heading;
