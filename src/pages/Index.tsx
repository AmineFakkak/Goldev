
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  
  const blogPosts = [
    {
      id: 1,
      title: "Top des 'SOFT SKILLS' en entreprise",
      description: "Découvrez quelles sont les compétences comportementales les plus recherchées...",
      date: "5 janvier 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Stratégies de recrutement innovantes",
      description: "Comment attirer et retenir les meilleurs talents dans un marché compétitif...",
      date: "10 janvier 2023",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "L'importance de la formation continue",
      description: "Pourquoi investir dans la formation de vos équipes est essentiel pour...",
      date: "15 janvier 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min"
    }
  ];
  
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        
        {/* Blog Section with Carousel */}
        <section id="blog" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="mb-4">Notre Blog</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez nos derniers articles et conseils pour développer votre entreprise et vos talents.
              </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto reveal-on-scroll">
              <CarouselContent>
                {blogPosts.map((item) => (
                  <CarouselItem key={item.id}>
                    <Card className="bg-white rounded-lg shadow-lg overflow-hidden card-hover-effect">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 h-64 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="md:w-1/2 p-6">
                          <div className="text-sm text-gray-500 mb-2">
                            {item.date} • {item.readTime} de lecture
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-goldev-dark">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {item.description}
                          </p>
                          <Link to="/blog">
                          <button className="text-goldev-primary font-medium hover:underline flex items-center">
                            Lire l'article
                            <ArrowRight className="h-5 w-5 ml-1" />
                          </button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="text-center mt-12">

                            <Link to="/blog">
  <button className="btn-primary">Voir tous les articles</button>
</Link>            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section id="contact" className="py-24 bg-gradient-to-r from-goldev-primary to-goldev-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-white">Prêt à développer votre entreprise ?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation, recrutement ou conseil RH.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 text-goldev-primary font-medium py-3 px-8 rounded-md transition-all duration-300">
              Contactez-Nous
              </button>
              </Link>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
