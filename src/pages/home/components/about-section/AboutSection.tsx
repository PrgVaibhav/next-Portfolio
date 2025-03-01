import { Button, SmallHeader } from "../../../../components";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const PARAGRAPH = [
  {
    text: "Ever since I wrote my first line of code, I’ve been fascinated by how simple ideas can turn into interactive experiences on the web.",
  },
  {
    text: "Over the past 1.5 years, I’ve honed my skills as a ReactJS developer, crafting clean, responsive, and high-performance applications.",
  },
  {
    text: `I love building reusable UI components, optimizing performance, and creating seamless user experiences with ReactJS, JavaScript, TypeScript, TailwindCSS, and Bootstrap.`,
  },
];

export const AboutSection = () => {
  return (
    <section className="bg-[#2c2c2c] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw]">
      <SmallHeader primaryTitle="About Me" isSecondaryTitle={false} />
      <div className="flex flex-col gap-4 sm:gap-[.5vw] mt-[2vh] text-[#b5b5b5]">
        {PARAGRAPH.map((para, index) => (
          <p
            key={index}
            className="text-sm sm:text-[clamp(.85rem,1.1vw,1.7rem)] text-justify"
          >
            {para.text}
          </p>
        ))}

        <Link to={"/about"}>
          <Button
            cn="bg-[#202021]  px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
            rightIcon={<MoveRight />}
          >
            Read More
          </Button>
        </Link>
      </div>
    </section>
  );
};

// <p>
//   Every project I work on is an opportunity to learn, experiment, and
//   push my limits. For me, coding isn’t just about writing functions it’s
//   about building something meaningful, one component at a time.
// </p>;
