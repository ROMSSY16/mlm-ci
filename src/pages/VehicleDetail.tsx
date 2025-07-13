
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VehicleImageGallery from '@/components/VehicleImageGallery';
import VehicleHeader from '@/components/VehicleHeader';
import VehicleSpecs from '@/components/VehicleSpecs';
import VehiclePricing from '@/components/VehiclePricing';
import VehicleActions from '@/components/VehicleActions';
import VehicleDetails from '@/components/VehicleDetails';
import { Vehicle } from '@/types/vehicle';

const VehicleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données d'exemple - en réalité, ces données viendraient d'une API
  const vehicle: Vehicle = {
    id: '1',
    name: 'Range Rover Evoque',
    brand: 'Land Rover',
    year: 2022,
    price: 45000000,
    rentalPrice: 65000,
    type: 'both',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    location: 'Abidjan, Cocody',
    fuel: 'Essence',
    passengers: 5,
    transmission: 'Automatique',
    engine: '2.0L Turbo',
    mileage: '25,000 km',
    features: [
      'Climatisation automatique',
      'GPS intégré',
      'Caméra de recul',
      'Sièges en cuir',
      'Vitres électriques',
      'Verrouillage centralisé',
      'Airbags multiples',
      'ABS et ESP'
    ],
    description: 'Magnifique Range Rover Evoque en excellent état, entretenu régulièrement avec historique complet. Véhicule non accidenté, première main. Idéal pour les déplacements en ville comme sur autoroute.',
    isAvailable: true,
    rating: 4.8,
    reviews: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-platine-light">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gold-royal hover:text-gold-royal-dark"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <VehicleImageGallery vehicle={vehicle} />

          {/* Informations principales */}
          <div className="space-y-6">
            <VehicleHeader vehicle={vehicle} />
            <VehiclePricing vehicle={vehicle} />
            <VehicleSpecs vehicle={vehicle} />
            <VehicleActions vehicle={vehicle} />
          </div>
        </div>

        <Separator className="my-8" />

        {/* Informations détaillées */}
        <VehicleDetails vehicle={vehicle} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VehicleDetail;
