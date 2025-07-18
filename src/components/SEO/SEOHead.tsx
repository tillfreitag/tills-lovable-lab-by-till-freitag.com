
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  url = 'https://tillfreitag.dev',
  type = 'website'
}) => {
  const { language, t } = useLanguage();

  const defaultTitle = language === 'de' 
    ? 'Till Freitag | Portfolio - Softwareentwickler & Web Developer'
    : 'Till Freitag | Portfolio - Software Developer & Web Developer';

  const defaultDescription = language === 'de'
    ? 'Portfolio von Till Freitag - Entdecken Sie meine Projekte als Softwareentwickler mit Fokus auf React, TypeScript und moderne Webtechnologien.'
    : 'Portfolio of Till Freitag - Discover my projects as a software developer focused on React, TypeScript and modern web technologies.';

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  React.useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', pageDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter meta tags
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    // Update language
    document.documentElement.setAttribute('lang', language === 'de' ? 'de' : 'en');

    // Add hreflang links
    let hreflangDe = document.querySelector('link[hreflang="de"]');
    let hreflangEn = document.querySelector('link[hreflang="en"]');
    let hreflangDefault = document.querySelector('link[hreflang="x-default"]');

    if (!hreflangDe) {
      hreflangDe = document.createElement('link');
      hreflangDe.setAttribute('rel', 'alternate');
      hreflangDe.setAttribute('hreflang', 'de');
      hreflangDe.setAttribute('href', `${url}?lang=de`);
      document.head.appendChild(hreflangDe);
    }

    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      hreflangEn.setAttribute('href', `${url}?lang=en`);
      document.head.appendChild(hreflangEn);
    }

    if (!hreflangDefault) {
      hreflangDefault = document.createElement('link');
      hreflangDefault.setAttribute('rel', 'alternate');
      hreflangDefault.setAttribute('hreflang', 'x-default');
      hreflangDefault.setAttribute('href', url);
      document.head.appendChild(hreflangDefault);
    }

  }, [pageTitle, pageDescription, image, url, type, language]);

  return null;
};

export default SEOHead;
