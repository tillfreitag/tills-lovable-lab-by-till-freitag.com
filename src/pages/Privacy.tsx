import React from 'react';
import MinimalHeader from '@/components/MinimalHeader';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
const Privacy = () => {
  const {
    t,
    language
  } = useLanguage();
  return <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <MinimalHeader />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t('legal.backToHome')}
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Data Protection at a Glance'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de' ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.' : 'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified.'}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? '2. Allgemeine Hinweise und Pflichtinformationen' : '2. General Information and Legal Obligations'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Datenschutz' : 'Data Protection'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de' ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.' : 'The owners of this website take the protection of your personal data very seriously. We handle your personal data confidentially and in accordance with the relevant data protection regulations and this privacy policy.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Hinweis zur verantwortlichen Stelle' : 'Contact Information'}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2">
                    {language === 'de' ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:' : 'The responsible party for data processing on this website is:'}
                  </p>
                  <div className="text-sm space-y-1 ml-4">
                    <p><strong>Till Freitag Consulting GmbH</strong></p>
                    <p>Friedrichstr. 155</p>
                    <p>10117 Berlin</p>
                    <p>Telefon: +49 (0) 123 456789</p>
                    <p>E-Mail: hi@till-freitag.com</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? '3. Datenerfassung auf dieser Website' : 'Data Collection on This Website'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Server-Log-Dateien' : 'Server Log Files'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de' ? 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:' : 'The provider of the website automatically collects and stores information in so-called server log files, which your browser sends to us. These include:'}
                  </p>
                  <ul className="text-sm ml-6 mt-2 space-y-1 list-disc">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    {language === 'de' ? 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.' : 'The collection of these data is not combined with other data sources. The collection of these data is based on Art. 6 para. 1 lit. f of the DSGVO.'}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? '4. Ihre Rechte' : 'Your Rights'}
              </h2>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  {language === 'de' ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.' : 'You have the right to obtain free information about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data.'}
                </p>
                
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Kontakt' : 'Contact'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de' ? 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:' : 'If you have questions about data protection, please write us an email or contact the responsible person for data protection in our organization:'}
                  </p>
                  <p className="text-sm mt-2"><strong>E-Mail:</strong> datenschutz@till-freitag.com</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? '5. Hosting' : 'Hosting'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Externes Hosting' : 'External Hosting'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de' ? 'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.' : 'This website is hosted by an external service provider (host). The personal data collected on this website is stored on the servers of the host. This includes IP addresses, contact requests, meta and communication data, contract data, contact data, names, website accesses, and other data generated by a website.'}
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                {language === 'de' ? 'Stand dieser Datenschutzerklärung: Januar 2025' : 'Last updated: January 2025'}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Privacy;