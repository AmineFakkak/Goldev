
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Nos <span className="text-gray-700">Formations</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Développez vos compétences professionnelles avec nos programmes de formation spécialisés
              </p>
            </div>

            <div className="mb-12">
              <Card className="bg-white shadow-lg border-0 text-black">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 mr-4 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
                        alt="Formation" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black">Notre Approche</h3>
                  </div>
                  <p className="mb-6 text-gray-600">
                    GOLDEV propose plusieurs formations dans différents domaines à des actifs 
                    désireux de développer leurs compétences pour évoluer dans leur emploi actuel 
                    ou pour s'engager dans une reconversion professionnelle. Elles visent l'acquisition 
                    de compétences professionnelles fortement demandées sur le marché du travail.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white shadow-lg border-0 text-black h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Marketing"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">MARKETING & DIGITAL MARKETING</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Fondamentaux du marketing digital</li>
                    <li>Stratégie de contenu</li>
                    <li>Social media marketing</li>
                    <li>Plan marketing</li>
                    <li>Stratégie marketing</li>
                    <li>Stratégie de marque</li>
                    <li>Boîte à outil du marketeur</li>
                    <li>Techniques de vente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 text-black h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                      alt="Entrepreneuriat"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">ENTREPRENEURIAT & ENTREPRENEURIAT DIGITAL</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Coaching entrepreneurial</li>
                    <li>Idée de projet de création</li>
                    <li>Business plan</li>
                    <li>Etudes stratégiques</li>
                    <li>Créer son entreprise sur le digital</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 text-black h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" 
                      alt="RH"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">RESSOURCES HUMAINES</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Techniques de recrutement</li>
                    <li>Ingénierie de formation</li>
                    <li>Gestion de paie</li>
                    <li>L'appréciation annuelle</li>
                    <li>La communication interne</li>
                    <li>La législation de travail</li>
                    <li>La boîte à outil du responsable RH</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 text-black h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Développement personnel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">DEVELOPPEMENT PERSONNEL</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Prise de parole en public</li>
                    <li>Pensée créative</li>
                    <li>Projet de carrière</li>
                    <li>Gestion de stress</li>
                    <li>Intelligence émotionnelle</li>
                    <li>Confiance en soi et prise de décision</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <div className="w-full h-64 md:h-96 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="p-8 max-w-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Formation Sur Mesure</h3>
                    <p>Nous proposons également des formations personnalisées pour répondre aux besoins spécifiques de votre entreprise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/contact" className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-300">
                S'inscrire à une formation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FormationPage;
