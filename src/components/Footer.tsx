
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="text-center text-white mb-8">
          <Heart className="w-8 h-8 mx-auto mb-4 text-pink-200" />
          <h3 className="text-2xl font-bold mb-2">{t('footer.title')}</h3>
          <p className="text-purple-100">{t('footer.subtitle')}</p>
        </div>

        {/* Social links */}
        <div className="text-center mb-8">
          <p className="text-sm text-purple-200 mb-3">{t('contact.follow')}</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://till-freitag.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-200 hover:text-white transition-colors duration-200 underline"
            >
              till-freitag.com
            </a>
            <a 
              href="https://www.linkedin.com/company/till-freitag/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-200 hover:text-white transition-colors duration-200 underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/till_freitag_consulting/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-200 hover:text-white transition-colors duration-200 underline"
            >
              Instagram
            </a>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-purple-200 text-sm mb-3">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-purple-300 mb-4">
            {t('footer.quote')}
          </p>
          
          {/* Legal links - external only */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-purple-300">
            <a 
              href="https://till-freitag.com/impressum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 underline"
            >
              {t('footer.imprint')}
            </a>
            <span>•</span>
            <a 
              href="https://till-freitag.com/datenschutz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 underline"
            >
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
