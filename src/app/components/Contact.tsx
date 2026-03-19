import { useLanguage } from '@/app/contexts/LanguageContext';
import { WhatsAppButton } from '@/app/components/WhatsAppButton';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Primera Consulta Gratuita - Respuesta en 15 Minutos', 'Free First Consultation - Response in 15 Minutes')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/90">
            {t(
              'Disponible 24/7 para emergencias. Planes de financiamiento disponibles.',
              'Available 24/7 for emergencies. Financing plans available.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t('Información de Contacto', 'Contact Information')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#c4955c' }} />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:+526862800177" className="text-white/90 hover:text-white">
                      +52 (686) 280-0177
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#c4955c' }} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:lic.souza@gmail.com" className="text-white/90 hover:text-white">
                      lic.souza@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#c4955c' }} />
                  <div>
                    <p className="font-semibold">
                      {t('Ubicación', 'Location')}
                    </p>
                    <p className="text-white/90">Tijuana, Baja California</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#c4955c' }} />
                  <div>
                    <p className="font-semibold">
                      {t('Horario', 'Hours')}
                    </p>
                    <p className="text-white/90">
                      {t('Lunes a Viernes 9:00 AM - 4:00 PM', 'Monday to Friday 9:00 AM - 4:00 PM')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold text-xl mb-4">
                {t('Ventajas de Contactarnos', 'Benefits of Contacting Us')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white/90">
                    {t('15 minutos de respuesta', '15 minute response')}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white/90">
                    {t('Atención 24/7', '24/7 attention')}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white/90">
                    {t('Planes de financiamiento', 'Financing plans')}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col justify-center items-center text-center bg-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-accent rounded-full mb-6">
                <span className="text-2xl font-bold">
                  {t('¡CONSULTA GRATUITA!', 'FREE CONSULTATION!')}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {t('¿Necesitas Ayuda Legal?', 'Need Legal Help?')}
              </h3>
              <p className="text-lg text-white/90 mb-8">
                {t(
                  'Contáctanos ahora y recibe tu primera consulta sin costo ni compromiso.',
                  'Contact us now and receive your first consultation at no cost or obligation.'
                )}
              </p>
            </div>

            <WhatsAppButton size="lg" />

            <p className="text-sm text-white/70 mt-6">
              {t(
                'Respuesta garantizada en menos de 15 minutos',
                'Guaranteed response in less than 15 minutes'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};