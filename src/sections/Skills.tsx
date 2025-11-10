import { skillCategory } from "../skillCategory";

export function Skills() {
  return(
    <div id="skills" className="px-[2em] pt-10 pb-10 bg-[#0d1117] text-white flex flex-col">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center text-3xl font-bold mb-2">Skills</div>
        <div className="h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl w-12"></div>
      </div>
        <div className="flex-col flex gap-6">
          {Object.entries(skillCategory).map(([category, skills]) => (
            <div key={category} className="bg-gray-800/60 rounded-xl p-4 border border-[#30363d] hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-[#8d96a0] text-[18px] font-medium mb-4">
                <span className="font-semibold text-white">{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  return (
                    <div key={skill.title} className="flex items-center justify-center gap-1 rounded-md px-2 py-0.5 bg-blue-400/15 border border-blue-500/30 transition-all hover:-translate-y-1">
                      <img src={skill.logo} className="w-4 h-4" alt={skill.title}/>
                      <div className="text-[14px] font-medium">{skill.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};