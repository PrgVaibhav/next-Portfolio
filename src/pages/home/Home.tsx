import { Button, SmallHeader } from "../../components";
import avatar from "../../assets/avataaars.svg";
import { Link } from "react-router-dom";
import { FileUser, MoveRight, Sparkles } from "lucide-react";
export const Home = () => {
  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-12 sm:gap-[3vh]">
      <SmallHeader
        primaryTitle="ReactJS Developer"
        secondaryTitle="Available For Work"
      />
      <section className="flex items-center justify-center sm:justify-between flex-col-reverse sm:flex-row gap-8 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-[.6vw]">
          <h1 className="text-4xl sm:text-[clamp(1.4rem,3vw,5rem)] font-bold capitalize ">
            I'm Vaibhav Kumar
          </h1>
          <div className="flex flex-col items-center sm:items-start text-[#b5b5b5]">
            <p>ReactJS Developer from Bihar, India.</p>
            <p>Currently coding at PetEye.</p>
          </div>
          <div className="flex gap-4 sm:gap-[.7vw]">
            <Link to={"/contact"}>
              <Button leftIcon={<Sparkles size={15} />} cn="bg-[#393839]">
                Hire Me
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button leftIcon={<FileUser size={15} />} cn="bg-[#393839]">
                Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-full p-4 sm:p-[.6vw]">
          <img
            src={avatar}
            alt=""
            className="w-[40vw]  h-[40vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-white"
          />
        </div>
      </section>
      <section className="bg-[#2c2c2c] p-4 sm:p-[1.4vw] rounded-lg sm:rounded-[.7vw]">
        <SmallHeader primaryTitle="About Me" isSecondaryTitle={false} />
        <div className="flex flex-col gap-4 sm:gap-[.5vw] mt-[2vh] text-[#b5b5b5]">
          <p>
            Ever since I wrote my first line of code, I’ve been fascinated by
            how simple ideas can turn into interactive experiences on the web.
            Over the past 1.5 years, I’ve honed my skills as a React.js
            developer, crafting clean, responsive, and high-performance
            applications.
          </p>
          <p>
            I love building reusable UI components, optimizing performance, and
            creating seamless user experiences with React.js, JavaScript,
            TypeScript, TailwindCSS, and Bootstrap.
          </p>
          <p>
            Every project I work on is an opportunity to learn, experiment, and
            push my limits. For me, coding isn’t just about writing
            functions—it’s about building something meaningful, one component at
            a time.
          </p>

          <Link to={"/about"}>
            <Button cn="bg-[#393839]" rightIcon={<MoveRight />}>
              Read More
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};
