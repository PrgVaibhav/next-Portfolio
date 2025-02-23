import { Link } from "react-router-dom";
import { SmallHeader } from "../../../../components";
import dice from "../../../../assets/images/dice.webp";
export const ProjectsSection = () => {
  return (
    <section className="bg-[#2c2c2c] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw] flex flex-col gap-4 sm:gap-[1vw]">
      <SmallHeader
        primaryTitle="Projects"
        isSecondaryTitle={false}
        isButton
        url="/projects"
      />
      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]">
        <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] flex flex-col sm:flex-row gap-[1vw] ">
          <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-[1vw] p-2 sm:p-[.4vw] w-max sm:min-w-max  h-max ">
            <img
              src={dice}
              alt=""
              className="w-[20vw]  h-[20vw] sm:w-[5vw] sm:h-[5vw] rounded-lg  sm:rounded-[1vw] bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
