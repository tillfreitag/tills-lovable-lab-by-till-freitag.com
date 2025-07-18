
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface StructuredDataProps {
  projects?: Array<{
    name: string;
    description: string;
    url: string;
    image: string;
    dateCreated: string;
    technologies: string[];
  }>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ projects = [] }) => {
  const { language } = useLanguage();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Till Freitag",
    "jobTitle": "Software Developer",
    "url": "https://tillfreitag.dev",
    "sameAs": [
      "https://github.com/tillfreitag",
      "https://linkedin.com/in/tillfreitag"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "TypeScript",
      "JavaScript",
      "Frontend Development"
    ],
    "description": language === 'de' 
      ? "Softwareentwickler und Webentwickler mit Fokus auf moderne Webtechnologien"
      : "Software developer and web developer focused on modern web technologies"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": language === 'de' ? "Till Freitag - Portfolio" : "Till Freitag - Portfolio",
    "url": "https://tillfreitag.dev",
    "author": {
      "@type": "Person",
      "name": "Till Freitag"
    },
    "description": language === 'de'
      ? "Portfolio von Till Freitag - Softwareentwickler und Webentwickler"
      : "Portfolio of Till Freitag - Software Developer and Web Developer",
    "inLanguage": language === 'de' ? "de-DE" : "en-US"
  };

  const portfolioSchema = projects.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": language === 'de' ? "Meine Projekte" : "My Projects",
    "creator": {
      "@type": "Person",
      "name": "Till Freitag"
    },
    "hasPart": projects.map(project => ({
      "@type": "SoftwareApplication",
      "name": project.name,
      "description": project.description,
      "url": project.url,
      "image": project.image,
      "dateCreated": project.dateCreated,
      "author": {
        "@type": "Person",
        "name": "Till Freitag"
      },
      "programmingLanguage": project.technologies
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      {portfolioSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema)
          }}
        />
      )}
    </>
  );
};

export default StructuredData;
