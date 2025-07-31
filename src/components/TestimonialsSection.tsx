import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const successStory = {
    title: "0,Bier - BierFinder für Deutschland",
    description: "A comprehensive platform for comparing alcohol-free beers in Germany",
    url: "https://0komma.beer/",
    image: "/images/projects/0komma-beer.jpg",
    metrics: [
      { label: "150+ Beers", value: "150+", icon: Star },
      { label: "50+ Breweries", value: "50+", icon: TrendingUp },
      { label: "5000+ Reviews", value: "5000+", icon: Users }
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

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title') || 'Customer Success Stories'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle') || 'See how we\'ve helped businesses transform their ideas into successful digital products'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Showcase */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <Badge variant="secondary" className="mb-4">
                      Featured Success Story
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {successStory.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {successStory.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {successStory.metrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="flex justify-center mb-2">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {successStory.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full sm:w-auto">
                    <a href={successStory.url} target="_blank" rel="noopener noreferrer">
                      Visit Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Testimonial & Results */}
                <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Testimonial */}
                  <div className="mb-8">
                    <blockquote className="text-lg italic text-foreground mb-4">
                      "{successStory.testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">
                        {successStory.testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {successStory.testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Key Results:
                    </h4>
                    <ul className="space-y-3">
                      {successStory.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
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
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to create your own success story?
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              Start Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;