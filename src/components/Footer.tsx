import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-linear-to-r text-gray-300 py-6 px-6 md:px-12 border-t border-white/10">
      <div className="text-center text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Joseph Rosas. {t('footer.rights')}</div>
      </div>
    </footer>
  );
}