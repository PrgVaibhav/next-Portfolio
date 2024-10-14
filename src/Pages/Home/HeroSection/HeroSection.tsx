import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillFilePdfFill } from "react-icons/bs";
import { AvailableToWork } from "../../../Components";

const socialLinks = [
  {
    id: 1,
    icon: <FaXTwitter aria-hidden="true" />,
    delay: "0.9s",
    link: "#", // Replace with actual link
    label: "Twitter Profile",
  },
  {
    id: 2,
    icon: <FaGithub aria-hidden="true" />,
    delay: "1s",
    link: "#", // Replace with actual link
    label: "GitHub Profile",
  },
  {
    id: 3,
    icon: <FaLinkedinIn aria-hidden="true" />,
    delay: "1.1s",
    link: "#", // Replace with actual link
    label: "LinkedIn Profile",
  },
];

export const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-start flex-col w-full p-3 md:w-3/4 md:m-auto mt-4 mb-4 mx-auto gap-7 md:h-screen relative"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="text-3xl font-medium  md:text-5xl animate-fallInBounce nav-font"
        style={{ animationDelay: "0.2s" }}
      >
        Blending creativity with technical expertise to deliver exceptional
        digital products.
      </h1>
      <div
        className="flex flex-col gap-3 text-sm font-medium md:text-lg text-gray-400 animate-fallInBounce nav-font"
        style={{ animationDelay: "0.4s" }}
      >
        <p>
          Hey 👋, I'm Vaibhav, an India-based React JS developer specializing in
          crafting captivating frontend websites. With a focus on innovation and
          creativity, I strive to create digital experiences that not only look
          stunning but also seamlessly function.
        </p>
        <p style={{ animationDelay: "0.6s" }}>
          Currently, I'm on a mission to conquer the full-stack universe. When
          I'm not coding, I'm either reliving cricket's golden age (or at least
          pretending to), channeling my inner poet, or perfecting the art of
          procrastination. Yes, I'm that guy.
        </p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="flex items-center justify-start gap-3 text-gray-300">
          {socialLinks.map((link) => (
            <a
              href={link.link}
              key={link.id}
              className="text-white border-dashed border-2 px-4 py-2 border-gray-500 rounded-lg flex hover:border-solid hover:border-gray-500 hover:transition-all hover:duration-300 "
              style={{ animationDelay: link.delay }}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
            >
              <span className="animate-fallInBounce">{link.icon}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-start gap-3 flex-wrap">
          <span
            className="bg-[#212121] px-2 py-1 rounded-md text-white animate-fallInBounce"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="mailto:vaibhav.pandey1508@gmail.com"
              className="flex gap-2 items-center"
              aria-label="Email Vaibhav"
            >
              <MdEmail aria-hidden="true" /> Email me
            </a>
          </span>
          <span
            className="flex gap-2 items-center bg-[#212121] px-2 py-1 rounded-md text-white animate-fallInBounce"
            style={{ animationDelay: "1.3s" }}
          >
            <a
              href="URL_to_resume" // Replace with actual URL to your resume
              className="flex gap-2 items-center"
              aria-label="Download Resume"
            >
              <BsFillFilePdfFill aria-hidden="true" /> Resume
            </a>
          </span>
          <AvailableToWork isAvailable={true} />
        </div>
      </div>
    </section>
  );
};
