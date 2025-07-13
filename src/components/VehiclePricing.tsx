
import React from 'react';
import { Vehicle } from '@/types/vehicle';

interface VehiclePricingProps {
  vehicle: Vehicle;
}

const VehiclePricing = ({ vehicle }: VehiclePricingProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const isForSale = vehicle.type === 'sale' || vehicle.type === 'both';
  const isForRental = vehicle.type === 'rental' || vehicle.type === 'both';

  return (
    <div className="bg-gradient-to-r from-gold-royal/10 to-gold-royal-light/10 p-4 rounded-lg">
      <div className="space-y-2">
        {isForSale && (
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Prix de vente:</span>
            <span className="text-2xl font-bold text-gold-royal">
              {formatPrice(vehicle.price)} FCFA
            </span>
          </div>
        )}
        {isForRental && (
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Prix location/jour:</span>
            <span className="text-2xl font-bold text-bleu-royal">
              {formatPrice(vehicle.rentalPrice)} FCFA
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclePricing;
