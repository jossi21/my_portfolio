import React from "react";
import { skills } from "../../../data/skill";
import { FaCss3, FaHtml5 } from "react-icons/fa";

const Skills = () => {
  // Categorize skills by type (optional)
  const skillCategory = {
    " Frontend ": [
      skills.find((skill) => skill.name === "HTML"),
      skills.find((skill) => skill.name === "CSS"),
      skills.find((skill) => skill.name === "JavaScript"),
      skills.find((skill) => skill.name === "React js"),
      skills.find((skill) => skill.name === "Next js"),
      skills.find((skill) => skill.name === "Tailwind CSS"),
    ].filter(Boolean),
    " Backend & API ": [
      skills.find((skill) => skill.name === "Node.js"),
      skills.find((skill) => skill.name === "Express.js"),
      skills.find((skill) => skill.name === "Python"),
    ].filter(Boolean),
    " Database ": [
      skills.find((skill) => skill.name === "MySQL"),
      skills.find((skill) => skill.name === "PostgreSQL"),
    ].filter(Boolean),
    " Tools ": [
      skills.find((skill) => skill.name === "Responsive Design"),
      skills.find((skill) => skill.name === "Vite"),
      skills.find((skill) => skill.name === "Git & GitHub"),
    ].filter(Boolean),
  };

  // Proficiency levels
  const proficiencyLevel = (level) => {
    const levels = {
      Expert: 92,
      Advanced: 79,
      Intermediate: 68,
    };
    return levels[level] || 50;
  };

  // proficiencyLevel color
  const proficiencyColor = (level) => {
    const colors = {
      Expert: "text-green-500 bg-[#8dff69]/20 border-green-500",
      Advanced: "text-yellow-500 bg-[#fde047]/20 border-yellow-500",
      Intermediate: "text-orange-500 bg-[#fdba74]/20 border-orange-500",
    };
    return colors[level] || "text-gray-500 bg-gray-200 border-gray-500";
  };

  return (
    <section className="w-[89%] relative mx-auto py-10 min-h-screen overflow-auto">
      <h1 className="text-5xl text-emerald-300 font-bold mb-12 text-center">
        Skills
      </h1>

      <div className="space-y-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {Object.entries(skillCategory).map(([categoryName, categorySkills]) => (
          <div key={categoryName}>
            {/* Category Title */}
            <h2 className="text-3xl text-center font-semibold mb-2 text-[var(--subtitle-button)] ">
              {categoryName}
            </h2>
            <hr className="border-b-5 mb-3 rounded-full" />
            {/* Skills Grid */}
            <div className="w-full py-5 px-2 rounded-xl bg-[var(--subtitle-button)]/10 relative overflow-visible ">
              {categorySkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.id}
                    className="flex flex-col py-1 my-3 bg-black hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300 hover:scale-110 rounded-[25px] justify-between"
                  >
                    <div className="flex py-1 px-2  items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          {Icon && (
                            <Icon className={`text-4xl ${skill.color}`} />
                          )}
                        </span>
                        <h4 className="text-[var(--subtitle-button)] font-medium">
                          {skill.name}
                        </h4>
                      </div>
                      <span
                        className={`text-xs py-1 px-1 rounded-full text-center border ${proficiencyColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden mb-1">
                      {/* Fixed gradient div */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all mx-2 duration-300"
                        style={{
                          width: `${proficiencyLevel(skill.level)}%`,
                          background: `linear-gradient(to right, 
                            color-mix(in srgb, var(--color-primary) 10%, transparent),
                            color-mix(in srgb, var(--color-primary) 80%, transparent)
                          ) `,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
