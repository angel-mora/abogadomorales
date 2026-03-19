import { useLanguage } from '@/app/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = {
    es: [
      {
        initials: 'J.M.',
        case: 'Delito Federal',
        text: 'Maestro Morales me defendió con profesionalismo y logró reducir mi sentencia significativamente. Su conocimiento del sistema federal es excepcional.',
        rating: 5
      },
      {
        initials: 'A.R.',
        case: 'Robo Calificado',
        text: 'Transparente desde el inicio, me explicó todo el proceso claramente. Gracias a su defensa, salí absuelto. Lo recomiendo ampliamente.',
        rating: 5
      },
      {
        initials: 'M.G.',
        case: 'Narcóticos',
        text: 'Su equipo trabajó incansablemente en mi caso. El resultado superó mis expectativas. Maestro Morales realmente sabe lo que hace.',
        rating: 5
      },
      {
        initials: 'C.L.',
        case: 'Fraude',
        text: 'Honestidad total desde la primera consulta. Me ayudó a entender mi situación legal y logró un acuerdo favorable. Excelente abogado.',
        rating: 5
      },
      {
        initials: 'R.H.',
        case: 'Lesiones',
        text: 'Respondió rápido por WhatsApp y me representó excelentemente en juicio. Su experiencia en litigación oral se nota inmediatamente.',
        rating: 5
      },
      {
        initials: 'S.P.',
        case: 'Amparo Penal',
        text: 'Profesional, discreto y efectivo. Mi amparo fue concedido gracias a su experiencia y dedicación. Vale cada peso invertido.',
        rating: 5
      }
    ],
    en: [
      {
        initials: 'J.M.',
        case: 'Federal Offense',
        text: 'Maestro Morales defended me professionally and achieved a significant sentence reduction. His knowledge of the federal system is exceptional.',
        rating: 5
      },
      {
        initials: 'A.R.',
        case: 'Aggravated Theft',
        text: 'Transparent from the start, he explained the entire process clearly. Thanks to his defense, I was acquitted. Highly recommend.',
        rating: 5
      },
      {
        initials: 'M.G.',
        case: 'Narcotics',
        text: 'His team worked tirelessly on my case. The result exceeded my expectations. Maestro Morales really knows what he\'s doing.',
        rating: 5
      },
      {
        initials: 'C.L.',
        case: 'Fraud',
        text: 'Total honesty from the first consultation. He helped me understand my legal situation and achieved a favorable agreement. Excellent attorney.',
        rating: 5
      },
      {
        initials: 'R.H.',
        case: 'Assault',
        text: 'He responded quickly via WhatsApp and represented me excellently in court. His oral litigation experience is immediately apparent.',
        rating: 5
      },
      {
        initials: 'S.P.',
        case: 'Criminal Amparo',
        text: 'Professional, discreet and effective. My amparo was granted thanks to his experience and dedication. Worth every penny.',
        rating: 5
      }
    ]
  };

  const currentTestimonials = language === 'es' ? testimonials.es : testimonials.en;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('Testimonios', 'Testimonials')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            {t(
              'Lo que dicen nuestros clientes',
              'What our clients say'
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent/30" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.initials}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.case}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
