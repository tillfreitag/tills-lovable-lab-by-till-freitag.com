
import React from 'react';
import { Star, Book, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Dekorative Elemente */}
        <div className="absolute top-6 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
        
        {/* Hauptinhalt */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Made with Lovable</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Mein digitales 
            <br />
            <span className="relative">
              Herzensmuseum
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300" viewBox="0 0 300 12" fill="none">
                <path d="M5 6 Q150 1 295 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Eine liebevolle Sammlung meiner Lovable-Projekte – jedes ein kleines Experiment voller Herzblut ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Experimentell</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow-sm">
              <Book className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Inspirierend</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Handgemacht</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
