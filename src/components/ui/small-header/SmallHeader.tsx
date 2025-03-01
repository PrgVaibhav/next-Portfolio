import { LoaderPinwheel, MoveRight, Sparkles } from "lucide-react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

interface SMALL_HEADER_PROPS {
  primaryTitle?: string;
  secondaryTitle?: string;
  isSecondaryTitle?: boolean;
  isButton?: boolean;
  url?: string; // Make url optional
}

export const SmallHeader: React.FC<SMALL_HEADER_PROPS> = ({
  primaryTitle,
  secondaryTitle,
  isSecondaryTitle = true,
  isButton = false,
  url, // It remains optional
}) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-2 sm:gap-[.5vw]">
        <Sparkles className="light-color" size={18} />
        <h1 className="text-[#dfdfdf] font-bold text-md sm:text-[clamp(1rem,1.4vw,3rem)]">
          {primaryTitle}
        </h1>
      </div>
      {isSecondaryTitle && (
        <div className="flex items-center justify-start gap-2 sm:gap-[.5vw] uppercase bg-[#21382e] text-[#408f52] rounded-lg sm:rounded-[.8vw] px-2 sm:px-[.5vw] py-1 sm:py-[.2vw] w-max">
          <LoaderPinwheel size={15} />
          <h1 className="font-bold text-xs sm:text-[clamp(.85rem,1vw,2rem)]">
            {secondaryTitle}
          </h1>
        </div>
      )}
      {isButton &&
        url && ( // Only render the Link if isButton is true and url is provided
          <Link to={url}>
            <Button
              cn="bg-[#393839] px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
              rightIcon={<MoveRight />}
            >
              View All
            </Button>
          </Link>
        )}
    </div>
  );
};
