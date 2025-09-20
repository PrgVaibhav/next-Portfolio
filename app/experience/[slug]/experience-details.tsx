"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar } from "lucide-react";

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-[#fefefe] ring ring-gray-300 rounded-md p-6 shadow-sm">
    <Heading
      tag="h2"
      cn="text-xl sm:text-2xl font-bold border-b border-gray-300 pb-2 mb-4"
    >
      {title}
    </Heading>
    {children}
  </section>
);

const ExperienceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [experience, setExperience] = useState<(typeof EXPERIENCE)[0] | null>(
    null
  );

  useEffect(() => {
    if (params.slug) {
      const expData =
        EXPERIENCE.find((exp) => exp.slug.split("/").pop() === params.slug) ||
        null;
      if (!expData) router.push("/experience");
      else setExperience(expData);
    }
  }, [params.slug, router]);

  if (!experience) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <Container cn="items-start min-h-screen ">
      {/* Navigation */}
      <nav className="w-full mb-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Experience
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto flex flex-col items-center text-center mt-6 mb-8">
        <div className="text-sm uppercase tracking-wide mb-2 flex items-center justify-center gap-1">
          <Building2 className="w-4 h-4" />
          Case Study
        </div>
        <Heading
          tag="h1"
          cn="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#111]"
        >
          {experience.role}
        </Heading>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-gray-700">
          <div className="flex items-center gap-1">
            <Building2 className="w-5 h-5" />
            {experience.company}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-5 h-5" />
            {experience.duration}
          </div>
        </div>
        {experience.description && (
          <Paragraph cn="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            {experience.description}
          </Paragraph>
        )}
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pb-20">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          {experience.responsibilities?.length > 0 && (
            <SectionCard title="Key Responsibilities">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {experience.responsibilities.map((r, idx) => (
                  <li key={idx} className="">
                    {r}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.achievements?.length > 0 && (
            <SectionCard title="Achievements">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {experience.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.learned?.length > 0 && (
            <SectionCard title="Skills & Learnings">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {experience.learned.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.notableProjects?.length > 0 && (
            <SectionCard title="Notable Projects">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {experience.notableProjects.map((p, idx) => (
                  <li key={idx}>
                    {p.link ? (
                      <Link
                        href={p.link}
                        target="_blank"
                        className="underline hover:text-black"
                      >
                        {p.name}
                      </Link>
                    ) : (
                      p.name
                    )}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          {experience.tech?.length > 0 && (
            <section className="bg-white border border-gray-300 rounded-md p-4 sm:p-6 shadow-sm">
              <Heading
                tag="h3"
                cn="text-base sm:text-lg font-bold mb-3 border-b border-gray-300 pb-1"
              >
                Tech Stack
              </Heading>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {experience.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="bg-white border border-gray-300 rounded-md p-4 sm:p-6 shadow-sm">
            <Heading
              tag="h3"
              cn="text-base sm:text-lg font-bold mb-3 border-b border-gray-300 pb-1"
            >
              Experience Overview
            </Heading>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Duration</span>
                <span>{experience.duration}</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </Container>
  );
};

export default ExperienceDetails;
