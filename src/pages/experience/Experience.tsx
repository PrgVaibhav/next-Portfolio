import { LongCard, SmallHeader } from "../../components";
import { SmallCompanyData } from "../../helper/data/CompanyData";
export const Experience = () => {
  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <SmallHeader primaryTitle="Experience" isSecondaryTitle={false} />
      {SmallCompanyData.map((data) => (
        <LongCard
          data={{
            image: data.image,
            name: data.name,
            description: data.description,
            role: data.role,
            duration: data.duration,
            url: `/company/${data.name}`,
          }}
          key={data.id}
        />
      ))}
    </section>
  );
};
