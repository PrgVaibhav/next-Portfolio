import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image from "next/image";
import Pills from "../ui/Pills";
import Button from "../ui/Button";
import { Scroll } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container cn="border-b-2 border-black py-8 sm:py-16">
      <div className="flex gap-10  flex-col md:flex-row">
        <div className="w-full md:w-[25%]">
          <Image
            src={"/hero-img.webp"}
            alt="hero image"
            width={400}
            height={100}
            className="w-full h-auto grayscale-75 hover:grayscale-0 duration-300 transition-colors ring ring-[#2f2f2f] rounded-md"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[75%]">
          <Pills status="info" cn="w-max">
            Special Edition
          </Pills>

          <div className="flex flex-wrap flex-col gap-3">
            <Heading
              tag="h1"
              cn="text-3xl lg:text-7xl header bg-[#2f2f2f] px-2 text-white w-max break-words"
            >
              React Developer in town!!
            </Heading>
            <Paragraph cn="text-balance text-gray-500 text-sm self-end">
              Published: 02/09/2025
            </Paragraph>
          </div>

          <div className="flex flex-col gap-4  ">
            <Paragraph cn="text-balance text-gray-600">
              <span className="font-bold text-3xl title">H</span>i, I'm{" "}
              <span className="font-bold">Vaibhav</span>, what started as luck
              turned into a full-blown obsession I stumbled into frontend
              development and somehow ended up arguing (and making peace) with
              JavaScript.
            </Paragraph>
            <Paragraph cn="text-balance text-gray-600">
              With over a year of ReactJS experience, I’m now diving deeper into
              the MERN stack, building projects that keep me up at night,
              powered by caffeine and curiosity. It’s not just code anymore it’s
              my way of making life.
            </Paragraph>
            <Paragraph cn="text-balance text-gray-600">
              In my role, I’ve built full projects from scratch shaping the UI,
              structuring the code, and watching ideas grow into working
              products. Every project pushed me to think deeper, solve real
              problems, and deliver something people can actually use.
            </Paragraph>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row  gap-4">
            <Link
              href={
                "https://drive.google.com/file/d/150koLzSA1XvwjKbDMNNTqypAGwS-f7to/view?usp=sharing"
              }
              target="_blank"
            >
              <Button rightIcon={<Scroll size={14} />} size="md">
                Front Page: Resume{" "}
              </Button>
            </Link>
            <Link href={"/about-me"}>
              <Button variant="ghost" size="md">
                Know the Author
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
