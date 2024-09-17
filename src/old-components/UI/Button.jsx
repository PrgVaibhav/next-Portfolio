import React from "react";

export const Button = ({
  children,
  type,
  disabled,
  onClick,
  label,
  className,
}) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      onClick={onClick}
      aria-label={label || "Button"}
      className={className ? className : ""}
    >
      {children}
    </button>
  );
};
