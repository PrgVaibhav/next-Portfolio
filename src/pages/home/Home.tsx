import { SmallHeader } from "../../components";
import { HeroSection } from "./components/hero-section/HeroSection";
import { AboutSection } from "./components/about-section/AboutSection";
import { ExperienceSection } from "./components/experience-section/ExperienceSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
export const Home = () => {
  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <SmallHeader
        primaryTitle="ReactJS Developer"
        secondaryTitle="Available For Work"
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
};
