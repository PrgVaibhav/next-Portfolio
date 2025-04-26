import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "../image/Image";

interface LongCardProps {
  data: {
    image: string;
    name: string;
    description: string;
    role?: string;
    duration?: string;
    tag?: "Current" | "Ongoing" | "Completed";
    type?: "Project" | "NPM Package";
    isTagAvailable?: boolean;
    url: string;
  };
}

export const LongCard: React.FC<LongCardProps> = ({ data }) => {
  return (
    <Link to={data.url} className="w-full">
      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]  hover:shadow-lg transition-all duration-200 ease-in-out">
        <div className="bg-[#1e1f1e] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] flex flex-col sm:flex-row gap-3 sm:gap-[1vw] border border-white/10">
          <Image
            url={data.image}
            alt={`${data.name} preview image`}
            objectFit="contain"
            imgClassName="w-[15vw] h-[15vw] sm:w-[5vw] sm:h-[5vw] rounded-lg sm:rounded-[.8vw] bg-white/40"
            containerClassName=" p-4 sm:p-[.6vw] w-max sm:min-w-max h-max overflow-hidden rounded-lg sm:rounded-[.8vw]"
          />

          <div className="flex flex-col gap-2 sm:gap-[.5vw]">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)] text-white">
                {data.name}
              </h1>
              <div className="flex gap-3 sm:gap-[.5vw]">
                {data.isTagAvailable && (
                  <span className="text-xs sm:text-[clamp(.6rem,.9vw,1.3rem)] flex items-center justify-start gap-2 sm:gap-[.5vw] uppercase bg-[#21382e]/80 border-2 border-green-950 text-[#408f52] rounded-lg sm:rounded-[.8vw] px-3 sm:px-[.8vw] py-1 sm:py-[.4vw] w-max">
                    {data.tag}
                  </span>
                )}
                <span>
                  <ChevronRight className="text-[#b5b5b5]" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-[clamp(.85rem,1.1vw,1.7rem)]">
                {data.description}
              </p>
            </div>
            <div className="flex gap-4 sm:gap-[1vw] items-center">
              {data.role && (
                <>
                  <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                    {data.role}
                  </p>
                  *
                </>
              )}

              {data.duration && (
                <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                  {data.duration}
                </p>
              )}

              {data.type && (
                <>
                  *
                  <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)] bg-neutral-800 rounded-lg sm:rounded-[.8vw] px-2 sm:px-[.5vw] py-1 sm:py-[.2vw]">
                    {data.type}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
