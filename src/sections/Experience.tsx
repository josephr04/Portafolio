import { Experiences } from "../data/experience";

export function Experience() {
  return (
    <div id="experience" className='px-[2em] pt-10 pb-10 text-white flex flex-col scroll-mt-20'>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center text-4xl md:text-5xl font-bold mb-2">Experience</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
      </div>
      <div className="relative mt-2 md:max-w-[min(800px,calc(100%-40px))] mx-auto w-full box-border">
        {/* Desktop Line */}
        <div className="hidden md:block absolute rounded-full left-0 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-400 to-blue-700 opacity-70"></div>
        
        {/* Mobile Line */}
        <div className="md:hidden absolute left-0 w-0.5 h-full bg-linear-to-b from-blue-400 to-blue-700 opacity-70"></div>
        
        {/* Experience Item */}
        {Experiences.map((experience) => (
          <div key={experience.title} className="flex-1 group my-8 backdrop-blur-lg bg-gray-800/60 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 ml-7">
              {/* Experience Dot */}
              <div className="absolute left-[-38px] md:-left-10 top-5 w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full border-4 border-[#1a1a2e] z-10 transition-all duration-500 group-hover:scale-120 shadow-lg shadow-blue-500/60"></div>

              <div className="text-xl font-bold text-white mb-2 relative z-10">{experience.title}</div>
              <div className="text-base bg-blue-400 bg-clip-text mb-2 text-transparent font-semibold relative z-10">{experience.business}</div>
              <div className="text-base text-gray-400 font-medium mb-4 relative z-10">{experience.role}</div>
              <span className="inline-block bg-blue-400/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-5 border border-blue-500/30 relative z-10">{experience.time}</span>
              <p className="text-gray-300 leading-relaxed mb-5 relative z-10">{experience.description}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {experience.skills.map((skill) => (
                  <span key={skill} className="bg-blue-400/15 text-blue-200 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:-translate-y-1 cursor-default">{skill}</span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};