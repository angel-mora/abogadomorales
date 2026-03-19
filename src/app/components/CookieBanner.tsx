import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white p-4 shadow-2xl">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl">
        <p className="text-sm text-center sm:text-left">
          {t(
            'Usamos cookies para mejorar tu experiencia en nuestro sitio web.',
            'We use cookies to improve your experience on our website.'
          )}
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            {t('Aceptar', 'Accept')}
          </button>
          <button
            onClick={acceptCookies}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
