
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';

const RecruitmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Services de <span className="text-gray-700">Recrutement</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous connectons les meilleurs talents avec les entreprises visionnaires
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
              <div className="md:w-1/2">
                <Card className="bg-white shadow-lg border-0 text-black h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                        alt="Recrutement entreprises"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-black">Notre Position sur le Marché</h3>
                    <p className="mt-4 mb-6 text-gray-600">
                      GOLDEV se positionne comme l'un des meilleurs de l'assistance au recrutement des entreprises ! 
                    </p>
                    <p className="text-gray-600">
                      Soyez certains que nous vous présenterons les meilleurs candidats, 
                      dans les meilleurs délais, avec le meilleur service !
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                <Card className="bg-white shadow-lg border-0 text-black h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                        alt="Recrutement candidats"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-black">Pour les Candidats</h3>
                    <p className="mt-4 mb-6 text-gray-600">
                      Vous êtes candidat à la recherche d'un emploi?
                    </p>
                    <p className="text-gray-600">
                      Chez GOLDEV, vous avez l'esprit tranquille, votre besoin est pris en charge par un 
                      consultant professionnel des métiers du recrutement et expert dans votre domaine d'activité.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16">
              <div className="w-full h-64 md:h-96 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="p-8 max-w-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Une Approche Personnalisée</h3>
                    <p>Notre processus de recrutement est conçu pour trouver les candidats qui correspondent non seulement aux compétences requises, mais aussi à la culture de votre entreprise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/contact" className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-300">
                Contacter notre équipe de recrutement
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecruitmentPage;
