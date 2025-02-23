import { Link } from "react-router-dom";
import { SmallHeader } from "../../../../components";
import { SmallCompanyData } from "../../../../helper/data/CompanyData";

export const ExperienceSection = () => {
  const latestCompanyData = SmallCompanyData[SmallCompanyData.length - 1];
  return (
    <section className="bg-[#2c2c2c] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw] flex flex-col gap-4 sm:gap-[1vw]">
      <SmallHeader
        primaryTitle="Experience"
        isSecondaryTitle={false}
        isButton
        url="/experience"
      />
      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]">
        <Link
          className={"cursor-pointer"}
          to={`/company/${latestCompanyData?.name}`}
        >
          <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] flex flex-col sm:flex-row gap-[1vw] ">
            <div
              className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-[1vw] p-2 sm:p-[.4vw] w-max sm:min-w-max  h-max "
              id={`company-${latestCompanyData?.name}`}
            >
              <img
                src={latestCompanyData?.image}
                alt=""
                className="w-[20vw]  h-[20vw] sm:w-[5vw] sm:h-[5vw] rounded-lg  sm:rounded-[1vw] bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-[.5vw]">
              <div>
                <h1 className="font-bold text-xl sm:text-[clamp(1.4rem,1.5vw,3rem)]">
                  {latestCompanyData?.name}
                </h1>
              </div>
              <div>
                <p className="text-md sm:text-[clamp(.85rem,1.1vw,1.7rem)]">
                  {latestCompanyData?.description}
                </p>
              </div>
              <div className="flex gap-4 sm:gap-[1vw] items-center">
                <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                  {latestCompanyData?.role}
                </p>{" "}
                *
                <p className="text-sm sm:text-[clamp(.6rem,1vw,1.3rem)]">
                  {latestCompanyData?.duration}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
