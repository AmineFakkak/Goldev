
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogPost from './BlogPost';

interface BlogData {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogData[] = [
  {
    id: 1,
    title: "Top des 'SOFT SKILLS' qu'il faut avoir aujourd'hui en entreprise",
    excerpt: "La chose la plus importante aujourd'hui et surtout en 2021 sont les compétences comportementales... également appelées 'soft skills', ce...",
    date: "6 déc. 2021",
    readTime: "3 min de lecture",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Les tendances en recrutement pour 2023",
    excerpt: "Découvrez les nouvelles stratégies de recrutement qui façonnent le marché du travail cette année. Les méthodes innovantes qui permettent d'attirer les meilleurs talents et de créer une équipe performante.",
    date: "15 jan. 2023",
    readTime: "4 min de lecture",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Comment optimiser votre parcours de formation professionnelle",
    excerpt: "Un guide complet pour maximiser l'impact de vos formations et développer vos compétences clés...",
    date: "22 mar. 2023",
    readTime: "5 min de lecture",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === blogPosts.length - 1 ? 0 : current + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? blogPosts.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === blogPosts.length - 1 ? 0 : current + 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-goldev-dark to-goldev-dark/80 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Découvrez GOLDEV - <span className="text-white">L'allié de votre développement</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            GOLDEV accompagne votre entreprise dans son développement avec des solutions personnalisées en formation, recrutement et conseil RH.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">Découvrir nos services</button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-goldev-primary font-medium py-2 px-6 rounded-md transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </div>

        <div className="carousel-container max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="carousel h-[450px]">
            <button 
              className="carousel-control carousel-control-prev"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div 
              className="carousel-inner"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div className="carousel-item" key={post.id}>
                  <BlogPost post={post} />
                </div>
              ))}
            </div>
            
            <button 
              className="carousel-control carousel-control-next"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="carousel-indicators">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => goToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
