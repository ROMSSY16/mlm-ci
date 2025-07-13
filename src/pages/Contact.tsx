
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi de formulaire à implémenter
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-royal to-gold-royal-light py-16">
          <div className="container mx-auto px-4 text-center">
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="font-cinzel text-5xl font-bold text-white mb-4">
              Contactez-Nous
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-cinzel text-3xl font-bold text-noir-profond mb-8">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold-royal mt-1" />
                    <div>
                      <h3 className="font-semibold text-noir-profond mb-1">Adresse</h3>
                      <p className="text-noir-profond/70">
                        Boulevard de la République<br />
                        Plateau, Abidjan<br />
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold-royal mt-1" />
                    <div>
                      <h3 className="font-semibold text-noir-profond mb-1">Téléphone</h3>
                      <p className="text-noir-profond/70">
                        +225 27 XX XX XX XX<br />
                        +225 07 XX XX XX XX
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold-royal mt-1" />
                    <div>
                      <h3 className="font-semibold text-noir-profond mb-1">Email</h3>
                      <p className="text-noir-profond/70">
                        contact@mlm-ci.com<br />
                        vente@mlm-ci.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold-royal mt-1" />
                    <div>
                      <h3 className="font-semibold text-noir-profond mb-1">Horaires</h3>
                      <p className="text-noir-profond/70">
                        Lundi - Vendredi: 8h00 - 18h00<br />
                        Samedi: 8h00 - 15h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <div className="bg-platine-light h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-noir-profond/70">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Carte interactive à intégrer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-cinzel text-3xl font-bold text-noir-profond mb-8">
                  Envoyez-nous un Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-noir-profond mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-noir-profond mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent"
                        placeholder="+225 XX XX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-noir-profond mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-noir-profond mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="vente">Achat d'un véhicule</option>
                      <option value="location">Location d'un véhicule</option>
                      <option value="service">Service après-vente</option>
                      <option value="financement">Financement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-noir-profond mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-platine rounded-lg focus:ring-2 focus:ring-gold-royal focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-royal to-gold-royal-light hover:from-gold-royal-dark hover:to-gold-royal text-white py-3 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
