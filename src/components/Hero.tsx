
import React from 'react';
import { Star, Book, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Dekorative Elemente */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
        
        {/* Hauptinhalt */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Made with Lovable</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Mein digitales 
            <br />
            <span className="relative">
              Herzensmuseum
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300" viewBox="0 0 300 12" fill="none">
                <path d="M5 6 Q150 1 295 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eine liebevolle Sammlung meiner Lovable-Projekte – jedes ein kleines Experiment, 
            jedes mit seiner eigenen Geschichte. Willkommen in meiner Welt der digitalen Träume! ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Experimentell</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Book className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Inspirierend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Handgemacht</span>
            </div>
          </div>
          
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Projekte entdecken
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
