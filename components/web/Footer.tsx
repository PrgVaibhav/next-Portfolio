import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";

const Footer = () => {
  return (
    <footer className=" mt-12 ">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        {/* Left Column - Newspaper style issue info */}
        <div className="text-sm">
          <Heading tag="h1" cn="uppercase title font-bold tracking-wide">
            Developer Times
          </Heading>
          <Paragraph cn="italic text-xs mt-1">
            Edition {new Date().getFullYear()} • Published by Vaibhav Kumar
          </Paragraph>
          <Paragraph cn="text-xs text-gray-600 mt-2 text-balance">
            All articles & projects are personally hand-crafted with Next, & ☕.
          </Paragraph>
        </div>

        {/* Right Column - Social & Signature */}
        <div className="text-sm flex flex-col items-start md:items-end gap-3">
          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="italic text-xs text-gray-600">
            “Printed with passion & pixels”
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-black text-center text-xs py-2 tracking-widest uppercase ">
        © {new Date().getFullYear()} Vaibhav Kumar — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
