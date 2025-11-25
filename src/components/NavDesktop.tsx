import { routes } from "../data/navigation"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from "../contexts/LanguageContext";

export function NavDesktop() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map(route => {
        const element = document.querySelector(route.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            title: route.title,
            top: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(section => 
        section && section.top <= 100 && section.bottom > 100
      );

      if (current) {
        setActiveSection(current.title);
      }
    };

    handleScroll(); // Ejecutar al montar
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const { t } = useLanguage();
  
  return (
    <div className="flex">
      <ul className="flex gap-6 items-center">
        {routes.map((route) => {
          const { href, title, titleKey } = route;
          const isActive = activeSection === title;
          
          return (
            <li key={title}>
              <motion.div
                className="flex flex-col"
                onHoverStart={() => setHoveredItem(title)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a 
                  href={href} 
                  className='flex items-center gap-1 transition-all duration-450 font-semibold hover:text-blue-400'
                >
                  {t(titleKey)}
                </a>

                <motion.div
                  layoutId="underline"
                  className={`border-t-3 border-blue-400 rounded-xl transition-all duration-450 ease-in-out ${
                    hoveredItem === title || isActive ? "w-full" : "w-0"
                  }`}
                />
              </motion.div>
            </li>
          );
        })}
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </div>
  )
}