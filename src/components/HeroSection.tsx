
import React from 'react';
import { Star, Zap, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const servicesSection = document.querySelector('section:nth-of-type(2)');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="absolute top-6 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 backdrop-blur-sm rounded-full shadow-sm border border-pink-200">
            <Zap className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            {t('hero.title')}
          </h1>
          
          <div className="relative mb-8">
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm border border-gray-100">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">{t('hero.features.experimental')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm border border-gray-100">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">{t('hero.features.inspiring')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm border border-gray-100">
              <Award className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">{t('hero.features.handcrafted')}</span>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-pink-200 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300"
          >
            <span className="text-xs font-medium text-pink-800 group-hover:text-pink-900">Mehr erfahren</span>
            <div className="w-5 h-5 text-pink-600 group-hover:text-pink-700 animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
