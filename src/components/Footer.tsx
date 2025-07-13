
import React from 'react';
import { Car, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  const quickLinks = [
    'Accueil', 'Vente', 'Location', 'Services', 'À Propos', 'Contact'
  ];

  const vehicleTypes = [
    'Berlines Premium', 'SUV de Luxe', 'Voitures Sportives', 'Véhicules Utilitaires', 'Motos & Scooters'
  ];

  return (
    <footer className="bg-gradient-to-br from-noir-profond to-bleu-royal-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-royal to-gold-royal-light flex items-center justify-center">
                <Car className="w-6 h-6 text-noir-profond" />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl font-bold">MLM</h3>
                <p className="text-xs text-gold-royal font-medium">LUXURY VEHICLES</p>
              </div>
            </div>
            
            <p className="font-inter text-platine leading-relaxed">
              Spécialiste de la vente et location de véhicules premium en Côte d'Ivoire et en Afrique. 
              Excellence, confiance et service client d'exception depuis plus de 15 ans.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-platine/10 hover:bg-gradient-to-r hover:from-gold-royal hover:to-gold-royal-light flex items-center justify-center transition-all duration-300 ${social.color} hover:text-noir-profond group`}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold-royal mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="font-inter text-platine hover:text-gold-royal transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gold-royal rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold-royal mb-6">Nos Véhicules</h4>
            <ul className="space-y-3">
              {vehicleTypes.map((type, index) => (
                <li key={index}>
                  <a 
                    href="#vente"
                    className="font-inter text-platine hover:text-gold-royal transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emeraude rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold-royal mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-royal mt-1 flex-shrink-0" />
                <div className="font-inter text-platine">
                  <p>Abidjan, Cocody</p>
                  <p>Côte d'Ivoire</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-royal flex-shrink-0" />
                <span className="font-inter text-platine">+225 XX XX XX XX</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-royal flex-shrink-0" />
                <span className="font-inter text-platine">contact@mlm-ci.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gold-royal/10 to-emeraude/10 rounded-lg border border-gold-royal/20">
              <h5 className="font-playfair font-semibold text-gold-royal mb-2">Newsletter</h5>
              <p className="font-inter text-sm text-platine mb-3">Restez informé de nos dernières offres</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-platine/30 rounded text-white placeholder-platine/60 text-sm focus:outline-none focus:border-gold-royal"
                />
                <button className="bg-gradient-to-r from-gold-royal to-gold-royal-light text-noir-profond px-4 py-2 rounded font-medium text-sm hover-scale">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-platine/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-platine text-sm">
            © 2024 MLM Luxury Vehicles. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-platine hover:text-gold-royal transition-colors">Mentions Légales</a>
            <a href="#" className="text-platine hover:text-gold-royal transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-platine hover:text-gold-royal transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
