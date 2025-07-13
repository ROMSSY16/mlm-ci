
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VehicleCard from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Car } from 'lucide-react';

const Sale = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const brands = ['all', 'Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Land Rover', 'Peugeot', 'Hyundai', 'Nissan'];
  
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
      isAvailable: true
    },
    {
      id: '4',
      name: 'Audi Q7',
      brand: 'Audi',
      year: 2022,
      price: 48000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
      location: 'Abidjan, Cocody',
      fuel: 'Diesel',
      passengers: 7,
      isAvailable: true
    },
    {
      id: '5',
      name: 'Toyota Land Cruiser',
      brand: 'Toyota',
      year: 2021,
      price: 35000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      location: 'Abidjan, Yopougon',
      fuel: 'Essence',
      passengers: 8,
      isAvailable: true
    },
    {
      id: '6',
      name: 'Peugeot 508',
      brand: 'Peugeot',
      year: 2023,
      price: 25000000,
      type: 'sale' as const,
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
      location: 'Abidjan, Plateau',
      fuel: 'Hybride',
      passengers: 5,
      isAvailable: true
    }
  ];

  const filteredVehicles = vehiclesForSale.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = vehicle.price;
      switch (priceRange) {
        case 'under-30M':
          matchesPrice = price < 30000000;
          break;
        case '30M-40M':
          matchesPrice = price >= 30000000 && price < 40000000;
          break;
        case 'over-40M':
          matchesPrice = price >= 40000000;
          break;
      }
    }
    
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-royal to-gold-royal-light py-16">
          <div className="container mx-auto px-4 text-center">
            <Car className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="font-cinzel text-5xl font-bold text-white mb-4">
              Véhicules en Vente
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez notre collection exclusive de véhicules premium certifiés
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-platine-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-64">
                <Search className="w-5 h-5 text-gold-royal" />
                <input
                  type="text"
                  placeholder="Rechercher un véhicule..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'Toutes les marques' : brand}
                    </option>
                  ))}
                </select>
                
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal"
                >
                  <option value="all">Tous les prix</option>
                  <option value="under-30M">Moins de 30M FCFA</option>
                  <option value="30M-40M">30M - 40M FCFA</option>
                  <option value="over-40M">Plus de 40M FCFA</option>
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
            
            {filteredVehicles.length === 0 && (
              <div className="text-center py-16">
                <Car className="w-16 h-16 text-platine mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-noir-profond mb-2">
                  Aucun véhicule trouvé
                </h3>
                <p className="text-noir-profond/70">
                  Modifiez vos critères de recherche pour voir plus de résultats
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sale;
