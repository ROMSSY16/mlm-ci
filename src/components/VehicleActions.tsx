
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Phone, MessageCircle } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';
import OrderForm from '@/components/OrderForm';
import ReservationForm from '@/components/ReservationForm';

interface VehicleActionsProps {
  vehicle: Vehicle;
}

const VehicleActions = ({ vehicle }: VehicleActionsProps) => {
  const isForSale = vehicle.type === 'sale' || vehicle.type === 'both';
  const isForRental = vehicle.type === 'rental' || vehicle.type === 'both';

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je suis intéressé par ${vehicle.name} (${vehicle.brand} ${vehicle.year}). Pouvez-vous me donner plus d'informations ?`;
    const phoneNumber = "+225XXXXXXXX";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-3">
      {isForSale && (
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full bg-gradient-to-r from-emeraude to-emeraude-light hover:from-emeraude-dark hover:to-emeraude text-white py-3"
              disabled={!vehicle.isAvailable}
            >
              Commander ce véhicule
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Commander {vehicle.name}</DialogTitle>
            </DialogHeader>
            <OrderForm vehicle={vehicle} />
          </DialogContent>
        </Dialog>
      )}
      
      {isForRental && (
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full bg-gradient-to-r from-bleu-royal to-bleu-royal-light hover:from-bleu-royal-dark hover:to-bleu-royal text-white py-3"
              disabled={!vehicle.isAvailable}
            >
              Réserver pour location
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Réserver {vehicle.name}</DialogTitle>
            </DialogHeader>
            <ReservationForm vehicle={vehicle} />
          </DialogContent>
        </Dialog>
      )}
      
      <Button
        variant="outline"
        onClick={handleWhatsAppContact}
        className="w-full border-gold-royal text-gold-royal hover:bg-gold-royal hover:text-white py-3"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Contacter par WhatsApp
      </Button>
      
      <Button
        variant="outline"
        className="w-full border-gray-300 py-3"
      >
        <Phone className="w-4 h-4 mr-2" />
        Appeler maintenant
      </Button>
    </div>
  );
};

export default VehicleActions;
