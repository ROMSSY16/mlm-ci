
import React from 'react';
import { Calendar, Fuel, Users, Cog } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

const VehicleSpecs = ({ vehicle }: VehicleSpecsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
        <Calendar className="w-5 h-5 text-gold-royal" />
        <div>
          <p className="text-sm text-gray-600">Année</p>
          <p className="font-semibold">{vehicle.year}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
        <Fuel className="w-5 h-5 text-gold-royal" />
        <div>
          <p className="text-sm text-gray-600">Carburant</p>
          <p className="font-semibold">{vehicle.fuel}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
        <Users className="w-5 h-5 text-gold-royal" />
        <div>
          <p className="text-sm text-gray-600">Places</p>
          <p className="font-semibold">{vehicle.passengers}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
        <Cog className="w-5 h-5 text-gold-royal" />
        <div>
          <p className="text-sm text-gray-600">Transmission</p>
          <p className="font-semibold">{vehicle.transmission}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecs;
