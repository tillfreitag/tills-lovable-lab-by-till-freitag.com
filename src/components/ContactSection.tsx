import React, { useState } from 'react';
import { Mail, Send, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const ContactSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message
      toast({
        title: "Success!",
        description: t('contact.form.success'),
      })

      // Reset form fields
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.form.title')}</h3>
            
            <div className="space-y-4">
              <div>
                <Input 
                  type="email" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">{t('contact.form.email')}</label>
              </div>
              
              <div>
                <Textarea
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-2">{t('contact.form.message')}</label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                t('contact.form.submit')
              )}
            </Button>
          </form>

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

            <div className="mt-6">
              <p className="text-sm text-gray-500">{t('contact.follow')}</p>
              <div className="flex gap-4 mt-2">
                <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Twitter
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
