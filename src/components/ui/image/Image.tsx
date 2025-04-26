import React from "react";

interface ImageProps {
  url: string;
  alt: string;
  imgClassName?: string;
  containerClassName?: string;
  aspect?: "aspect-video" | "aspect-square" | "aspect-[4/3]" | string;
  objectFit?: "cover" | "contain";
}

export const Image: React.FC<ImageProps> = ({
  url,
  alt,
  imgClassName = "",
  containerClassName = "",
  objectFit = "cover", // default fit
}) => {
  return (
    <div
      className={`aspect-square bg-black/30 backdrop-blur-lg border border-white/20 ${containerClassName}`}
    >
      <img
        src={url}
        alt={alt}
        aria-label={alt}
        loading="lazy"
        className={`object-${objectFit} p-2 ${imgClassName}`}
      />
    </div>
  );
};
