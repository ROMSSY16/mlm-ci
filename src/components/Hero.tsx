
import React from 'react';
import { ArrowRight, Star, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    { icon: Star, text: 'Véhicules Premium' },
    { icon: Shield, text: 'Garantie Totale' },
    { icon: Award, text: 'Service d\'Excellence' },
  ];

  return (
    <section id="accueil" className="mb-4 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
     
      <div className="absolute inset-0 bg-gradient-to-br from-noir-profond via-noir-profond-light to-bleu-royal-dark"></div>
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold-royal rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-platine rotate-12 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
      <br /> <br /> <br /> <br /> <br /><br /><br /><br />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-gold-royal to-gold-royal-light text-noir-profond px-4 py-2 rounded-full text-sm font-medium">
                  Côte d'Ivoire & Afrique
                </span>
              </div>
              
              <h1 className="font-cinzel text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-gold">Véhicules</span>
                <br />
                <span className="text-white">d'Exception</span>
              </h1>
              
              <p className="font-playfair text-xl lg:text-2xl text-platine-light leading-relaxed">
                Découvrez notre collection exclusive de véhicules de luxe. 
                Vente et location premium en Côte d'Ivoire et dans toute l'Afrique.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold-royal to-gold-royal-light flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-noir-profond" />
                  </div>
                  <span className="font-inter text-platine">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-royal to-gold-royal-light hover:from-gold-royal-dark hover:to-gold-royal text-noir-profond font-semibold px-8 py-4 rounded-full transition-all duration-300 hover-scale group"
              >
                Voir nos Véhicules
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-platine text-platine hover:bg-platine hover:text-noir-profond font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Location Premium
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-platine/30">
              <div className="text-center">
                <div className="font-cinzel text-3xl font-bold text-gradient-gold">500+</div>
                <div className="font-inter text-sm text-platine">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="font-cinzel text-3xl font-bold text-gradient-gold">15+</div>
                <div className="font-inter text-sm text-platine">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="font-cinzel text-3xl font-bold text-gradient-gold">98%</div>
                <div className="font-inter text-sm text-platine">Satisfaction Client</div>
              </div>
            </div>
          </div>

          {/* Image/Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src="/lovable-uploads/c9e71a81-622e-47ab-9b54-aa44cc0893a1.png" 
                  alt="MLM Logo" 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-royal/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emeraude/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        <br /> <br /> <br /> <br />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-platine rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-royal rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
