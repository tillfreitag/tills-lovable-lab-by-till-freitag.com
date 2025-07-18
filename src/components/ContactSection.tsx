
import React from 'react';
import { Mail, Send, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
            <Mail className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Monday.com Form Embed */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('contact.form.title')}</h3>
            
            <div className="flex justify-center">
              <iframe 
                src="https://forms.monday.com/forms/embed/a8ce15853bfc10ad2292cc6f234b5345?r=euc1" 
                width="100%" 
                height="500" 
                style={{ 
                  border: 0,
                  borderRadius: '8px',
                  maxWidth: '650px'
                }}
                title="Monday.com Kontaktformular"
              />
            </div>
          </div>

          {/* Inspiration & Collaboration */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-pink-500" />
                {t('contact.inspiration.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.inspiration.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                {t('contact.collaborate.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.collaborate.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-500" />
                {t('contact.hello.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.hello.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
