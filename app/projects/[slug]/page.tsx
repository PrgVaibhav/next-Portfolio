// app/projects/[slug]/page.tsx
import React from "react";
import ProjectDetails from "./project-details";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetails slug={params.slug} />;
}
