
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Target, Award, Heart, Car, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Nous garantissons la transparence et la qualité dans chaque transaction.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Une sélection rigoureuse de véhicules premium pour nos clients exigeants.'
    },
    {
      icon: Heart,
      title: 'Service Client',
      description: 'Un accompagnement personnalisé tout au long de votre parcours.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Des solutions modernes pour simplifier l\'achat et la location de véhicules.'
    }
  ];

  const team = [
    {
      name: 'Kouadio Martin',
      role: 'Directeur Général',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description: '15 ans d\'expérience dans l\'automobile de luxe'
    },
    {
      name: 'DOSSO Fatime',
      role: 'Responsable RH',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      description: 'Experte en négociation et satisfaction client'
    },
    {
      name: 'Jean-Baptiste Koffi',
      role: 'Responsable Technique',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Mécanicien certifié, garant de la qualité de nos véhicules'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-royal to-gold-royal-light py-16">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="font-cinzel text-5xl font-bold text-white mb-4">
              À Propos de MLM
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Votre partenaire de confiance pour l'automobile de luxe en Côte d'Ivoire
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-cinzel text-3xl font-bold text-noir-profond mb-6">
                    Notre Histoire
                  </h2>
                  <div className="space-y-4 text-noir-profond/80">
                    <p>
                      Fondée en 2015, MLM (Luxury Vehicles) est née de la passion pour l'automobile 
                      et du désir d'offrir aux Ivoiriens l'accès aux véhicules de prestige les plus 
                      convoités au monde.
                    </p>
                    <p>
                      Depuis nos débuts, nous avons établi des partenariats solides avec les plus 
                      grandes marques automobiles et développé une expertise reconnue dans l'import, 
                      la vente et la location de véhicules haut de gamme.
                    </p>
                    <p>
                      Aujourd'hui, MLM est devenue une référence incontournable en Côte d'Ivoire, 
                      avec plus de 500 véhicules vendus et une clientèle fidèle qui nous fait confiance.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                    alt="Notre showroom"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gold-royal text-white p-6 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold">8+</div>
                      <div className="text-sm">Années d'Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-platine-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Target className="w-12 h-12 text-gold-royal mx-auto mb-4" />
              <h2 className="font-cinzel text-3xl font-bold text-noir-profond mb-4">
                Notre Mission
              </h2>
              <p className="text-lg text-noir-profond/70 max-w-3xl mx-auto">
                Démocratiser l'accès aux véhicules de luxe en Côte d'Ivoire et en Afrique, 
                tout en maintenant les plus hauts standards de qualité et de service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <value.icon className="w-12 h-12 text-gold-royal mx-auto mb-4" />
                  <h3 className="font-semibold text-noir-profond mb-2">{value.title}</h3>
                  <p className="text-sm text-noir-profond/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-emeraude to-emeraude-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-emeraude-light">Véhicules Vendus</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-emeraude-light">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-emeraude-light">Marques Partenaires</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emeraude-light">Support Client</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-3xl font-bold text-noir-profond mb-4">
                Notre Équipe
              </h2>
              <p className="text-lg text-noir-profond/70 max-w-2xl mx-auto">
                Des professionnels passionnés au service de votre satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-noir-profond mb-1">{member.name}</h3>
                  <p className="text-gold-royal font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-noir-profond/70">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
