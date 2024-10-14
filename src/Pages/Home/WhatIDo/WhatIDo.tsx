import { Section } from "../../../Components";

export const WhatIDo = () => {
  return (
    <Section label="What services I provide" background="bg-[#212121]">
      <h2 className="text-4xl font-semibold text-white  mb-2">What I Do.</h2>
      <p className="text-sm md:text-lg text-gray-400 font-medium">
        I create full websites, killer landing pages, and squash bugs like a
        pro!
      </p>
      <div className="service-cards mt-4 flex flex-wrap items-stretch gap-4">
        <WhatIDo />
        <WhatIDo />
        <WhatIDo />
        <WhatIDo />
      </div>
    </Section>
  );
};
