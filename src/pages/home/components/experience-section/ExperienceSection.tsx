import { LongCard, SmallHeader } from "../../../../components";
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
      <LongCard data={latestCompanyData} />
    </section>
  );
};
