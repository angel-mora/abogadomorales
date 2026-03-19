import { useLanguage } from '@/app/contexts/LanguageContext';
import { Scale, Pill, Wallet, AlertTriangle, FileText } from 'lucide-react';

export const PracticeAreas = () => {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Scale,
      titleEs: 'Defensa Penal General',
      titleEn: 'General Criminal Defense',
      descEs: 'Federal y estatal',
      descEn: 'Federal and state'
    },
    {
      icon: Pill,
      titleEs: 'Delitos contra la Salud',
      titleEn: 'Drug Offenses',
      descEs: 'Narcóticos',
      descEn: 'Narcotics'
    },
    {
      icon: Wallet,
      titleEs: 'Delitos Patrimoniales',
      titleEn: 'Property Crimes',
      descEs: 'Robo, fraude',
      descEn: 'Theft, fraud'
    },
    {
      icon: AlertTriangle,
      titleEs: 'Delitos Graves',
      titleEn: 'Serious Crimes',
      descEs: 'Homicidio, violencia',
      descEn: 'Homicide, violence'
    },
    {
      icon: FileText,
      titleEs: 'Amparos y Apelaciones',
      titleEn: 'Amparos and Appeals',
      descEs: 'Recursos legales',
      descEn: 'Legal remedies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('Áreas de Práctica', 'Practice Areas')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Experiencia integral en defensa criminal en el sistema judicial mexicano',
              'Comprehensive experience in criminal defense in the Mexican judicial system'
            )}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">
                  {t(area.titleEs, area.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(area.descEs, area.descEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
