
import React from 'react';
import { Globe, Zap, Rocket, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: t('services.webApps.title'),
      description: t('services.webApps.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: t('services.prototypes.title'),
      description: t('services.prototypes.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: t('services.mvps.title'),
      description: t('services.mvps.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: t('services.training.title'),
      description: t('services.training.description'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">{t('services.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-8 py-3"
          >
            {t('services.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
