
import React from 'react';
import MinimalHeader from '@/components/MinimalHeader';
import ProjectGallery from '@/components/ProjectGallery';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LovableBadge from '@/components/LovableBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <MinimalHeader />
      <ProjectGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
      <LovableBadge />
    </div>
  );
};

export default Index;
