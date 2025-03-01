import { FileWarning, LaptopMinimalCheck } from "lucide-react";
import React from "react";

interface TOAST_PROPS {
  message: string;
  error?: boolean;
  success?: boolean;
}

export const Toast: React.FC<TOAST_PROPS> = ({
  message,
  error = false,
  success = true,
}) => {
  return (
    <div
      className={`absolute top-4 right-4 sm:top-[1vw] sm:right-[1vw] ${
        success && "bg-[#21382e] text-[#408f52]"
      } ${
        error && "bg-red-200 text-red-400"
      }  rounded-lg sm:rounded-[.8vw] px-2 sm:px-[.5vw] py-1 sm:py-[.2vw] w-max`}
    >
      <p className="text-md sm:text-[clamp(.8rem.1vw,1.5rem)] capitalize flex gap-2 sm:gap-[.3vw] items-center text-wrap">
        {error && <FileWarning />}
        {success && <LaptopMinimalCheck />}
        {message}
      </p>
    </div>
  );
};
