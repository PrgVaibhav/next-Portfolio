"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import Paragraph from "@/components/ui/Paragraph";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import { ChevronLeft, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTools, FaUserTie, FaFlagCheckered } from "react-icons/fa";

interface ProjectDetailsProps {
  slug?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ slug }) => {
  const params = useParams();
  const router = useRouter();
  const [projectToShow, setProjectToShow] = useState<ProjectData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (params.slug) {
      const expData =
        PROJECTS.find((prj) => prj.slug.split("/").pop() === params.slug) ||
        null;
      if (!expData) router.push("/experience");
      else setProjectToShow(expData);
    }
  }, [params.slug, router]);

  if (loading || !projectToShow) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <Container cn="items-start mx-auto ">
      {/* Back button */}
      <div className="flex items-start mb-8">
        <Link
          aria-label={`Go back to projects`}
          href="/projects"
          className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition"
        >
          <ChevronLeft size={16} />
          Back to Projects
        </Link>
      </div>

      <article className="w-full">
        {/* Cover */}
        {projectToShow.cover && (
          <div className="mb-10 relative w-full rounded-xl overflow-hidden ring ring-gray-600">
            <Image
              src={projectToShow.cover}
              alt={projectToShow.title || ""}
              width={1000}
              height={100}
              className="object-cover w-full h-[300px]"
              priority
            />
          </div>
        )}

        {/* Title + Snippet */}
        <header className="mb-5 text-center">
          <Heading tag="h1" cn="text-4xl md:text-5xl font-bold text-gray-900">
            {projectToShow.title}
          </Heading>
        </header>

        {/* Description */}
        {projectToShow.description && (
          <section className="mb-12 border-b pb-8">
            <Paragraph cn="text-md leading-relaxed text-gray-700 text-center text-balance">
              {projectToShow.description}
            </Paragraph>
          </section>
        )}

        {/* Info Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          {projectToShow.techStack && (
            <div className="p-5 ring ring-neutral-600 rounded-lg bg-[#fff]">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-gray-700" />
                <h2 className="font-semibold text-gray-900">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {projectToShow.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projectToShow.role && (
            <div className="p-5 ring ring-neutral-600 rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-3">
                <FaUserTie className="text-gray-700" />
                <h2 className="font-semibold text-gray-900">Role</h2>
              </div>
              <Paragraph cn="text-gray-700 text-sm leading-relaxed">
                {projectToShow.role}
              </Paragraph>
            </div>
          )}

          {projectToShow.status && (
            <div className="p-5 ring ring-neutral-600 rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-3">
                <FaFlagCheckered className="text-gray-700" />
                <h2 className="font-semibold text-gray-900">Status</h2>
              </div>
              <Paragraph cn="text-gray-700 text-sm leading-relaxed">
                {projectToShow.status}
              </Paragraph>
            </div>
          )}
        </section>

        {/* Features */}
        {projectToShow.features && projectToShow?.features?.length > 0 && (
          <section className="mb-12 border-b pb-8">
            <Heading tag="h2" cn="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </Heading>

            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {projectToShow?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {projectToShow.challenges && projectToShow.challenges?.length > 0 && (
          <section className="mb-12 border-b pb-8">
            <Heading tag="h2" cn="text-xl font-semibold text-gray-900 mb-4">
              Challenges
            </Heading>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {projectToShow.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Outcomes */}
        {projectToShow.outcomes && projectToShow.outcomes?.length > 0 && (
          <section className="mb-12 border-b pb-8">
            <Heading tag="h2" cn="text-xl font-semibold text-gray-900 mb-4">
              Outcomes
            </Heading>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {projectToShow.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery */}
        {projectToShow.images?.length > 0 && (
          <section className="mb-12">
            <Heading tag="h2" cn="text-xl font-semibold text-gray-900 mb-4">
              Project Gallery
            </Heading>
            <div className="grid md:grid-cols-2 gap-6">
              <ImageCarousel images={projectToShow.images} />
            </div>
          </section>
        )}

        {/* Links */}
        {(projectToShow.github || projectToShow.liveDemo) && (
          <section className="flex flex-wrap gap-4 mt-10">
            {projectToShow.github && (
              <a
                href={projectToShow.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition flex items-center gap-2"
                aria-label={`View ${projectToShow.title} project on Github`}
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
            {projectToShow.liveDemo && (
              <a
                href={projectToShow.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition flex items-center gap-2"
                aria-label={`View ${projectToShow.title} project live`}
              >
                Live Demo
                <Link2 size={18} />
              </a>
            )}
          </section>
        )}
      </article>
    </Container>
  );
};

export default ProjectDetails;
