
import React from 'react';
import { MapPin, Phone, Facebook, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black py-4 text-white shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="mailto:goldev.formation@gmail.com" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <Mail className="h-5 w-5 mr-2 text-white" />
            <span className="text-base">goldev.formation@gmail.com</span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-white" />
            <a 
              href="https://maps.google.com/?q=Bd. Mly Ali Cherif, Lote 24, Ha, massira 1, Sec. 1, Imm. 5, Mag. A5, 12020 Témara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Témara, Maroc
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-white" />
            <a 
              href="tel:+212666131414" 
              className="hover:text-gray-300 transition-colors"
            >
              +212 666 131414
            </a>
          </div>
          <div className="flex items-center space-x-3 ml-0 md:ml-4">
            <a 
              href="https://web.facebook.com/goldevofficiel/?_rdc=1&_rdr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/company/goldev/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
