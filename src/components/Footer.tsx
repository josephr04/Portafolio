import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-[#0a0a0f] text-gray-600 dark:text-gray-300 py-6 px-6 md:px-12 border-t border-gray-300 dark:border-white/10 transition-colors duration-300">
      <div className="text-center text-sm text-gray-500 dark:text-gray-500">
        <div>© {new Date().getFullYear()} Joseph Rosas. {t('footer.rights')}</div>
      </div>
    </footer>
  );
}