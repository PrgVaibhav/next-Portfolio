"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const randomTexts = [
  "Crafting beautiful user experiences…",
  "Optimizing code, one component at a time…",
  "Designing interfaces that delight users…",
  "Turning chai into React code…",
  "Solving problems with clean, efficient solutions…",
  "Exploring the art of frontend development…",
  "Making the web a more interactive place…",
];

interface LoadingScreenProps {
  imageSrc: string; // URL or import of your image/logo
  alt?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  imageSrc,
  alt = "Loading",
}) => {
  const [text, setText] = useState(randomTexts[0]);

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * randomTexts.length);
      setText(randomTexts[randomIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  z-50">
      {/* Image */}
      <div className="mb-6 ">
        <Image src={imageSrc} alt={alt} width={120} height={120} className="" />
      </div>

      {/* Loader */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-6"></div>

      {/* Random Text */}
      <p className="text-center text-gray-700 text-sm sm:text-base px-4 max-w-xs">
        {text}
      </p>
    </div>
  );
};

export default LoadingScreen;
