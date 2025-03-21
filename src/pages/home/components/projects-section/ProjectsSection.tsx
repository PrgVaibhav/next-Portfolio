import { LongCard, SmallHeader } from "../../../../components";
// import podHead from "../../../../assets/images/logo.png";

import podHead from "../../../../assets/images/assets/podhead.png";
import quickId from "../../../../assets/images/assets/quickidgen.png";
export const ProjectsSection = () => {
  return (
    <section className="bg-[#2c2c2c] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw] flex flex-col gap-4 sm:gap-[1vw]">
      <SmallHeader
        primaryTitle="Projects"
        isSecondaryTitle={false}
        isButton
        url="/projects"
      />
      <LongCard
        data={{
          image: podHead,
          name: "PodHead",
          description:
            "A podcast app that allows users to listen to their favorite podcasts, create playlists, and share them with friends.",
          isTagAvailable: true,
          tag: "Ongoing",
          url: "/project/PodHead",
        }}
      />
      <LongCard
        data={{
          image: quickId,
          name: "QuickIDGen",
          description:
            "An NPM package that generates unique IDs for your projects. It is easy to use and has a lot of customization options.",
          isTagAvailable: true,
          tag: "Completed",
          url: "/project/QuickIDGen",
        }}
      />
    </section>
  );
};
