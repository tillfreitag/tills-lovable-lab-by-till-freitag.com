
import React from 'react';
import { Heart, Star, Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm" id="ueber-mich">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-100 rounded-full">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">{t('about.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text-Bereich */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {t('about.why.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.why.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-500" />
                {t('about.for.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.for.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-500" />
                {t('about.unique.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.unique.text')}
              </p>
            </div>
          </div>

          {/* Visueller Bereich */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60 blur-lg"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-purple-200 rounded-full opacity-50 blur-md"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('about.madeWith')}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('about.subtitle')}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/70 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-600">{t('about.stats.coffee')}</span>
                    <span className="text-sm font-semibold">{t('about.stats.coffeeCount')}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/70 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-600">{t('about.stats.lines')}</span>
                    <span className="text-sm font-semibold">{t('about.stats.linesCount')}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/70 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-600">{t('about.stats.hours')}</span>
                    <span className="text-sm font-semibold">{t('about.stats.hoursCount')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
