import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return(
    <div id='hero' className='relative h-auto py-10 md:min-h-screen flex items-center px-8 md:px-16 lg:px-24 bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white overflow-hidden transition-colors duration-300'>
      {/* Subtle animated background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-blue-100/30 via-transparent to-blue-200/20 dark:from-blue-900/10 dark:via-transparent dark:to-blue-800/10 animate-pulse-slow transition-colors duration-300' />
        <div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDk2LDE2NSwyNTAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==")] opacity-20 dark:opacity-30 transition-opacity duration-300' />
      </div>

      {/* Floating geometric shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float transition-colors duration-300' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay-2 transition-colors duration-300' />
        <div className='absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float-delay-4 transition-colors duration-300' />
      </div>

      {/* Main content */}
      <div className='relative mb-8 z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center'>
        {/* Left side - Text content */}
        <div className={`space-y-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

          {/* Main heading */}
          <div>
            <h2 className='text-gray-600 dark:text-gray-400 text-lg mb-2 transition-colors duration-300'>{t('hero.title')}</h2>
            <TypeAnimation
              sequence={[
                'Joseph Rosas',
                2000,
                'Joseph',
                500,
                'Joseph Rosas',
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={30}
              className='text-[41px] md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent'
            />
            <div className='flex items-center gap-2 text-2xl md:text-3xl text-gray-700 dark:text-gray-300 transition-colors duration-300'>
              <span className='text-blue-400 text-xl md:text-2xl font-mono'>{'<'}</span>
              <div className='text-[19px] md:text-2xl'>{t('hero.subtitle')}</div>
              <span className='text-blue-400 font-mono'>{'/>'}</span>
            </div>
          </div>

          {/* Description */}
          <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl transition-colors duration-300'>{t('hero.description')}</p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4 pt-4'>
            <a href='#' className='group relative flex justify-center items-center px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40'>
              <span className='relative z-10 flex items-center gap-2 justify-center text-white'>
                {t('hero.downloadCV')}
                <HiArrowRight className='group-hover:translate-x-1 transition-transform' />
              </span>
              <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </a>
            
            <a href='#contact' className='px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:bg-blue-400/5 transition-all duration-300'>
              {t('hero.contact')}
            </a>
          </div>

          {/* Social links */}
          <div className='flex gap-4 pt-4'>
            {[
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/joseph-rosas-595a15371", size: 22, label: "LinkedIn" },
              { Icon: FaGithub, href: "https://github.com/josephr04", size: 22, label: "GitHub" },
              { Icon: IoIosMail, href: "mailto:joseph.rosas.peralta@gmail.com", size: 26, label: "Email" }
            ].map(({ Icon, href, size, label }, index) => (
              <a 
                key={index}
                href={href}
                aria-label={label}
                rel="noopener noreferrer" 
                target="_blank"
                className='flex items-center justify-center w-13 h-13 p-3 backdrop-blur-lg bg-gray-100/80 dark:bg-gray-800/60 border border-gray-300 dark:border-white/10 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 group'
              >
                <Icon className="text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition-colors" size={size} />
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className={`hidden md:flex justify-center items-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className='relative w-full max-w-md aspect-square'>
            {/* Animated rings */}
            <div className='absolute inset-0 border-2 border-blue-400/50 dark:border-blue-400/30 rounded-full animate-spin-slow transition-colors duration-300' />
            <div className='absolute inset-8 border-2 border-blue-500/40 dark:border-blue-500/20 rounded-full animate-spin-slow-reverse transition-colors duration-300' />
            <div className='absolute inset-16 border-2 border-blue-400/45 dark:border-blue-400/25 rounded-full animate-spin-slow-10 transition-colors duration-300' />
            
            {/* Center glow */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-48 h-48 bg-blue-400/30 dark:bg-blue-400/20 rounded-full blur-2xl animate-pulse transition-colors duration-300' />
            </div>

            {/* Floating code symbols */}
            <div className='absolute top-1/4 left-0 text-blue-400/50 dark:text-blue-400/30 text-6xl font-mono animate-float transition-colors duration-300'>{'{'}</div>
            <div className='absolute bottom-1/4 right-0 text-blue-400/50 dark:text-blue-400/30 text-6xl font-mono animate-float-delay-1 transition-colors duration-300'>{'}'}</div>
            <div className='absolute top-1/3 right-1/4 text-blue-400/50 dark:text-blue-400/30 text-4xl font-mono animate-float-delay-2 transition-colors duration-300'>{'</>'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}