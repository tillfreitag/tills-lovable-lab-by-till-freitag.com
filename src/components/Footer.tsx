import React from 'react';
import { Heart } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="mb-6">
          <Heart className="w-8 h-8 mx-auto mb-4 text-pink-200" />
          <h3 className="text-2xl font-bold mb-2">Till's Lovable Portfolio wächst kontinuierlich.</h3>
          <p className="text-purple-100">Made with Lovable &amp; Lots of Love.</p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-purple-200 text-sm">
            © 2025 • Ein Herzensprojekt • der Till Freitag Consulting GmbH •</span>
            Version 1.0 – und das ist erst der Anfang! ✨
          </p>
        </div>
        
        <div className="mt-4 text-xs text-purple-300">
          <p>
            "Die schönsten Dinge entstehen, wenn Technologie auf Menschlichkeit trifft." 💜
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;