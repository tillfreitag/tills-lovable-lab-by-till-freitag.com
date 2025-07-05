
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const MinimalHeader = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 px-6 border-b border-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {t('header.title')}
              </h1>
              <p className="text-sm text-gray-600">
                <span className="hidden sm:inline">{t('header.subtitle')}</span>
                <span className="sm:hidden">Lovable-Projekte mit Gefühl ✨</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>{t('header.status')}</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;
