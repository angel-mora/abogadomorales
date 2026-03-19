import { useLanguage } from '@/app/contexts/LanguageContext';
import { Check, Users, Clock, DollarSign, Shield, Award, MessageCircle, AlertCircle } from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleEs: '10 años de experiencia',
      titleEn: '10 years of experience',
      descEs: 'Defendiendo casos en Tijuana',
      descEn: 'Defending cases in Tijuana'
    },
    {
      icon: Shield,
      titleEs: '+200 casos',
      titleEn: '+200 cases',
      descEs: 'Manejados exitosamente',
      descEn: 'Successfully handled'
    },
    {
      icon: DollarSign,
      titleEs: 'Primera consulta GRATUITA',
      titleEn: 'First consultation FREE',
      descEs: 'Sin compromiso',
      descEn: 'No commitment'
    },
    {
      icon: DollarSign,
      titleEs: 'Planes de financiamiento disponibles',
      titleEn: 'Financing plans available',
      descEs: 'Facilidades de pago',
      descEn: 'Payment facilities'
    },
    {
      icon: Users,
      titleEs: 'Equipo de 5 colaboradores',
      titleEn: 'Team of 5 collaborators',
      descEs: 'Especializados',
      descEn: 'Specialized'
    },
    {
      icon: Clock,
      titleEs: 'Respuesta en 15 minutos',
      titleEn: 'Response in 15 minutes',
      descEs: 'Por WhatsApp',
      descEn: 'Via WhatsApp'
    },
    {
      icon: AlertCircle,
      titleEs: 'Atención de emergencias 24/7',
      titleEn: '24/7 emergency attention',
      descEs: 'Siempre disponibles',
      descEn: 'Always available'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('Por Qué Elegirnos', 'Why Choose Us')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed font-serif italic">
            "{t(
              'Transparencia total. No damos falsas esperanzas, damos resultados. Con 10 años defendiendo casos en Tijuana, nuestro enfoque es honesto y efectivo.',
              'Total transparency. We don\'t give false hope, we deliver results. With 10 years defending cases in Tijuana, our approach is honest and effective.'
            )}"
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {t(feature.titleEs, feature.titleEn)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(feature.descEs, feature.descEn)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {t('Experiencia en Ambos Sistemas', 'Experience in Both Systems')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Fuero común (estatal)', 'Common jurisdiction (state)')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Fuero federal', 'Federal jurisdiction')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Amplia experiencia en ambos sistemas judiciales', 'Extensive experience in both judicial systems')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {t('Horario', 'Schedule')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Lunes a Viernes: 9:00 AM - 4:00 PM', 'Monday to Friday: 9:00 AM - 4:00 PM')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Casos urgentes: Fines de semana disponibles', 'Urgent cases: Weekends available')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#c4955c' }} />
                  <span>{t('Emergencias: 24/7 por WhatsApp', 'Emergencies: 24/7 via WhatsApp')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};