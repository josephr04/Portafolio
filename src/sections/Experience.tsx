import { Experiences } from "../data/experience";
import { FadeInSection } from '../hooks/useFadeInOnScroll';
import { useLanguage } from "../contexts/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <div id="experience" className='px-[2em] pt-10 pb-10 bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white flex flex-col scroll-mt-20 transition-colors duration-300'>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300">{t('experience.title')}</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
      </div>

      <div className="relative mt-2 md:max-w-[min(800px,calc(100%-40px))] mx-auto w-full box-border">
        {/* Desktop Line */}
        <div className="hidden md:block absolute rounded-full left-0 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-400 to-blue-700 opacity-70"></div>
        
        {/* Mobile Line */}
        <div className="md:hidden absolute left-0 w-0.5 h-full bg-linear-to-b from-blue-400 to-blue-700 opacity-70"></div>
        
        {/* Experience Item */}
        {Experiences.map((experience) => (
          <FadeInSection key={experience.titlekey}>
            <div className="flex-1 group my-8 backdrop-blur-lg bg-gray-100/80 dark:bg-gray-800/60 border border-gray-300 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 ml-7">
              {/* Experience Dot */}
              <div className="absolute left-[-38px] md:-left-10 top-5 w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full border-4 border-white dark:border-[#1a1a2e] z-10 transition-all duration-500 group-hover:scale-120 shadow-lg shadow-blue-500/60"></div>

              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10 transition-colors duration-300">{t(experience.titlekey)}</div>
              <div className="text-base bg-blue-400 bg-clip-text mb-2 text-transparent font-semibold relative z-10">{t(experience.businesskey)}</div>
              <div className="text-base text-gray-600 dark:text-gray-400 font-medium mb-4 relative z-10 transition-colors duration-300">{t(experience.rolekey)}</div>
              <span className="inline-block bg-blue-400/20 text-blue-600 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-5 border border-blue-500/30 relative z-10 transition-colors duration-300">{t(experience.timekey)}</span>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 relative z-10 transition-colors duration-300">{t(experience.descriptionkey)}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {experience.skills.map((skill) => (
                  <span key={skill} className="bg-blue-400/15 text-blue-600 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:-translate-y-1 cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};