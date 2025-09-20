import React from "react";
import Paragraph from "./Paragraph";

interface PillsProps {
  cn?: string;
  children: React.ReactNode;
  label?: string;
  status: "info" | "success" | "warning";
}

const statusClass = {
  info: `text-blue-700 bg-gradient-to-r from-blue-100 to-cyan-100 ring ring-blue-700`,
  success: `text-green-700 bg-gradient-to-r from-green-100 to-emerald-100 ring ring-green-700`,
  warning: `text-red-700 bg-gradient-to-r from-red-50 to-red-100 ring ring-red-700`,
};

const Pills: React.FC<PillsProps> = ({
  children,
  cn,
  label,
  status = "info",
}) => {
  return (
    <div>
      <Paragraph
        cn={`px-2 py-1 text-sm rounded-lg ${statusClass[status]} ${cn}`}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default Pills;
