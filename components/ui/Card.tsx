import React from "react";

interface CardProps {
  children: React.ReactNode;
  label?: string;
  cn?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  cn = "max-w-md w-full h-auto rounded-lg",
  label,
}) => {
  return (
    <div className={` ring ring-gray-300  px-4 py-2  ${cn ? cn : ""}`}>
      {children}
    </div>
  );
};

export default Card;
