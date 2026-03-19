import { useLanguage } from '@/app/contexts/LanguageContext';
import { WhatsAppButton } from '@/app/components/WhatsAppButton';
import { Badge } from '@/app/components/ui/badge';
import heroImage from '@/assets/2b78c6dd2ce1181dc95c8124de3c732d8bc11ed7.png';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <Badge className="mb-4 px-4 py-2 text-sm font-semibold" style={{ backgroundColor: '#c4955c', color: 'white' }}>
                {t('Primera Consulta GRATUITA', 'First Consultation FREE')}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
                {t(
                  'Defensa Criminal Profesional en Tijuana',
                  'Professional Criminal Defense in Tijuana'
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t(
                  '10 años de experiencia | Primera Consulta GRATUITA',
                  '10 years experience | First Consultation FREE'
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton size="lg" />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  {t('Años', 'Years')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">
                  {t('Casos', 'Cases')}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Maestro Morales"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};