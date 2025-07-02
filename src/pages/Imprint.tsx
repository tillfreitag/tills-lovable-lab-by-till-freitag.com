import React from 'react';
import MinimalHeader from '@/components/MinimalHeader';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Imprint = () => {
  const { t, language } = useLanguage();
  
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
            {t('legal.backToHome')}
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'de' ? 'Impressum' : 'Legal Notice'}
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
              </h2>
              <div className="space-y-2">
                <p><strong>Till Freitag Consulting GmbH</strong></p>
                <p>{language === 'de' ? 'Musterstraße 123' : 'Sample Street 123'}</p>
                <p>{language === 'de' ? '12345 Musterstadt' : '12345 Sample City'}</p>
                <p>{language === 'de' ? 'Deutschland' : 'Germany'}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </h2>
              <div className="space-y-2">
                <p><strong>{language === 'de' ? 'Telefon:' : 'Phone:'}</strong> +49 (0) 123 456789</p>
                <p><strong>E-Mail:</strong> info@tillfreitag-consulting.de</p>
              </div>
            </section>

            {language === 'de' ? (
              <>
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Registereintrag</h2>
                  <div className="space-y-2">
                    <p><strong>Registergericht:</strong> Amtsgericht Musterstadt</p>
                    <p><strong>Registernummer:</strong> HRB 12345</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Umsatzsteuer-ID</h2>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p><strong>DE123456789</strong></p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <div className="space-y-2">
                    <p><strong>Till Freitag</strong></p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Commercial Register</h2>
                  <div className="space-y-2">
                    <p><strong>Register Court:</strong> District Court Sample City</p>
                    <p><strong>Register Number:</strong> HRB 12345</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">VAT ID</h2>
                  <p>Value added tax identification number according to § 27 a of the German VAT Act:</p>
                  <p><strong>DE123456789</strong></p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Responsible for Content</h2>
                  <div className="space-y-2">
                    <p><strong>Till Freitag</strong></p>
                    <p>Sample Street 123</p>
                    <p>12345 Sample City</p>
                  </div>
                </section>
              </>
            )}

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Haftungsausschluss</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                  <p className="text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Haftung für Links</h3>
                  <p className="text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Urheberrecht</h3>
                  <p className="text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Imprint;
