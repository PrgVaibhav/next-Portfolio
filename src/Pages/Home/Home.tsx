import { ExperienceSection } from "./ExperienceSection/ExperienceSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";
import { WhatIDo } from "./WhatIDo/WhatIDo";

export const Home = () => {
  return (
    <section>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <WhatIDo />
    </section>
  );
};
