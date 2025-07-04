
import React from 'react';
import { Heart, Star, Book, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6" id="kontakt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 rounded-full">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Monday.com Form - Now takes up 2 columns */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500" />
              {t('contact.form.title')}
            </h3>
            
            <div className="w-full">
              <iframe 
                src="https://forms.monday.com/forms/embed/a8ce15853bfc10ad2292cc6f234b5345?r=euc1" 
                width="100%" 
                height="500" 
                style={{ border: 0, boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)', borderRadius: '12px' }}
                title="Contact Form"
              />
            </div>
          </div>

          {/* Information Cards - Now in single column */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.inspiration.title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('contact.inspiration.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <Book className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.collaborate.title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('contact.collaborate.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <Heart className="w-8 h-8 text-purple-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.hello.title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('contact.hello.text')}
              </p>
            </div>

            {/* Social Links - Moved to bottom of sidebar */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500 mb-4">
                {t('contact.follow')}
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-sm font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
                  <span className="text-pink-600 text-sm font-bold">Ig</span>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-sm font-bold">Li</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
