
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://tills-lovable-lab.lovable.app';

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

  // Organization schema for Till Freitag Consulting
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Till Freitag Consulting GmbH",
    "alternateName": "Till's Lovable Lab",
    "url": "https://till-freitag.com",
    "logo": "https://till-freitag.com/favicon.ico",
    "sameAs": [
      "https://www.linkedin.com/company/till-freitag/",
      "https://www.instagram.com/till_freitag_consulting/",
      "https://github.com/tillfreitag"
    ],
    "description": language === 'de'
      ? "Lovable Development Agency – Web Applications, Prototypen, MVPs und Training mit Lovable."
      : "Lovable Development Agency – Web Applications, Prototypes, MVPs and Training with Lovable.",
    "founder": {
      "@type": "Person",
      "name": "Till Freitag"
    },
    "knowsAbout": [
      "Lovable", "Web Development", "React", "TypeScript",
      "MVP Development", "Rapid Prototyping", "monday.com"
    ]
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Till's Lovable Lab",
    "url": SITE_URL,
    "publisher": {
      "@type": "Organization",
      "name": "Till Freitag Consulting GmbH"
    },
    "description": language === 'de'
      ? "Lovable Development Agency – Projekte, Services und Expertise von Till Freitag Consulting."
      : "Lovable Development Agency – Projects, Services and Expertise by Till Freitag Consulting.",
    "inLanguage": language === 'de' ? "de-DE" : "en-US"
  };

  // ProfessionalService schema for local/service SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Till Freitag Consulting – Lovable Development Agency",
    "url": SITE_URL,
    "provider": {
      "@type": "Organization",
      "name": "Till Freitag Consulting GmbH"
    },
    "serviceType": language === 'de'
      ? ["Web Applications", "Schnelle Prototypen", "MVP Entwicklung", "Training & Enablement"]
      : ["Web Applications", "Rapid Prototypes", "MVP Development", "Training & Enablement"],
    "areaServed": {
      "@type": "Place",
      "name": "DACH"
    }
  };

  // Portfolio/CollectionPage schema
  const portfolioSchema = projects.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": language === 'de' ? "Lovable Projekte" : "Lovable Projects",
    "url": `${SITE_URL}/#portfolio`,
    "creator": {
      "@type": "Organization",
      "name": "Till Freitag Consulting GmbH"
    },
    "hasPart": projects.map(project => ({
      "@type": "SoftwareApplication",
      "name": project.name,
      "description": project.description,
      "url": project.url,
      "image": project.image,
      "dateCreated": project.dateCreated,
      "author": {
        "@type": "Organization",
        "name": "Till Freitag Consulting GmbH"
      },
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web",
      "programmingLanguage": project.technologies
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {portfolioSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      )}
    </>
  );
};

export default StructuredData;
