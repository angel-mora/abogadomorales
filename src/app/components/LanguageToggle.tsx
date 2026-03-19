import { useLanguage } from '@/app/contexts/LanguageContext';
import { trackLanguageChange } from '@/app/utils/analytics';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    trackLanguageChange(newLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/20 hover:bg-secondary/40 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium uppercase tracking-wide">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};