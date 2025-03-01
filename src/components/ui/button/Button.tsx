import { LoaderCircle } from "lucide-react";

interface BUTTON_PROPS {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
  cn?: string;
}

export const Button: React.FC<BUTTON_PROPS> = ({
  children,
  type,
  disabled,
  onClick,
  rightIcon,
  leftIcon,
  isLoading,
  cn,
}) => {
  return (
    <button
      className={`${cn} inter flex gap-2 sm:gap-[.5vw] items-center text-sm sm:text-[clamp(.8rem,1vw,2rem)] rounded-lg  sm:rounded-[.5vw] cursor-pointer hover:shadow active:scale-90 transition-all duration-300`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon && <span>{leftIcon}</span>}

      {isLoading && (
        <span>
          <LoaderCircle className="animate-spin" />
        </span>
      )}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
