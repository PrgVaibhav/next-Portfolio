import { useState } from "react";

type AvailableToWorkProps = {
  isAvailable: boolean;
};

export const AvailableToWork = ({ isAvailable }: AvailableToWorkProps) => {
  const [openWorkSettings, setOpenWorkSettings] = useState(false);
  const [visible, setVisible] = useState(false); // For showing/hiding modal

  const handleOpen = () => {
    if (openWorkSettings) {
      // When closing, delay visibility change to allow animation to complete
      setOpenWorkSettings(false);
      setTimeout(() => setVisible(false), 500); // Match this to the duration of your animation
    } else {
      // When opening, set visibility first and then toggle the modal
      setVisible(true);
      setTimeout(() => setOpenWorkSettings(true), 50); // Small delay for animation effect
    }
  };

  return (
    <>
      <div
        className={`flex items-center max-w-max gap-2 p-1 rounded-md border cursor-pointer ${
          isAvailable
            ? "bg-green-200 border-green-700"
            : "bg-red-200 border-red-700"
        }`}
        title={isAvailable ? "Available to work" : "Currently engaged in work"}
        onClick={handleOpen}
      >
        <div
          className={`w-[12px] h-[12px] rounded-full ${
            isAvailable
              ? "bg-green-600 animate-bounce-flash"
              : "bg-red-600 animate-pulse"
          }`}
        ></div>
        <p
          className={`text-sm font-medium ${
            isAvailable ? "text-green-600" : "text-red-600"
          }`}
        >
          {isAvailable ? "Available to work" : "Currently engaged in work"}
        </p>
      </div>

      {visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
            openWorkSettings ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-[#212121] w-full max-w-md h-[450px] mx-3 rounded-lg p-6 text-white flex flex-col transition-transform duration-500 ease-in-out transform ${
              openWorkSettings ? "translate-y-0" : "translate-y-10"
            }`}
          >
            <h1 className="text-lg font-bold text-center mb-4">
              Work Preferences
            </h1>
            <div className="overflow-y-auto h-full">
              <div className="space-y-4">
                {/* Work Mode */}
                <div>
                  <h2 className="text-sm font-semibold">
                    Work Mode Preference:
                  </h2>
                  <ul className="text-sm list-disc pl-4 text-gray-400">
                    <li>On-site</li>
                    <li>Hybrid</li>
                    <li>Remote</li>
                  </ul>
                </div>

                {/* Preferred Locations */}
                <div>
                  <h2 className="text-sm  font-semibold">
                    Preferred Locations:
                  </h2>
                  <ul className="list-disc pl-4 text-gray-400 text-sm">
                    <li>Bangalore</li>
                    <li>Hyderabad</li>
                    <li>Remote (Flexible)</li>
                  </ul>
                </div>

                {/* Freelance Opportunities */}
                <div>
                  <h2 className="text-sm font-semibold">
                    Freelance Availability:
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Available for short-term and long-term freelance projects.
                  </p>
                </div>

                {/* Job Opportunities */}
                <div>
                  <h2 className="text-sm font-semibold">Job Opportunities:</h2>
                  <p className="text-gray-400 text-sm">
                    Open to full-time positions in tech roles, with a preference
                    for startups and dynamic teams.
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h2 className="text-sm font-semibold">
                    Preferred Tech Stack:
                  </h2>
                  <ul className="list-disc pl-4 text-gray-400 text-sm">
                    <li>Frontend: React, TypeScript, TailwindCSS</li>
                  </ul>
                </div>

                {/* Availability */}
                <div>
                  <h2 className="text-sm font-semibold">Availability:</h2>
                  <p className="text-gray-400 text-sm">
                    Available for 20-30 hours a week, flexible with time zones.
                  </p>
                </div>

                {/* Project Types */}
                <div>
                  <h2 className="text-sm font-semibold">Project Types:</h2>
                  <p className="text-gray-400 text-sm">
                    Interested in product development, UI/UX design, and API
                    integrations.
                  </p>
                </div>

                {/* Team Structure */}
                <div>
                  <h2 className="text-sm font-semibold">
                    Preferred Team Structure:
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Comfortable working in small teams or as an independent
                    contributor.
                  </p>
                </div>

                {/* Tools */}
                {/* <div>
            <h2 className="font-semibold">Work Tools:</h2>
            <ul className="list-disc pl-4 text-gray-400 text-sm">
              <li>GitHub</li>
              <li>Jira</li>
              <li>Slack</li>
            </ul>
          </div> */}

                <div className="flex justify-center">
                  <button
                    className="bg-[#161616] px-4 py-2 rounded-md text-sm"
                    onClick={handleOpen}
                  >
                    Got it.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
