import { FaFortAwesome } from "react-icons/fa6";

export const WhatIDoCards = () => {
  return (
    <div className="service-card w-full md:w-[300px] h-auto rounded-md bg-[#212121] border-solid border-2 border-slate-500 p-3">
      <div className="card-content flex flex-col gap-2">
        <div className="card-icon">
          <FaFortAwesome />
        </div>
        <div className="flex justify-between items-center">
          <div className="card-title">
            <h2 className="text-2xl font-bold text-white">
              Full page websites.
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="card-description">
          <p className="text-sm md:text-md font-medium text-gray-400">
            A React site styled with CSS offering developers tools, tutorials,
            and insights.
          </p>
        </div>
      </div>
    </div>
  );
};
