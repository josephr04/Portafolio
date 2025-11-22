import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Contact() {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted');
  };

  return (
    <div id="contact" className="px-6 py-16 bg-[#0d1117] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
        <div className="text-center text-4xl md:text-5xl font-bold mb-2">Contact</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl w-20"></div>
          <p className="text-gray-400 mt-4 text-center max-w-xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-[#30363d] hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <IoIosMail className="w-6 h-6 text-blue-400" />
                Contact Information
              </h3>
              
              {/* Email */}
              <div className="mb-6 group">
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a 
                  href="mailto:jrosas.dev@gmail.com"
                  className="text-lg flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <IoIosMail className="w-5 h-5" />
                  jrosas.dev@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/josephr04"
                    target="_blank"
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800/70 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-gray-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                  >
                    <FaGithub className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/joseph-rosas-595a15371"
                    target="_blank"
                    aria-label="LinkedIn"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800/70 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-gray-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                  >
                    <FaLinkedinIn className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  </a>

                  <a
                    href="mailto:jrosas.dev@gmail.com"
                    aria-label="Email"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800/70 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-gray-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                  >
                    <IoIosMail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-[#30363d] hover:border-blue-500/30 transition-all duration-300"
          >
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your subject"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <textarea 
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}