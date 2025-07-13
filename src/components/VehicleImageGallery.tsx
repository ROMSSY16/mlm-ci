
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/types/vehicle';

interface VehicleImageGalleryProps {
  vehicle: Vehicle;
}

const VehicleImageGallery = ({ vehicle }: VehicleImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          src={vehicle.images[selectedImage]}
          alt={vehicle.name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-gold-royal text-white">
            {vehicle.type === 'sale' ? 'À Vendre' : vehicle.type === 'rental' ? 'Location' : 'Vente & Location'}
          </Badge>
        </div>
        {!vehicle.isAvailable && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive">Indisponible</Badge>
          </div>
        )}
      </div>
      
      {/* Miniatures */}
      <div className="grid grid-cols-4 gap-2">
        {vehicle.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative overflow-hidden rounded-md border-2 transition-all ${
              selectedImage === index ? 'border-gold-royal' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${vehicle.name} ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleImageGallery;
