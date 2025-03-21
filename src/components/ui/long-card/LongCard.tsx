import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    url?: string;
  };
}

export const LongCard: React.FC<LongCardProps> = ({ data }) => {
  return (
    <Link to={data.url ? data.url : "/"} className="w-full">
      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]  hover:shadow-lg transition-all duration-200 ease-in-out">
        <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] flex flex-col sm:flex-row gap-[1vw] ">
          <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-[1vw] p-2 sm:p-[.4vw] w-max sm:min-w-max  h-max ">
            <img
              src={data.image}
              alt=""
              className="w-[15vw]  h-[15vw] sm:w-[5vw] sm:h-[5vw] rounded-lg  sm:rounded-[1vw] object-contain bg-black/30 p-2"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-[.5vw]">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)] text-white">
                {data.name}
              </h1>
              <div className="flex gap-3 sm:gap-[.5vw]">
                {data.isTagAvailable && (
                  <span className="text-sm sm:text-[clamp(.6rem,.9vw,1.3rem)] flex items-center justify-start gap-2 sm:gap-[.5vw] uppercase bg-[#21382e] text-[#408f52] rounded-lg sm:rounded-[.8vw] px-2 sm:px-[.5vw] py-1 sm:py-[.2vw] w-max">
                    {data.tag}
                  </span>
                )}
                <span>
                  <ChevronRight className="text-[#b5b5b5]" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-md sm:text-[clamp(.85rem,1.1vw,1.7rem)]">
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
