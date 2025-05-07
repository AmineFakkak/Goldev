
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-3xl font-bold text-white mb-4">GOLDEV</div>
            <p className="text-sm text-gray-300 mb-4">
              Votre partenaire expert en formation, recrutement et conseil RH pour développer votre entreprise et vos talents.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/goldevofficiel/?_rdc=1&_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/goldev/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><Link to="/formation" className="text-gray-300 hover:text-white transition-colors">Formation</Link></li>
              <li><Link to="/recruitment" className="text-gray-300 hover:text-white transition-colors">Recrutement</Link></li>
              <li><Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">Consulting RH</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Marketing RH</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Utiles</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-white" />
                <a 
                  href="https://maps.google.com/?q=Bd. Mly Ali Cherif, Lote 24, Ha, massira 1, Sec. 1, Imm. 5, Mag. A5, 12020 Témara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bd. Mly Ali Cherif, Lote 24, Ha, massira 1, Sec. 1, Imm. 5, Mag. A5, 12020 Témara
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white" />
                <a 
                  href="tel:+212666131414" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +212 666 131414
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-white" />
                <a 
                  href="mailto:goldev.formation@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  goldev.formation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GOLDEV. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
