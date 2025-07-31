import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const successStory = {
    title: "0,Bier - BierFinder für Deutschland",
    description: "A comprehensive platform for comparing alcohol-free beers in Germany",
    url: "https://0komma.beer/",
    image: "/images/projects/0komma-beer.jpg",
    metrics: [
      { label: "150+ Beers", value: "150+", icon: Star, gradient: "from-yellow-500 to-orange-500" },
      { label: "50+ Breweries", value: "50+", icon: TrendingUp, gradient: "from-green-500 to-emerald-500" },
      { label: "5000+ Reviews", value: "5000+", icon: Users, gradient: "from-blue-500 to-cyan-500" }
    ],
    technologies: ["React", "Database", "Search", "Community Features"],
    testimonial: {
      text: "Till delivered exactly what we envisioned - a user-friendly platform that makes finding the perfect alcohol-free beer simple and enjoyable. The search functionality and community features have been game-changers for our users.",
      author: "0,Bier Team",
      role: "Product Owners"
    },
    results: [
      "Built comprehensive beer database with 150+ products",
      "Integrated advanced filtering and search capabilities", 
      "Created active community with 5000+ user reviews",
      "Delivered full platform from concept to launch"
    ]
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute left-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40 blur-lg"></div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">Customer Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t('testimonials.title') || 'Customer Success Stories'}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle') || 'See how we\'ve helped businesses transform their ideas into successful digital products'}
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Showcase */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                      <Star className="w-3 h-3 text-indigo-600" />
                      <span className="text-xs font-medium text-indigo-800">Featured Success Story</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {successStory.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {successStory.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {successStory.metrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className="text-center group">
                          <div className={`w-12 h-12 bg-gradient-to-r ${metric.gradient} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {successStory.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={successStory.url} target="_blank" rel="noopener noreferrer">
                      Visit Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Testimonial & Results */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Decorative quote mark */}
                  <div className="absolute top-6 left-6 text-6xl text-gray-300 font-serif">"</div>
                  
                  {/* Testimonial */}
                  <div className="mb-8 relative z-10">
                    <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                      {successStory.testimonial.text}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">0</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {successStory.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {successStory.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Key Results:
                    </h4>
                    <ul className="space-y-3">
                      {successStory.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;