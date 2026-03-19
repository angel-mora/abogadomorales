import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { trackWhatsAppClick } from '@/app/utils/analytics';

interface WhatsAppButtonProps {
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton = ({ variant = 'inline', size = 'md' }: WhatsAppButtonProps) => {
  const { t } = useLanguage();
  const whatsappUrl = 'https://wa.me/526862800177?text=Hola%20Maestro%20Morales%2C%20quiero%20mi%20consulta%20gratuita';

  const handleClick = () => {
    trackWhatsAppClick();
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  if (variant === 'fixed') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: '#25d366' }}
        aria-label={t('Contactar por WhatsApp', 'Contact via WhatsApp')}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 ${sizeClasses[size]} rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
      style={{ backgroundColor: '#25d366', color: 'white' }}
    >
      <MessageCircle className="w-5 h-5" />
      {t('Consultar Gratis por WhatsApp', 'Free Consultation via WhatsApp')}
    </a>
  );
};