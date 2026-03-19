import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/app/contexts/LanguageContext';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Profile } from '@/app/components/Profile';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { Testimonials } from '@/app/components/Testimonials';
import { PracticeAreas } from '@/app/components/PracticeAreas';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { WhatsAppButton } from '@/app/components/WhatsAppButton';
import { CookieBanner } from '@/app/components/CookieBanner';
import { useScrollDepth } from '@/app/hooks/useScrollDepth';

const SEOHead = () => {
  const { language } = useLanguage();

  useEffect(() => {
    if (language === 'es') {
      document.title = 'Maestro Morales - Abogado Criminalista en Tijuana | Primera Consulta Gratis';
      document.documentElement.lang = 'es';
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute(
        'content',
        'Abogado criminalista en Tijuana con 10 años de experiencia. Primera consulta GRATUITA. Defensa penal federal y estatal. WhatsApp: +52 686 280-0177'
      );
    } else {
      document.title = 'Maestro Morales - Criminal Defense Attorney in Tijuana | Free First Consultation';
      document.documentElement.lang = 'en';
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute(
        'content',
        'Criminal defense attorney in Tijuana with 10 years of experience. FREE first consultation. Federal and state criminal defense. WhatsApp: +52 686 280-0177'
      );
    }
  }, [language]);

  return null;
};

const AppContent = () => {
  useScrollDepth();
  
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <div id="perfil">
          <Profile />
        </div>
        <WhyChooseUs />
        <div id="servicios">
          <PracticeAreas />
        </div>
        <div id="testimonios">
          <Testimonials />
        </div>
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <WhatsAppButton variant="fixed" />
      
      {/* Cookie Consent */}
      <CookieBanner />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}