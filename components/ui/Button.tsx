import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  label?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  cn?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
}

interface VARIANT_STYLE_VALUE {
  primary: string;
  ghost: string;
  outline: string;
}

interface SIZE_STYLE_VALUE {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const VARIANT_STYLE: VARIANT_STYLE_VALUE = {
  primary:
    "bg-gradient-to-r from-gray-800  to-gray-900 text-white hover:bg-black",
  outline: "bg-transparent text-gray-600 hover:bg-zinc-100 ring ring-gray-200",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
};

const SIZE_STYLE: SIZE_STYLE_VALUE = {
  sm: "h-8 px-3 py-1 text-sm ",
  md: "h-10 px-4 py-2 text-base ",
  lg: "h-12 px-5 py-2.5 text-lg ",
  xl: "h-14 px-6 py-3 text-xl ",
};

const Button: React.FC<ButtonProps> = ({
  isLoading,
  children,
  disabled,
  label,
  rightIcon,
  leftIcon,
  cn,
  variant = "primary",
  size = "sm",
  ...rest
}) => {
  const variantClass = VARIANT_STYLE[variant];
  const sizeClass = SIZE_STYLE[size];
  return (
    <button
      disabled={isLoading}
      aria-label={label || "button element"}
      className={`
        inline-flex items-center justify-center gap-2 
        font-medium transition-all duration-200 ease-in-out cursor-pointer active:scale-90 font-open
        ${variantClass} ${sizeClass} ${cn}
        ${isLoading || disabled ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {isLoading ? (
        <span className="animate-spin">
          <Loader2 />
        </span>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
