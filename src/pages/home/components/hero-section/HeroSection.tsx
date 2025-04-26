import { Link } from "react-router-dom";
import { Button, Image } from "../../../../components";
import { FileUser, Sparkles, Unplug } from "lucide-react";
import avatar from "../../../../assets/avataaars.svg";
import { useTitle } from "../../../../helper/hooks/useTitle";
export const HeroSection = () => {
  useTitle({ title: "Home" });

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

          <a
            href="https://drive.google.com/file/d/1xAOFurUIVjT0UVclxI9INu_U1kb0UX3J/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              leftIcon={<FileUser size={15} />}
              cn="bg-[#393839]  px-2 py-2 sm:px-[.4vw] sm:py-[.4vw]"
            >
              Resume
            </Button>
          </a>

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
      <Image
        url={avatar}
        alt="User Avatar"
        objectFit="contain"
        imgClassName="w-[40vw] h-[40vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-white"
        containerClassName="rounded-full p-4 sm:p-[.6vw]"
      />
    </section>
  );
};
