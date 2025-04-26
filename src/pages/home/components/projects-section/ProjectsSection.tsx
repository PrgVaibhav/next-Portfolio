import { LongCard, Section, SmallHeader } from "../../../../components";
// import podHead from "../../../../assets/images/logo.png";

import podHead from "../../../../assets/images/assets/podhead.png";
import quickId from "../../../../assets/images/assets/quickidgen.png";
export const ProjectsSection = () => {
  return (
    <Section label="">
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
          url: "/projects/PodHead",
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
          url: "/projects/QuickIDGen",
        }}
      />
    </Section>
  );
};
