import { ExperienceCards, Section } from "../../../Components";

export const ExperienceSection = () => {
  return (
    <Section background="bg-[#212121]" label="Experience Section">
      <div className="mb-12">
        <h2 className="text-4xl font-semibold text-white  mb-2">Education.</h2>
        <p className="text-sm md:text-lg text-gray-400 font-medium">
          From acing exams to finding the perfect coffee-shop study spots, my
          academic journey has been as diverse as my interests. Here's a peek
          into the classrooms and campuses that shaped me.
        </p>
        <div className="flex flex-wrap gap-8 items-stretch mt-4 ">
          <ExperienceCards />
          <ExperienceCards />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-white mb-2">Experience.</h2>
        <p className="text-sm md:text-lg text-gray-400 font-medium">
          From writing my first "Hello, World!" to building scalable web
          applications, here's a snapshot of the rollercoaster ride that is my
          professional life.
        </p>
        <div className="flex flex-wrap gap-8 items-stretch mt-4 ">
          <ExperienceCards />
          <ExperienceCards />
          <ExperienceCards />
          <ExperienceCards />
        </div>
      </div>
    </Section>
  );
};
