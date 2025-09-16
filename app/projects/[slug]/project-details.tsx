"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import Paragraph from "@/components/ui/Paragraph";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTools, FaUserTie, FaFlagCheckered } from "react-icons/fa";

interface ProjectDetailsProps {
  slug: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ slug }) => {
  const [projectToShow, setProjectToShow] = useState<ProjectData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const findProjectFromData =
      PROJECTS.find((project) => project.slug === slug) || undefined;
    setProjectToShow(findProjectFromData);
    setLoading(false);
  }, [slug]);

  if (loading || !projectToShow) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <Container cn="items-start max-w-5xl mx-auto px-4">
      <div className="flex items-start justify-between w-full self-start mb-8">
        <Link href={"/projects"}>
          <span className="flex items-center gap-2">
            <ChevronLeft />
            Go back
          </span>
        </Link>
      </div>
      <article className="prose max-w-none w-full group">
        {/* Cover Image */}
        <div className="mb-8">
          <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={projectToShow.cover || ""}
              alt={projectToShow.title || ""}
              fill
              className="object-cover w-full h-40 grayscale group-hover:grayscale-0 transition duration-500"
              priority
            />
          </div>
        </div>

        {/* Title & Snippet */}
        <header className="mb-8 text-center">
          <Heading
            tag="h1"
            cn="text-4xl font-extrabold tracking-tight uppercase mb-3"
          >
            {projectToShow.title}
          </Heading>
          <Paragraph cn="italic text-balance text-gray-600 max-w-2xl mx-auto">
            {projectToShow.snippet}
          </Paragraph>
        </header>

        {/* Description */}
        <section className="mb-10">
          <Paragraph cn="text-lg leading-relaxed text-balance text-gray-800">
            {projectToShow.description}
          </Paragraph>
        </section>

        {/* Info Cards: Tech Stack, Role, Status */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Tech Stack */}
          <div className="p-6 rounded-xl ring ring-gray-500 bg-transparent transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <FaTools className="text-gray-700 text-lg" />
              <Heading tag="h2" cn="font-semibold text-lg text-gray-800">
                Tech Stack
              </Heading>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectToShow.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="p-6 rounded-xl ring ring-gray-500 bg-transparent transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <FaUserTie className="text-gray-700 text-lg" />
              <Heading tag="h2" cn="font-semibold text-lg text-gray-800">
                Role
              </Heading>
            </div>
            <Paragraph cn="text-gray-600 text-sm leading-relaxed">
              {projectToShow.role}
            </Paragraph>
          </div>

          {/* Status */}
          <div className="p-6 rounded-xl ring ring-gray-500 bg-transparent transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <FaFlagCheckered className="text-gray-700 text-lg" />
              <Heading tag="h2" cn="font-semibold text-lg text-gray-800">
                Status
              </Heading>
            </div>
            <Paragraph cn="text-gray-600 text-sm leading-relaxed">
              {projectToShow.status}
            </Paragraph>
          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <Heading
            tag="h2"
            cn="font-extrabold text-xl border-b-2 border-black pb-1 mb-3"
          >
            Key Features
          </Heading>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {projectToShow.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Challenges */}
        <section className="mb-10">
          <Heading
            tag="h2"
            cn="font-extrabold text-xl border-b-2 border-black pb-1 mb-3"
          >
            Challenges
          </Heading>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {projectToShow.challenges?.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        {/* Outcomes */}
        <section className="mb-10">
          <Heading
            tag="h2"
            cn="font-extrabold text-xl border-b-2 border-black pb-1 mb-3"
          >
            Outcomes
          </Heading>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {projectToShow.outcomes?.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        {projectToShow.images && projectToShow.images.length > 0 && (
          <section className="mb-12">
            <Heading
              tag="h2"
              cn="font-extrabold text-xl border-b-2 border-black pb-1 mb-6"
            >
              Project Gallery
            </Heading>
            <div className="grid md:grid-cols-2 gap-6">
              <ImageCarousel images={projectToShow.images} />
            </div>
          </section>
        )}

        {/* Links */}
        <section className="flex flex-wrap gap-4 mt-8 border-t pt-6">
          {projectToShow.github && (
            <a
              href={projectToShow.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 ring-2 ring-black bg-transparent hover:bg-black hover:text-white transition rounded-md text-sm font-bold uppercase"
            >
              View on GitHub
            </a>
          )}
          {projectToShow.liveDemo && (
            <a
              href={projectToShow.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 ring-2 ring-black bg-transparent hover:bg-black hover:text-white transition rounded-md text-sm font-bold uppercase"
            >
              Live Demo
            </a>
          )}
        </section>
      </article>
    </Container>
  );
};

export default ProjectDetails;
