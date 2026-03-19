import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { LanguageToggle } from '@/app/components/LanguageToggle';
import { Menu, X, Scale } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-primary leading-tight">
                Maestro Morales
              </h1>
              <p className="text-xs text-muted-foreground">
                {t('Abogado Criminalista', 'Criminal Defense Attorney')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('perfil')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('Perfil', 'Profile')}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('Servicios', 'Services')}
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('Testimonios', 'Testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('Contacto', 'Contact')}
            </button>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-secondary/20"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('perfil')}
                className="text-left px-4 py-2 hover:bg-secondary/20 rounded-md transition-colors"
              >
                {t('Perfil', 'Profile')}
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left px-4 py-2 hover:bg-secondary/20 rounded-md transition-colors"
              >
                {t('Servicios', 'Services')}
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-left px-4 py-2 hover:bg-secondary/20 rounded-md transition-colors"
              >
                {t('Testimonios', 'Testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left px-4 py-2 hover:bg-secondary/20 rounded-md transition-colors"
              >
                {t('Contacto', 'Contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
