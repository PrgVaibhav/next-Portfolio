import { Link } from "react-router-dom";
import { Button } from "../../../../components";
import { FileUser, Sparkles, Unplug } from "lucide-react";
import avatar from "../../../../assets/avataaars.svg";
export const HeroSection = () => {
  return (
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
            <Button
              leftIcon={<Sparkles size={15} />}
              cn="bg-[#393839]  px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
            >
              Hire Me
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              leftIcon={<FileUser size={15} />}
              cn="bg-[#393839]  px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
            >
              Resume
            </Button>
          </Link>

          <Link to={"/contact"}>
            <Button
              leftIcon={<Unplug size={15} />}
              cn="bg-[#393839]  px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
            >
              Let's Connect
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
  );
};
