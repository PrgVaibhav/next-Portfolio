import { LongCard, SmallHeader } from "../../components";
import { ProjectData } from "../../helper/data/ProjectData";

export const Projects = () => {
  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <SmallHeader primaryTitle="Projects" isSecondaryTitle={false} />

      <section className="flex flex-col gap-4 sm:gap-[2vh]">
        {ProjectData.map((project) => (
          <LongCard
            data={{
              image: project.image,
              name: project.name,
              description: project.description,
              //   duration: project.duration,
              url: `/project/${project.name}`,
              isTagAvailable: true,
              tag: project.tag,
            }}
            key={project.id}
          />
        ))}
      </section>
    </section>
  );
};
