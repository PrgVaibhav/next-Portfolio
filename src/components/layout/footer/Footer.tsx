import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIALS = [
  { id: 1, icon: <Github />, link: "", name: "Github" },
  { id: 2, icon: <Twitter />, link: "", name: "Twitter" },
  { id: 3, icon: <Linkedin />, link: "", name: "Linkedin" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col gap-4 sm:gap-[1vh] items-center justify-between card-color border border-neutral-700 rounded-lg sm:rounded-[.7vw]  p-4 sm:p-[1.2vw] mb-2 sm:mb-[2vh]">
      <div className="flex justify-between items-center w-full bg-[#363736] p-4 sm:p-[.8vw] rounded-lg sm:rounded-[.8vw]">
        <h2>Stay Connected 😇</h2>
        <div className="flex gap-4 sm:gap-[.4vw] ">
          {SOCIALS.map((social) => (
            <div key={social.id} className="relative group flex">
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#b5b5b5] hover:text-[#408f52] transition-all hover:bg-[#21382e] rounded-lg p-1 sm:p-[.3vw] bg:[#2d2d2d] border border-[#2d2d2d] "
              >
                {social.icon}
              </a>
              <p className="absolute top-[-1.4rem] left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs sm:text-[clamp(.6rem,.8vw,1rem)] px-2 py-1 sm:px-[.4vw] sm:py-[.2vw] rounded-md sm:rounded-[.4vw] opacity-0 group-hover:opacity-100 transition-opacity">
                {social.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-[1vh] justify-between items-center w-full bg-[#363736] p-4 sm:p-[.8vw] rounded-lg sm:rounded-[.8vw] text-[#a1a1a0]">
        <h2>© 2025 Made with ❤️</h2>
        <div className="flex gap-3 sm:gap-[.8vw] text-md sm:text-[clamp(.8rem,1vw,2rem)]">
          <span>Explore More</span>
          <ul>
            <li>
              <Link to="/updates" className="text-white underline">
                Updates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
