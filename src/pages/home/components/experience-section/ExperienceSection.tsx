import { LongCard, Section, SmallHeader } from "../../../../components";
import { SmallCompanyData } from "../../../../helper/data/CompanyData";

export const ExperienceSection = () => {
  const latestCompanyData = SmallCompanyData[SmallCompanyData.length - 1];
  const lastTwoCompanyData = SmallCompanyData.slice(-2);

  console.log(`lastTwoCompanyData`, lastTwoCompanyData);

  return (
    <Section label="Experience section">
      <SmallHeader
        primaryTitle="Experience"
        isSecondaryTitle={false}
        isButton
        url="/experience"
      />
      <LongCard data={latestCompanyData} />
    </Section>
  );
};
