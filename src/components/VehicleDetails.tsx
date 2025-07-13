
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';

interface VehicleDetailsProps {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle className="font-playfair text-xl text-noir-profond">
            Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
          
          <div className="mt-6 space-y-2">
            <h4 className="font-semibold text-noir-profond">Détails techniques:</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Moteur:</span>
                <span className="ml-2 font-medium">{vehicle.engine}</span>
              </div>
              <div>
                <span className="text-gray-600">Kilométrage:</span>
                <span className="ml-2 font-medium">{vehicle.mileage}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Équipements */}
      <Card>
        <CardHeader>
          <CardTitle className="font-playfair text-xl text-noir-profond flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold-royal" />
            Équipements inclus
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-royal rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleDetails;
