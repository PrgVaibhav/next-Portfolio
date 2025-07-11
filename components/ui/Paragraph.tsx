import React from "react";

interface ParagraphProps {
  cn?: string;
  label?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  cn = "text-md font-open font-regular text-gray-500",
  label,
  children,
}) => {
  return (
    <p className={`${cn} transition-all duration-200`} aria-label={label}>
      {children}
    </p>
  );
};

export default Paragraph;
