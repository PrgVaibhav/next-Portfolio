import { Section } from "../../../Components";

const SKILLS = [
  { id: 1, skill: "HTML", percentage: 100, color: "bg-orange-500" },
  { id: 2, skill: "CSS", percentage: 90, color: "bg-blue-500" },
  { id: 3, skill: "JavaScript", percentage: 85, color: "bg-yellow-500" },
  { id: 4, skill: "ReactJS", percentage: 85, color: "bg-sky-500" },
  { id: 5, skill: "Tailwind CSS", percentage: 50, color: "bg-teal-400" },
  { id: 6, skill: "SCSS", percentage: 70, color: "bg-pink-500" },
  { id: 7, skill: "NextJS", percentage: 50, color: "bg-gray-500" },
  { id: 8, skill: "Typescript", percentage: 40, color: "bg-blue-400" },
];

type SkillBarProps = {
  percentage: number;
  skill: string;
  color: string;
};

const SkillBar = ({ percentage, skill, color }: SkillBarProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-white">{skill}</span>
        <span className="text-xs text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-lg h-4 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <Section label="Skills section">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-white mb-2">Skills.</h2>
        </div>
        <p className="text-sm md:text-lg text-gray-400 font-medium">
          If life throws you errors, just add some try-catch blocks, laugh it
          off, and keep coding your way to success!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-10">
          <div className="flex flex-col gap-4">
            {SKILLS.slice(0, 4).map((skill) => (
              <SkillBar
                key={skill.id}
                percentage={skill.percentage}
                skill={skill.skill}
                color={skill.color}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {SKILLS.slice(4).map((skill) => (
              <SkillBar
                key={skill.id}
                percentage={skill.percentage}
                skill={skill.skill}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
