import React from "react";

interface ContainerProps {
  label?: string;
  cn?: string;
  children: React.ReactNode;
  tag?: string;
}

const Container: React.FC<ContainerProps> = ({
  label,
  children,
  cn,
  tag = "section",
}) => {
  return (
    <section
      className={`${cn} flex flex-col justify-center items-center p-6 sm:p-4`}
      aria-label={label}
    >
      {/* tag */}
      {tag && (
        <div className="text-gray-600 opacity-40 self-start p-8">
          &lt;{tag}&gt;
        </div>
      )}
      {children}
      {/* tag */}
      {tag && (
        <div className="text-gray-600 opacity-50 self-end p-8">
          &lt;/{tag}&gt;
        </div>
      )}
    </section>
  );
};

export default Container;
