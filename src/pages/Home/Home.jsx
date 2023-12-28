import {
  AboutMe,
  Experience,
  HeroSection,
  Marquee,
  Projects,
  Skills,
} from "../../components";
import { useTitle } from "../../hooks/useTitle";

export const Home = () => {
  useTitle({ title: "Home" });

  return (
    <>
      {/* HEADER OF MAIN PAGE */}
      <HeroSection />
      {/* ABOUT ME OF MAIN PAGE */}
      <AboutMe />
      <Marquee />
      <Experience />
      <Skills />
      <Projects featured={true} />
    </>
  );
};
