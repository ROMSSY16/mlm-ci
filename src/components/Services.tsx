
import React from 'react';
import { Car, Key, Shield, Headphones, Wrench, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Vente de Véhicules Premium',
      description: 'Large gamme de véhicules neufs et d\'occasion rigoureusement sélectionnés pour leur qualité exceptionnelle.',
      color: 'from-gold-royal to-gold-royal-light'
    },
    {
      icon: Key,
      title: 'Location Longue Durée',
      description: 'Solutions de location flexible adaptées à vos besoins professionnels et personnels.',
      color: 'from-bleu-royal to-bleu-royal-light'
    },
    {
      icon: Shield,
      title: 'Garantie Étendue',
      description: 'Protection complète avec garantie constructeur et extensions disponibles.',
      color: 'from-emeraude to-emeraude-light'
    },
    {
      icon: Headphones,
      title: 'Service Client 24/7',
      description: 'Accompagnement personnalisé et support technique disponible en permanence.',
      color: 'from-gold-royal to-emeraude'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Réparation',
      description: 'Atelier spécialisé avec techniciens certifiés pour l\'entretien de votre véhicule.',
      color: 'from-bleu-royal to-emeraude'
    },
    {
      icon: CreditCard,
      title: 'Financement Flexible',
      description: 'Solutions de financement sur mesure avec nos partenaires bancaires.',
      color: 'from-emeraude to-bleu-royal'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-platine-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-noir-profond mb-6">
            Nos <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="font-playfair text-xl text-noir-profond/70 max-w-3xl mx-auto">
            Une gamme complète de services premium pour répondre à tous vos besoins automobiles 
            avec l'excellence qui nous caractérise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-platine/50"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-playfair text-xl font-semibold text-noir-profond mb-4 group-hover:text-gold-royal transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="font-inter text-noir-profond/70 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-royal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-noir-profond to-bleu-royal-dark rounded-2xl p-12 text-white">
            <h3 className="font-cinzel text-3xl font-bold mb-4">
              Besoin d'un Service Personnalisé ?
            </h3>
            <p className="font-playfair text-xl text-platine mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous accompagner 
              dans tous vos projets automobiles.
            </p>
            <button className="bg-gradient-to-r from-gold-royal to-gold-royal-light hover:from-gold-royal-dark hover:to-gold-royal text-noir-profond font-semibold px-8 py-4 rounded-full transition-all duration-300 hover-scale">
              Contactez nos Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
