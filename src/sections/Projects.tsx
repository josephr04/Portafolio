import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../projects";

export function Projects() {
  return (
    <div id="projects" className='px-[2em] pt-10 pb-10 text-white flex flex-col'>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center text-3xl font-bold mb-2">Projects</div>
        <div className="h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl w-12"></div>
      </div>
      <div className="flex flex-wrap gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800/60 rounded-2xl max-w-lg overflow-hidden flex flex-col border border-[#30363d] hover:border-blue-500  transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20">
            <img className="object-cover h-45 sm:h-auto" src={`../public/${project.image}`} alt={project.title} />
            <div className="p-4">
              <div className="text-xl font-medium mb-4 mt-2">{project.title}</div>
              <div className="text-gray-400 mb-4">{project.description}</div>
              <div className="flex flex-wrap gap-2 mb-6 font-semibold">
                {project.tech.map((item) => (
                  <div key={item} className="px-3 py-1 rounded-3xl bg-blue-400/15 border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:-translate-y-1 cursor-default text-white text-sm text-center">
                    <span className="text-blue-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mb-2">
                <a className="flex gap-1 items-center" href={project.repository} rel="noopener noreferrer" target="_blank">
                  <FaGithub className="icon" size={18} color="#99a1af" />
                  <span className="text-gray-400">Code</span>
                </a>
                <a className="flex gap-1 items-center" href={project.demo} rel="noopener noreferrer" target="_blank">
                  <FaExternalLinkAlt className="icon" size={16} color="#99a1af" />
                  <span className="text-gray-400">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};