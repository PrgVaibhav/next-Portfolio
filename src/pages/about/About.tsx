import React from "react";
import { Button, SmallHeader } from "../../components";
// import AboutImage from "../../assets/images/welcome-img.svg";
import Javascript from "../../assets/images/javascript.webp";
import TypeScript from "../../assets/images/typescript.webp";
import html5 from "../../assets/images/html5.webp";
import css from "../../assets/images/css3.webp";
import tailwind from "../../assets/images/tailwind.webp";
import bootstrap from "../../assets/images/bootstrap.webp";

import react from "../../assets/images/react.webp";
import redux from "../../assets/images/redux.webp";
import git from "../../assets/images/github.webp";
import postman from "../../assets/images/postman.webp";
import hosting from "../../assets/images/hosting.webp";
import vscode from "../../assets/images/vscoode.webp";
import nextJs from "../../assets/images/nextjs.webp";
import { Link } from "react-router-dom";
import { FileUser, Sparkles, Unplug } from "lucide-react";
const ABOUT = [
  {
    id: 1,
    title: "Hey, It’s Me, Vaibhav",
    description:
      "For the past 1.5 years, I've been focused on building user-centric web applications. My passion lies in creating seamless digital experiences that are both functional and engaging. I aim to bridge the gap between complex technical challenges and intuitive user interfaces.",
  },
  {
    id: 2,
    title: "My Approach:",
    description:
      "I specialize in front-end development using React.js, TailwindCSS, and modern UI frameworks. I'm committed to staying current with industry trends and best practices, ensuring my work is both scalable and performant. I also value the importance of design and user experience, striving to create visually appealing and user-friendly applications.",
  },
  {
    id: 3,
    title: "Beyond Development:",
    description:
      "I'm a strong believer in continuous learning and collaboration. I actively explore new technologies and contribute to open-source projects. I also recognize the importance of maintaining a balanced lifestyle, which includes staying connected with the tech community.",
  },
  //   {
  //     id: 4,
  //     title: "Let's Connect:",
  //     description:
  //       "If you're seeking a dedicated React.js developer to contribute to your projects, I'd welcome the opportunity to connect.",
  //   },
];

const SKILLS = [
  {
    id: 1,
    name: "Programming Languages",
    skills: [
      { id: 1, name: "JavaScript", img: Javascript },
      { id: 2, name: "TypeScript", img: TypeScript },
    ],
  },
  {
    id: 2,
    name: "Frontend Technologies",
    skills: [
      { id: 1, name: "HTML5", img: html5 },
      { id: 2, name: "CSS3", img: css },
      { id: 3, name: "TailwindCSS", img: tailwind },
      { id: 4, name: "Bootstrap", img: bootstrap },
    ],
  },
  {
    id: 3,
    name: "Frontend Frameworks & State Management",
    skills: [
      { id: 1, name: "ReactJS", img: react },
      { id: 4, name: "NextJS", img: nextJs },
      { id: 2, name: "Redux/Context API", img: redux },
      { id: 3, name: "React-query" },
    ],
  },
  {
    id: 3,
    name: "API & Backend Integration",
    skills: [
      { id: 1, name: "REST API Integration" },
      { id: 2, name: "Axios & Fetch API" },
      { id: 3, name: "Authentication & Security " },
    ],
  },
  {
    id: 3,
    name: "Tools & Platforms",
    skills: [
      { id: 1, name: "Git & GitHub", img: git },
      { id: 2, name: "Postman", img: postman },
      { id: 3, name: "Vercel & Netlify", img: hosting },
      { id: 4, name: "VS Code", img: vscode },
    ],
  },
];

export const About = () => {
  return (
    <section className="card-color p-4 sm:p-[1.4vw] border border-neutral-700 rounded-lg sm:rounded-[.7vw] flex flex-col gap-8 sm:gap-[3vh]">
      <SmallHeader primaryTitle="About" isSecondaryTitle={false} />

      <section className="flex flex-col gap-4 sm:gap-[2vh]">
        {ABOUT.map((about) => (
          <div key={about.id} className="flex flex-col gap-4 sm:gap-[1vh]">
            <h1 className="text-xl sm:text-[clamp(1.4rem,1.8vw,3rem)] font-bold">
              {about.title}
            </h1>
            <p className="text-sm sm:text-[clamp(.85rem,1.1vw,1.7rem)] leading-relaxed text-[#b5b5b5]">
              {about.description}
            </p>
          </div>
        ))}
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
            href="https://drive.google.com/file/d/1I9yynpY_Fu7V2Tb2oinJzKUhYeSGZ_w-/view?usp=drive_link"
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
      </section>

      <div className="flex flex-col gap-4 sm:gap-[.5vw]  text-[#b5b5b5]">
        <SmallHeader
          primaryTitle="Tech Stack & Expertise"
          isSecondaryTitle={false}
        />
        <div className="bg-[#363736] p-4 sm:p-[1vw] rounded-lg sm:rounded-[.8vw] ">
          <div className="flex items-start flex-col gap-4 sm:gap-[1vw]">
            {SKILLS.map((skill) => (
              <React.Fragment key={skill.id}>
                <h1 className="font-bold text-xl sm:text-[clamp(1.2rem,1.3vw,3rem)]">
                  {skill.name}:
                </h1>
                <ul className="text-md sm:text-[clamp(.85rem,1.1vw,1.7rem)] flex flex-wrap items-center gap-2 sm:gap-[.5vw]">
                  {skill.skills.map((s) => (
                    <li
                      key={s.id}
                      className="border border-[#2d2d2d] p-1 sm:p-[.4vw] flex items-center gap-4 sm:gap-0 rounded-lg sm:rounded-[.8vw] shadow-sm"
                    >
                      {s.img && (
                        <img
                          src={s.img}
                          alt={s.name}
                          className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vh] object-contain"
                        />
                      )}
                      {s.name}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
