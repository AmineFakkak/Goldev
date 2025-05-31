
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Formation",
    description: "Des formations professionnelles sur mesure pour développer les compétences de vos équipes et répondre aux défis actuels du marché.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    path: "/formation"
  },
  {
    id: 2,
    title: "Recrutement",
    description: "Une expertise pointue pour vous aider à identifier et attirer les meilleurs talents adaptés aux besoins spécifiques de votre entreprise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    path: "/recruitment"
  },
  {
    id: 3,
    title: "Consulting RH & marketing",
    description: "Un accompagnement stratégique pour optimiser vos processus RH et valoriser votre marque employeur sur le marché.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    path: "/consulting"
  }
];

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="section bg-goldev-dark text-white">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 reveal-on-scroll"
      >
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Nos services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez comment GOLDEV peut vous aider à atteindre vos objectifs professionnels avec nos services spécialisés et personnalisés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={`reveal-on-scroll ${index === 0 ? 'animate-fade-in-left' : index === 2 ? 'animate-fade-in-right' : 'animate-fade-in'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Link to={service.path} className="block h-full">
                <ServiceCard service={service} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
