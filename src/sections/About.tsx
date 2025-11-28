import { highlights } from "../data/highlights";
import { FadeInSection } from '../hooks/useFadeInOnScroll';
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return(
    <div id="about" className='px-8 md:px-16 lg:px-24 py-20 bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white scroll-mt-10 transition-colors duration-300'>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center text-4xl md:text-5xl font-bold mb-3 transition-colors duration-300">{t('about.title')}</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
        </div>

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 text-lg md:text-lg order-2 md:order-1">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{t('about.paragraph1')}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{t('about.paragraph2')}</p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="backdrop-blur-lg bg-gray-100/80 dark:bg-gray-800/40 border border-gray-300 dark:border-white/10 rounded-xl p-4 hover:bg-gray-200/80 dark:hover:bg-gray-800/60 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <item.icon className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1 transition-colors duration-300">{t(item.titleKey)}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{t(item.descriptionKey)}</p>
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
                    src="../profilephoto.png" 
                    alt="Joseph Rosas" 
                    className="relative border-4 border-blue-400/30 rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  {/* Decorative ring */}
                  <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full scale-110 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}