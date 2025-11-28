import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../data/navigation";
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from "../contexts/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { t } = useLanguage();

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      {/* Hamburger Button */}
      <div className="fixed right-3 top-3 text-gray-900 dark:text-white transition-colors duration-300">
        <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-18 p-5 pt-[0.5em] z-50 bg-white dark:bg-[#0d1117] border-b border-t border-gray-300 dark:border-[#30363d] shadow-4xl transition-colors duration-300"
          >
            {/* Menu Links */}
            <ul className="grid gap-2">
              {routes.map((route, idx) => (
                <li key={route.titleKey} className="w-full p-[0.08rem]">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    className="w-full"
                  >
                    <a
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center w-full p-3 font-semibold text-gray-900 dark:text-white hover:text-blue-400 transition-colors duration-300"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-base">
                        {t(route.titleKey)}
                      </span>
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center mt-4 gap-3"
            >
              <LanguageToggle />
              <ThemeToggle />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
