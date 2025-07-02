
import React from 'react';
import MinimalHeader from '@/components/MinimalHeader';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <MinimalHeader />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
                  <p className="text-sm leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Datenschutz</h3>
                  <p className="text-sm leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                    dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-sm leading-relaxed mb-2">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="text-sm space-y-1 ml-4">
                    <p><strong>Till Freitag Consulting GmbH</strong></p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Telefon: +49 (0) 123 456789</p>
                    <p>E-Mail: info@tillfreitag-consulting.de</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Datenerfassung auf dieser Website</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
                  <p className="text-sm leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
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
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Ihre Rechte</h2>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen.
                </p>
                
                <div>
                  <h3 className="font-semibold mb-2">Kontakt</h3>
                  <p className="text-sm leading-relaxed">
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich 
                    direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
                  </p>
                  <p className="text-sm mt-2"><strong>E-Mail:</strong> datenschutz@tillfreitag-consulting.de</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Hosting</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Externes Hosting</h3>
                  <p className="text-sm leading-relaxed">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                    die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                    Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Stand dieser Datenschutzerklärung: Januar 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
