
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, Key } from 'lucide-react';
import VehicleCard from './VehicleCard';

const VehicleSection = () => {
  // Données d'exemple pour les véhicules en vente
  const vehiclesForSale = [
    {
      id: '1',
      name: 'Range Rover Evoque',
      brand: 'Land Rover',
      year: 2022,
      price: 45000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      location: 'Abidjan, Cocody',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '2',
      name: 'Mercedes-Benz C-Class',
      brand: 'Mercedes-Benz',
      year: 2023,
      price: 38000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
      location: 'Abidjan, Plateau',
      fuel: 'Hybride',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '3',
      name: 'BMW X5',
      brand: 'BMW',
      year: 2021,
      price: 42000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      location: 'Abidjan, Marcory',
      fuel: 'Essence',
      passengers: 7,
      isAvailable: false
    }
  ];

  // Données d'exemple pour les véhicules en location
  const vehiclesForRental = [
    {
      id: '4',
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2022,
      price: 35000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      location: 'Abidjan, Cocody',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '5',
      name: 'Peugeot 3008',
      brand: 'Peugeot',
      year: 2023,
      price: 28000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
      location: 'Abidjan, Yopougon',
      fuel: 'Diesel',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '6',
      name: 'Hyundai Tucson',
      brand: 'Hyundai',
      year: 2022,
      price: 32000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
      location: 'Abidjan, Plateau',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-platine-light">
      <div className="container mx-auto px-4">
        {/* Section Vente */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Car className="w-8 h-8 text-gold-royal" />
              <h2 className="font-cinzel text-4xl font-bold text-noir-profond">
                Véhicules en Vente
              </h2>
            </div>
            <p className="text-lg text-noir-profond/70 max-w-2xl mx-auto">
              Découvrez notre sélection premium de véhicules d'occasion certifiés, 
              inspectés par nos experts pour votre tranquillité d'esprit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vehiclesForSale.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-emeraude to-emeraude-light hover:from-emeraude-dark hover:to-emeraude text-white px-8 py-3 text-lg"
            >
              Voir tous les véhicules à vendre
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Section Location */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Key className="w-8 h-8 text-gold-royal" />
              <h2 className="font-cinzel text-4xl font-bold text-noir-profond">
                Véhicules en Location
              </h2>
            </div>
            <p className="text-lg text-noir-profond/70 max-w-2xl mx-auto">
              Louez le véhicule parfait pour vos déplacements professionnels ou personnels. 
              Flexibilité et qualité garanties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vehiclesForRental.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-bleu-royal to-bleu-royal-light hover:from-bleu-royal-dark hover:to-bleu-royal text-white px-8 py-3 text-lg"
            >
              Voir tous les véhicules en location
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
