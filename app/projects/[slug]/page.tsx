import React from "react";
import ProjectDetails from "./project-details";

interface PageProps {
  params: { slug: string };
}

const page = ({ params }: PageProps) => {
  return <ProjectDetails slug={params.slug} />;
};

export default page;
