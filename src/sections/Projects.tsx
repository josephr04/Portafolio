import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div id="projects" className='px-8 md:px-16 lg:px-32 py-20 text-white scroll-mt-10'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center text-4xl md:text-5xl font-bold mb-3">Projects</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-gray-800/60 rounded-2xl overflow-hidden flex flex-col border border-[#30363d] hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
                  src={`../${project.image}`} 
                  alt={project.title} 
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 grow leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 rounded-full bg-blue-400/15 border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:-translate-y-1 cursor-default text-blue-200 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a 
                    className="flex gap-2 items-center text-gray-400 hover:text-blue-400 transition-colors" 
                    href={project.repository} 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    className="flex gap-2 items-center text-gray-400 hover:text-blue-400 transition-colors" 
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
          ))}
        </div>
      </div>
    </div>
  );
}