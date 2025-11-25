import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </motion.button>
  );
}