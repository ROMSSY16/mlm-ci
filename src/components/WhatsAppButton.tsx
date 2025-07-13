
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "+33652065251"; // Remplacez par le vrai numéro
  const message = "Bonjour, je suis intéressé(e) par vos services de vente/location de véhicules.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale group flex items-center justify-center"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-75"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-noir-profond text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Contactez-nous sur WhatsApp
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-noir-profond rotate-45 transform -translate-y-1/2"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
