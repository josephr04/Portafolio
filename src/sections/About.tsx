import { highlights } from "../data/highlights";

export function About() {

  return(
    <div id="about" className='px-8 md:px-16 lg:px-24 py-20 text-white scroll-mt-10'>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center text-4xl md:text-5xl font-bold mb-3">About Me</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I stand out as a passionate and dedicated software developer who is always thriving in building efficient solutions in every project.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I possess strong skills in web application development, both in frontend and backend. I excel in collaborative environments and am always eager to learn and improve my skills.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-lg bg-gray-800/40 border border-white/10 rounded-xl p-4 hover:bg-gray-800/60 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <item.icon className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative">
                <img 
                  src="../public/dogpfp.jpg" 
                  alt="Joseph Rosas" 
                  className="relative border-4 border-blue-400/30 rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full scale-110 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}