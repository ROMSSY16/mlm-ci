
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VehicleCard from '@/components/VehicleCard';
import { Search, Key, Calendar, Clock } from 'lucide-react';

const Rental = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [duration, setDuration] = useState('all');

  const brands = ['all', 'Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Peugeot', 'Hyundai', 'Nissan'];
  
  const vehiclesForRental = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
    },
    {
      id: '4',
      name: 'Mercedes-Benz Classe A',
      brand: 'Mercedes-Benz',
      year: 2023,
      price: 45000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
      location: 'Abidjan, Cocody',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '5',
      name: 'BMW Série 3',
      brand: 'BMW',
      year: 2022,
      price: 42000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      location: 'Abidjan, Plateau',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    },
    {
      id: '6',
      name: 'Audi A4',
      brand: 'Audi',
      year: 2023,
      price: 40000,
      type: 'rental' as const,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      location: 'Abidjan, Marcory',
      fuel: 'Essence',
      passengers: 5,
      isAvailable: true
    }
  ];

  const filteredVehicles = vehiclesForRental.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
    
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-bleu-royal to-bleu-royal-light py-16">
          <div className="container mx-auto px-4 text-center">
            <Key className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="font-cinzel text-5xl font-bold text-white mb-4">
              Véhicules en Location
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Louez le véhicule parfait pour tous vos déplacements
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-platine-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-12 h-12 text-bleu-royal mb-4" />
                <h3 className="font-semibold text-noir-profond mb-2">Location Flexible</h3>
                <p className="text-noir-profond/70">À la journée, semaine ou mois selon vos besoins</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 text-bleu-royal mb-4" />
                <h3 className="font-semibold text-noir-profond mb-2">Disponibilité 24h/7j</h3>
                <p className="text-noir-profond/70">Réservation et assistance à toute heure</p>
              </div>
              <div className="flex flex-col items-center">
                <Key className="w-12 h-12 text-bleu-royal mb-4" />
                <h3 className="font-semibold text-noir-profond mb-2">Véhicules Entretenus</h3>
                <p className="text-noir-profond/70">Flotte régulièrement contrôlée et assurée</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-64">
                <Search className="w-5 h-5 text-bleu-royal" />
                <input
                  type="text"
                  placeholder="Rechercher un véhicule..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-bleu-royal focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-bleu-royal"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'Toutes les marques' : brand}
                    </option>
                  ))}
                </select>
                
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-bleu-royal"
                >
                  <option value="all">Toute durée</option>
                  <option value="daily">Location journalière</option>
                  <option value="weekly">Location hebdomadaire</option>
                  <option value="monthly">Location mensuelle</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-noir-profond">
                {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} disponible{filteredVehicles.length > 1 ? 's' : ''}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
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

export default Rental;
