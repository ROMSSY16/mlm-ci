
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';

interface VehicleHeaderProps {
  vehicle: Vehicle;
}

const VehicleHeader = ({ vehicle }: VehicleHeaderProps) => {
  return (
    <div>
      <h1 className="font-cinzel text-3xl font-bold text-noir-profond mb-2">
        {vehicle.name}
      </h1>
      <p className="text-xl text-gold-royal font-semibold mb-4">{vehicle.brand} - {vehicle.year}</p>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="font-medium">{vehicle.rating}</span>
          <span className="text-sm text-gray-600">({vehicle.reviews} avis)</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{vehicle.location}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleHeader;
