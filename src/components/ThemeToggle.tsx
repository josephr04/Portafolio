// ThemeToggle.tsx
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center p-2 rounded-lg bg-gray-200 dark:bg-gray-800/60 border border-gray-300 dark:border-white/10 hover:bg-gray-300 dark:hover:bg-gray-700/60 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FiSun className="text-yellow-400 text-xl" />
        ) : (
          <FiMoon className="text-blue-600 text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
}