import { useLanguage } from '@/app/contexts/LanguageContext';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import profileImage from '@/assets/6d0e62a205a7e39636b045b9934088889e81530b.png';

export const Profile = () => {
  const { t } = useLanguage();

  const education = {
    es: [
      {
        degree: 'Licenciatura en Derecho',
        institution: 'Universidad Autónoma de Baja California (UABC), Campus Mexicali',
        years: '2013-2016',
        note: 'Título y Cédula Profesional'
      },
      {
        degree: 'Maestría en Técnicas de Litigación Oral',
        institution: 'California Western School of Law, San Diego, California',
        years: '2016-2018',
        note: 'Enfoque en Derecho Penal y Civil'
      }
    ],
    en: [
      {
        degree: 'Law Degree (Licenciatura en Derecho)',
        institution: 'Autonomous University of Baja California (UABC), Mexicali Campus',
        years: '2013-2016',
        note: 'Professional License'
      },
      {
        degree: "Master's in Oral Litigation Techniques",
        institution: 'California Western School of Law, San Diego, California',
        years: '2016-2018',
        note: 'Focus on Criminal and Civil Law'
      }
    ]
  };

  const experience = {
    es: [
      { year: '2017-2018', role: 'Auxiliar Administrativo en el Centro de Justicia Penal del Estado de B.C.' },
      { year: '2018-2019', role: 'Oficial de Partes y Auxiliar de Sala en el Centro de Justicia Penal Federal, Tijuana' },
      { year: '2019-2020', role: 'Oficial Administrativo en Juzgados Federales de Distrito en Materia de Amparo' },
      { year: '2019-2020', role: 'Actuario Judicial' },
      { year: '2020-Presente', role: 'Abogado Criminalista en ejercicio privado - Más de 200 casos manejados' }
    ],
    en: [
      { year: '2017-2018', role: 'Administrative Assistant at the State Criminal Justice Center of B.C.' },
      { year: '2018-2019', role: 'Court Officer and Hearing Room Assistant at the Federal Criminal Justice Center, Tijuana' },
      { year: '2019-2020', role: 'Administrative Officer at Federal District Courts for Amparo Cases' },
      { year: '2019-2020', role: 'Judicial Clerk' },
      { year: '2020-Present', role: 'Criminal Defense Attorney in private practice - Over 200 cases handled' }
    ]
  };

  const awards = {
    es: [
      'Finalista Nacional - II Concurso de Juicio Oral (California Western School of Law, 2016)',
      'Calificado entre los 6 mejores a nivel nacional en juicio oral',
      'Premio al Mejor Contrainterrogatorio',
      'Premio a la Mejor Formulación de Imputación',
      'Certificación en Argumentación Jurídica Práctica',
      'Examen de Aptitud para Actuario del Poder Judicial Federal (Promedio 95/100)'
    ],
    en: [
      'National Finalist - 2nd Oral Trial Competition (California Western School of Law, 2016)',
      'Ranked among the top 6 nationally in oral litigation',
      'Award for Best Cross-Examination',
      'Award for Best Charge Formulation',
      'Certification in Practical Legal Argumentation',
      'Federal Judicial Power Aptitude Exam (95/100 Average)'
    ]
  };

  const bio = {
    es: 'Maestro Morales es un abogado criminalista con una sólida formación académica binacional y más de 10 años de experiencia en el sistema judicial mexicano. Su trayectoria profesional incluye experiencia tanto en el fuero común como en el fuero federal, habiendo trabajado en el Centro de Justicia Penal del Estado de Baja California y en el Centro de Justicia Penal Federal en Tijuana, donde desempeñó diversos roles que le permitieron conocer a profundidad el sistema penal acusatorio mexicano. Con un equipo de 5 colaboradores especializados, Maestro Morales se distingue por su enfoque transparente y directo: no da falsas esperanzas, da resultados. Su compromiso es defender los derechos de sus clientes con profesionalismo, estrategia y dedicación absoluta.',
    en: 'Maestro Morales is a criminal defense attorney with solid binational academic training and over 10 years of experience in the Mexican judicial system. His professional trajectory includes experience in both common and federal jurisdiction, having worked at the Criminal Justice Center of the State of Baja California and at the Federal Criminal Justice Center in Tijuana, where he performed various roles that allowed him to deeply understand the Mexican accusatory criminal system. With a team of 5 specialized collaborators, Maestro Morales is distinguished by his transparent and direct approach: he doesn\'t give false hope, he delivers results. His commitment is to defend his clients\' rights with professionalism, strategy, and absolute dedication.'
  };

  const { language } = useLanguage();
  const currentEducation = language === 'es' ? education.es : education.en;
  const currentExperience = language === 'es' ? experience.es : experience.en;
  const currentAwards = language === 'es' ? awards.es : awards.en;
  const currentBio = language === 'es' ? bio.es : bio.en;

  return (
    <section id="perfil" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('Perfil Profesional', 'Professional Profile')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Main Profile Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Photo Column */}
          <div className="md:col-span-2">
            <div className="sticky top-8">
              <img
                src={profileImage}
                alt="Maestro Morales"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-primary">
                  Maestro Morales
                </h3>
                <p className="text-lg text-muted-foreground mt-2">
                  {t('Maestro Morales - Abogado Criminalista', 'Maestro Morales - Criminal Defense Attorney')}
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 space-y-12">
            {/* Bio */}
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                {currentBio}
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {t('Formación Académica', 'Academic Background')}
                </h3>
              </div>
              <div className="space-y-6">
                {currentEducation.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="font-semibold text-lg text-primary">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.years} • {edu.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {t('Experiencia Profesional Destacada', 'Professional Experience Highlights')}
                </h3>
              </div>
              <div className="space-y-4">
                {currentExperience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-accent mt-2" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{exp.year}</p>
                      <p className="text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {t('Reconocimientos y Certificaciones', 'Awards and Certifications')}
                </h3>
              </div>
              <div className="grid gap-3">
                {currentAwards.map((award, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-muted-foreground">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};