
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Fuel, Users, MessageCircle } from 'lucide-react';

interface VehicleCardProps {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  type: 'sale' | 'rental';
  image: string;
  location: string;
  fuel: string;
  passengers: number;
  isAvailable: boolean;
}

const VehicleCard = ({ vehicle }: { vehicle: VehicleCardProps }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Bonjour, je suis intéressé par ${vehicle.name} (${vehicle.brand} ${vehicle.year}). Pouvez-vous me donner plus d'informations ?`;
    const phoneNumber = "+225XXXXXXXX";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Link to={`/vehicule/${vehicle.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 border-platine/20 bg-white h-full">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              vehicle.type === 'sale' 
                ? 'bg-emeraude text-white' 
                : 'bg-bleu-royal text-white'
            }`}>
              {vehicle.type === 'sale' ? 'À Vendre' : 'Location'}
            </span>
          </div>
          {!vehicle.isAvailable && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                Indisponible
              </span>
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <h3 className="font-playfair text-lg font-semibold text-noir-profond">
              {vehicle.name}
            </h3>
            <p className="text-sm text-gold-royal font-medium">{vehicle.brand}</p>
          </div>
          
          <div className="space-y-2 text-sm text-noir-profond/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-royal" />
              <span>{vehicle.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gold-royal" />
                <span>{vehicle.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Fuel className="w-4 h-4 text-gold-royal" />
                <span>{vehicle.fuel}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gold-royal" />
                <span>{vehicle.passengers}</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gold-royal">
              {formatPrice(vehicle.price)} FCFA
              {vehicle.type === 'rental' && <span className="text-sm font-normal">/jour</span>}
            </p>
          </div>
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-gradient-to-r from-gold-royal to-gold-royal-light hover:from-gold-royal-dark hover:to-gold-royal text-white"
            disabled={!vehicle.isAvailable}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacter
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VehicleCard;
