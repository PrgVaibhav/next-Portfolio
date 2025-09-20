import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/helper/data/ProjectData";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <Container cn=" items-start">
      <div className="flex items-start justify-between w-full self-start mb-8">
        <Link href={"/"}>
          <span className="flex items-center gap-2">
            <ChevronLeft />
            Go back
          </span>
        </Link>
      </div>
      <div className="flex items-start justify-between w-full self-start mb-8">
        <Heading
          tag="h1"
          cn="text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Projects
        </Heading>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            project={{
              cover: project.cover,
              id: Number(project.id),
              slug: project.slug,
              title: project.title,
              snippet: project.snippet,
            }}
            key={project.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
