import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import { FadeInSection } from '../hooks/useFadeInOnScroll';
import { useLanguage } from "../contexts/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <div id="projects" className='px-8 md:px-16 lg:px-32 py-20 bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white scroll-mt-10 transition-colors duration-300'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center text-4xl md:text-5xl font-bold mb-3 transition-colors duration-300">{t('projects.title')}</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <FadeInSection key={project.titlekey}>
              <div className="bg-gray-100/80 dark:bg-gray-800/60 rounded-2xl overflow-hidden flex flex-col border border-gray-300 dark:border-[#30363d] hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
                    src={`../${project.image}`} 
                    alt={project.titlekey} 
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white transition-colors duration-300">{t(project.titlekey)}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 grow leading-relaxed transition-colors duration-300">{t(project.descriptionkey)}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1 rounded-full bg-blue-400/15 border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:-translate-y-1 cursor-default text-blue-600 dark:text-blue-200 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a 
                      className="flex gap-2 items-center text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors" 
                      href={project.repository} 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <FaGithub size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      className="flex gap-2 items-center text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors" 
                      href={project.demo} 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}