
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="mb-6">
          <Heart className="w-8 h-8 mx-auto mb-4 text-pink-200" />
          <h3 className="text-2xl font-bold mb-2">Till's Lovable Portfolio wächst kontinuierlich.</h3>
          <p className="text-purple-100">Made with Lovable &amp; Lots of Love.</p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-purple-200 text-sm">
            © 2025 • Ein Herzensprojekt • der Till Freitag Consulting GmbH •
            Version 1.0 – und das ist erst der Anfang! ✨
          </p>
        </div>
        
        <div className="mt-4 text-xs text-purple-300">
          <p>
            "Die schönsten Dinge entstehen, wenn Technologie auf Menschlichkeit trifft." 💜
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-purple-200">
            <Link 
              to="/impressum" 
              className="hover:text-white transition-colors duration-200 underline"
            >
              Impressum
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link 
              to="/datenschutz" 
              className="hover:text-white transition-colors duration-200 underline"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
