
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/80 rounded-full p-1 shadow-sm">
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'de'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
            : 'text-gray-600 hover:bg-white hover:text-gray-800'
        }`}
        aria-label="Switch to German"
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
            : 'text-gray-600 hover:bg-white hover:text-gray-800'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
