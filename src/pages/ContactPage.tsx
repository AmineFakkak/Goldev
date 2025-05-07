
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_590npp7',
      'template_66guixo',
      e.currentTarget, 
      'm-l3wnkJ0sD_OSF-I'
    )
    .then(() => {
      alert('Votre message a été envoyé. Nous vous contacterons bientôt!');
    })
    .catch((error) => {
      console.error('Erreur lors de l’envoi :', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });
  
    e.currentTarget.reset(); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Contactez-<span className="text-gray-600">nous</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous sommes là pour répondre à toutes vos questions
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
              <div className="md:w-1/2">
                <Card className="bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6 text-black">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                          <input 
                          name="from_name"
                            type="text" 
                            id="firstName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            required 
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Objet</label>
                        <input 
                         name="objet"
                          type="text" 
                          id="subject" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea 
                        name="message"
                          id="message" 
                          rows={5} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                          required 
                        ></textarea>
                      </div>
                      <div>
                        <button 
                          type="submit" 
                          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le message
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                <Card className="bg-black text-white shadow-lg border-0 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                          <p className="text-gray-300">
                            Bd. Mly Ali Cherif, Lote 24, Ha, massira 1, Sec. 1, Imm. 5, Mag. A5, 12020 Témara
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                          <p className="text-gray-300">+212 666 131414</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 mr-4 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Email</h3>
                          <p className="text-gray-300">goldev.formation@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold mb-4">Nos réseaux sociaux</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://web.facebook.com/goldevofficiel/?_rdc=1&_rdr" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/goldev/?viewAsMember=true" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
                      <div className="space-y-2">
                        <p>Lundi - Vendredi: 9h00 - 18h00</p>
                        <p>Samedi: 9h00 - 13h00</p>
                        <p>Dimanche: Fermé</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26599.384467673344!2d-6.9241117!3d33.9246456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c5bd9ca3819%3A0x76262aad77375d3!2sTamara%2C%20Morocco!5e0!3m2!1sen!2sus!4v1746605835428!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
