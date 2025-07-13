
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VehicleSection from '@/components/VehicleSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VehicleSection />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
