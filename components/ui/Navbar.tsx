"use client";

import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "next/link";
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { usePathname } from "next/navigation";

const LINKS = [
  // { id: 1, name: "About Me", url: "/about" },
  { id: 1, name: "Home", url: "/" },

  { id: 2, name: "Projects", url: "/projects" },
  { id: 3, name: "Experience", url: "/experience" },
  // { id: 4, name: "Logs", url: "/logs" },
];

const SOCIALS = [
  {
    id: 1,
    url: "https://twitter.com/SyntaxError408",
    icon: <Twitter size={20} />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/devxvaibhav",
    icon: <Linkedin size={20} />,
  },
  { id: 3, url: "https://github.com/PrgVaibhav", icon: <Github size={20} /> },
];

const Navbar = () => {
  const [date, setDate] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
    setDate(formattedDate);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className=" px-4 w-full  flex flex-col gap-4">
      <div className="flex items-center justify-between mt-4">
        <Heading tag="h1" cn="title text-xl md:text-4xl">
          Developer Times
        </Heading>

        <Paragraph cn="self-end italic text-xs sm:text-sm text-gray-600">
          {date}
        </Paragraph>
      </div>

      <div className="flex items-center justify-between border-t-2 border-b-2 border-black p-3">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-3">
          {LINKS.map((link) => {
            const isActive = pathname === link.url;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`body hover:underline transition-all duration-300 ${
                    isActive ? "font-bold" : ""
                  }`}
                  aria-label={`View page ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          <span
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </span>
        </div>

        {/* Social Icons → stays fixed */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              aria-label={`View Vaibhav Kumar's ${social.id} account`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-b-2 border-black
        ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-start gap-3 p-3">
          {LINKS.map((link) => {
            const isActive = pathname === link.url;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`body hover:underline transition-all duration-300 ${
                    isActive ? "font-bold" : ""
                  }`}
                  aria-label={`View page ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
