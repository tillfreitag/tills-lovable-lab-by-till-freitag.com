
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://tills-lovable-lab.lovable.app';
const OG_IMAGE = `${SITE_URL}/images/projects/till-freitag-com.png`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image = OG_IMAGE,
  url = SITE_URL,
  type = 'website'
}) => {
  const { language } = useLanguage();

  const defaultTitle = language === 'de' 
    ? "Till's Lovable Lab | Lovable Development Agency – Till Freitag Consulting"
    : "Till's Lovable Lab | Lovable Development Agency – Till Freitag Consulting";

  const defaultDescription = language === 'de'
    ? 'Lovable Development Agency von Till Freitag Consulting – Web Applications, Prototypen, MVPs und Training mit Lovable. Digitale Träume, Lovable Realität.'
    : 'Lovable Development Agency by Till Freitag Consulting – Web Applications, Prototypes, MVPs and Training with Lovable. Digital Dreams, Lovable Reality.';

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  React.useEffect(() => {
    document.title = pageTitle;
    document.documentElement.setAttribute('lang', language);

    // Helper to update or create meta tags
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    // Basic meta
    setMeta('meta[name="description"]', 'content', pageDescription);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', pageDescription);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:locale"]', 'content', language === 'de' ? 'de_DE' : 'en_US');

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', pageDescription);
    setMeta('meta[name="twitter:image"]', 'content', image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = url;
    }

    // Hreflang links
    const ensureHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    ensureHreflang('de', `${SITE_URL}?lang=de`);
    ensureHreflang('en', `${SITE_URL}?lang=en`);
    ensureHreflang('x-default', SITE_URL);

  }, [pageTitle, pageDescription, image, url, type, language]);

  return null;
};

export default SEOHead;
