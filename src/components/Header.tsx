
import React, { useState } from 'react';
import { Menu, X, Car, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'À Propos', href: '/apropos' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-platine shadow-sm">
      <div className="container mx-auto px-4">
        {/* Contact Bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-noir-profond border-b border-platine/50 bg-gradient-to-r from-bleu-royal to-bleu-royal-light hover:from-bleu-royal-dark hover:to-bleu-royal text-white px-8 py-3 text-lg">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-royal" />
              <span>+33 6 52 06 52 51</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-royal" />
              <span>contact@mlm-ci.com</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-royal to-gold-royal-light flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-cinzel text-2xl font-bold text-noir-profond">MLM</h1>
              <p className="text-xs text-gold-royal font-medium">LUXURY VEHICLES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter transition-colors duration-300 relative group ${
                  isActiveLink(item.href) 
                    ? 'text-gold-royal' 
                    : 'text-noir-profond hover:text-gold-royal'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-royal to-gold-royal-light transition-all duration-300 ${
                  isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-gold-royal to-gold-royal-light hover:from-gold-royal-dark hover:to-gold-royal text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover-scale">
                Demander un Devis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-noir-profond hover:text-gold-royal transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-platine shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-inter transition-colors duration-300 py-2 ${
                    isActiveLink(item.href) 
                      ? 'text-gold-royal' 
                      : 'text-noir-profond hover:text-gold-royal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-gold-royal to-gold-royal-light text-white font-medium py-3 rounded-full mt-4">
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
