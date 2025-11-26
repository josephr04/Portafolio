import { skillCategories } from '../data/skillCategory'; 
import { FadeInSection } from '../hooks/useFadeInOnScroll';
import { useLanguage } from "../contexts/LanguageContext";

type SkillCategoryKey = 'skills.languages' | 'skills.frameworks' | 'skills.databases' | 'skills.tools';

export function Skills() {
  const { t } = useLanguage();

  return(
    <div id="skills" className="px-8 md:px-16 lg:px-32 py-20 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white scroll-mt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center text-4xl md:text-5xl font-bold mb-3 transition-colors duration-300">{t('skills.title')}</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <FadeInSection key={category}>
              <div className="bg-gray-100/80 dark:bg-gray-800/60 rounded-xl p-6 border border-gray-300 dark:border-[#30363d] hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
                {/* Category Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {t(`skills.${category}` as SkillCategoryKey)}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => {
                    return (
                      <div 
                        key={skill.title} 
                        className="flex items-center gap-2 rounded-lg px-3 py-2 bg-blue-400/15 border border-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-500/25 cursor-default"
                      >
                        <img 
                          src={skill.logo} 
                          className="w-5 h-5" 
                          alt={`${skill.title} logo`}
                        />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-100 transition-colors duration-300">{skill.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}