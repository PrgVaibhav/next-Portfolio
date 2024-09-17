import React from "react";
import { Projects } from "../../components";
import { useTitle } from "../../hooks/useTitle";

export const AllProjects = () => {
  useTitle({ title: "Projects" });
  return <Projects header={true} />;
};
