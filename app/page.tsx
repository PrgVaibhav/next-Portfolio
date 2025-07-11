import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { CgFormatSlash } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <Container cn="white-checked-bg">
      <div className="w-full md:max-w-xl flex flex-col gap-4">
        <Heading
          tag={"h1"}
          cn="text-[30px] sm:text-[48px] text-black font-semibold font-bayon uppercase"
        >
          <span className="">👋</span> Hello World!
        </Heading>
        <Paragraph>
          Hi, Vaibhav here, Started with curiosity, stuck around for the chaos,
          I'm a frontend developer who accidentally fell in love with{" "}
          <span className="text-[#B4CF00]">JavaScript</span> (and occasionally
          argues with it).
        </Paragraph>
        <Paragraph>
          With over a year of experience working with{" "}
          <span className="text-[#0083FD]">ReactJS</span>, I'm now leveling up
          into the MERN stack world, turning caffeine into clean(ish) code and
          side projects into late-night debugging sessions.
        </Paragraph>

        <div className="flex items-center mt-4 gap-3">
          <Button cn="w-max" size="md">
            Hire me
          </Button>
          <Button variant="ghost" size="md" cn="w-max">
            View my resume
          </Button>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-3 ">
            <span>
              <FaLinkedin className="bg-zinc-200 text-gray-700 rounded-lg w-8 h-8 p-2" />
            </span>
            <span>
              <FaGithub className="bg-zinc-200 text-gray-700 rounded-lg w-8 h-8 p-2" />
            </span>
            <span>
              <FaXTwitter className="bg-zinc-200 text-gray-700 rounded-lg w-8 h-8 p-2" />
            </span>
          </div>
          <span>
            <CgFormatSlash size={30} className=" text-gray-700" />
          </span>

          <a href="mailto:vaibhav.pandey1508@gmail.com">
            <Paragraph cn="font-medium text-gray-500 hover:text-gray-600 hover:underline">
              vaibhav.pandey1508@gmail.com
            </Paragraph>
          </a>
        </div>
      </div>
    </Container>
  );
}
