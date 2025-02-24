import { Link } from "react-router-dom";

interface LongCardProps {
  data: {
    image: string;
    name: string;
    description: string;
    role: string;
    duration: string;
    tag?: "Current" | "Ongoing" | "Completed";
    type?: "Project" | "NPM Package";
    isTagAvailable?: boolean;
  };
}

export const LongCard: React.FC<LongCardProps> = ({ data }) => {
  return (
    <Link to={"/project/" + data.name}>
      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]">
        <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] flex flex-col sm:flex-row gap-[1vw] ">
          <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-[1vw] p-2 sm:p-[.4vw] w-max sm:min-w-max  h-max ">
            <img
              src={data.image}
              alt=""
              className="w-[20vw]  h-[20vw] sm:w-[5vw] sm:h-[5vw] rounded-lg  sm:rounded-[1vw] bg-black"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-[.5vw]">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)]">
                {data.name}
              </h1>
              {data.isTagAvailable && (
                <span className="text-sm sm:text-[clamp(.6rem,.9vw,1.3rem)] flex items-center justify-start gap-2 sm:gap-[.5vw] uppercase bg-[#21382e] text-[#408f52] rounded-lg sm:rounded-[.8vw] px-2 sm:px-[.5vw] py-1 sm:py-[.2vw] w-max">
                  {data.tag}
                </span>
              )}
            </div>
            <div>
              <p className="text-md sm:text-[clamp(.85rem,1.1vw,1.7rem)]">
                {data.description}
              </p>
            </div>
            <div className="flex gap-4 sm:gap-[1vw] items-center">
              <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                {data.role}
              </p>
              *
              <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                {data.duration}
              </p>
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
