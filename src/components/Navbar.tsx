
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link to="/" className=" w-[170px] h-auto"><img src="/logo.png" alt="" /></Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <Link to="/" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Accueil</Link>
              <Link to="/formation" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Formation</Link>
              <Link to="/recruitment" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Recrutement</Link>
              <Link to="/consulting" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Conseil</Link>
              <Link to="/blog" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Blog</Link>
              <Link to="/contact" className="text-lg text-black hover:text-gray-600 font-medium transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex-1 hidden md:flex justify-end">
            <Link to="/contact" className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
              Nous contacter
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Accueil</Link>
              <Link to="/formation" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Formation</Link>
              <Link to="/recruitment" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Recrutement</Link>
              <Link to="/consulting" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Conseil</Link>
              <Link to="/blog" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-base text-black hover:text-gray-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 self-start">
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
