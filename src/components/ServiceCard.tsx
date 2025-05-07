
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    path: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-2 border-t-black overflow-hidden">
      <div className="w-full">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover object-center" 
        />
      </div>
      <CardHeader className="pb-0">
        <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={service.path} className="text-black font-medium hover:underline flex items-center group">
          En savoir plus
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
