import { useLanguage } from '@/app/contexts/LanguageContext';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Maestro Morales</h3>
                <p className="text-sm text-white/80">
                  {t('Abogado Criminalista', 'Criminal Defense Attorney')}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              {t(
                'Defensa criminal profesional en Tijuana con 10 años de experiencia.',
                'Professional criminal defense in Tijuana with 10 years of experience.'
              )}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t('Contacto', 'Contact')}</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+526862800177" className="hover:text-white">
                  +52 (686) 280-0177
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:lic.souza@gmail.com" className="hover:text-white">
                  lic.souza@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tijuana, Baja California</span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div>
            <h4 className="font-bold mb-4">{t('Aviso Legal', 'Legal Notice')}</h4>
            <p className="text-sm text-white/80">
              {t(
                'La información en este sitio es solo informativa y no constituye asesoramiento legal.',
                'Information on this website is for informational purposes only and does not constitute legal advice.'
              )}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>
            &copy; {currentYear} Maestro Morales. {t('Todos los derechos reservados.', 'All rights reserved.')}
          </p>
          <p className="mt-2">
            {t('Sitio web:', 'Website:')} <span className="text-accent">abogadomorales.mx</span>
          </p>
        </div>
      </div>
    </footer>
  );
};