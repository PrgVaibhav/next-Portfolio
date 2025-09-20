import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { EXPERIENCE } from "@/helper/data/ExperienceData";

const Experience = () => {
  return (
    <Container cn="items-start">
      <div className="flex items-start justify-start self-start mb-8">
        <Heading
          tag="h1"
          cn="text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Experience
        </Heading>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#efefef] border-2 border-black px-5 py-4 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Briefcase className="text-neutral-900" />
                <Heading
                  tag="h2"
                  cn="text-md sm:text-lg font-bold text-gray-900"
                >
                  {exp.company}
                </Heading>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-500 gap-1">
                <Calendar size={14} />
                {exp.duration}
              </div>
            </div>

            {/* Role */}
            <Heading
              tag="h3"
              cn="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 mt-2"
            >
              {exp.role}
            </Heading>

            {/* Short Description */}
            <Paragraph cn="text-xs sm:text-sm text-gray-700 mb-4">
              {exp.description}
            </Paragraph>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/experience${exp.slug}`}
              className="body text-xs uppercase border-t border-black pt-1 inline-block hover:text-red-600 transition"
            >
              Read Full Story →
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
