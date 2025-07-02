
import React, { useState } from 'react';
import { Heart, Star, Book, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würdest du die Nachricht verarbeiten
    console.log('Nachricht gesendet:', { email, message });
    // Für jetzt zeigen wir nur eine Bestätigung
    alert(t('contact.form.success'));
    setMessage('');
    setEmail('');
  };

  return (
    <section className="py-20 px-6" id="kontakt">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kontaktformular */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500" />
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Inspiration & Ermutigung */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.inspiration.title')}
              </h4>
              <p className="text-gray-600">
                {t('contact.inspiration.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <Book className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.collaborate.title')}
              </h4>
              <p className="text-gray-600">
                {t('contact.collaborate.text')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <Heart className="w-8 h-8 text-purple-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t('contact.hello.title')}
              </h4>
              <p className="text-gray-600">
                {t('contact.hello.text')}
              </p>
            </div>

            {/* Social Links Platzhalter */}
            <div className="text-center pt-6">
              <p className="text-sm text-gray-500 mb-4">
                {t('contact.follow')}
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 text-sm font-bold">Ig</span>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
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
