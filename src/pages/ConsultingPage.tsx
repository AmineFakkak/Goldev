
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Consulting RH <span className="text-gray-700">& marketing</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des solutions stratégiques pour le développement de votre entreprise
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
              <div className="md:w-1/2">
                <Card className="bg-white shadow-lg border-0 text-black h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
                        alt="Expertise"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-black">Notre Expertise</h3>
                    <p className="mt-4 mb-6 text-gray-600">
                      Dans un monde en constante évolution, nous prenons le temps d'étudier les entreprises qui se démarquent. 
                      Nous examinons ensuite les stratégies possibles pour chacun de nos clients, 
                      grâce à des ressources et outils performants.
                    </p>
                    <p className="text-gray-600">
                      Nous intervenons dans les domaines d'expertise du marketing, du marketing digital, 
                      du commerce, des ressources humaines et de l'entrepreneuriat.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                <Card className="bg-white shadow-lg border-0 text-black h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                        alt="Mission"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-black">Notre Mission</h3>
                    <p className="mt-4 mb-6 text-gray-600">
                      Notre mission est de résoudre vos problématiques pour un meilleur développement.
                      Nous vous accompagnons dans la mise en place de stratégies efficaces et 
                      adaptées à votre secteur d'activité.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                      <li>Analyse approfondie de votre activité</li>
                      <li>Identification des opportunités de croissance</li>
                      <li>Développement de stratégies sur mesure</li>
                      <li>Accompagnement dans la mise en œuvre</li>
                      <li>Suivi et optimisation des résultats</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16">
              <div className="w-full h-64 md:h-96 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')] bg-cover bg-center rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="p-8 max-w-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Des Solutions Adaptées à Vos Besoins</h3>
                    <p>Notre équipe d'experts vous propose un accompagnement personnalisé pour répondre à vos objectifs spécifiques.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/contact" className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-300">
                Demander un conseil personnalisé
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultingPage;
