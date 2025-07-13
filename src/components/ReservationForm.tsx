
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const reservationSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  startDate: z.date({ required_error: 'Date de début requise' }),
  endDate: z.date({ required_error: 'Date de fin requise' }),
  pickupLocation: z.string().min(5, 'Lieu de récupération requis'),
  driverLicense: z.string().min(5, 'Numéro de permis requis'),
  message: z.string().optional(),
}).refine((data) => data.endDate > data.startDate, {
  message: "La date de fin doit être après la date de début",
  path: ["endDate"],
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  vehicle: {
    id: string;
    name: string;
    brand: string;
    rentalPrice: number;
  };
}

const ReservationForm = ({ vehicle }: ReservationFormProps) => {
  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      pickupLocation: '',
      driverLicense: '',
      message: '',
    },
  });

  const startDate = form.watch('startDate');
  const endDate = form.watch('endDate');

  const calculateDays = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const days = calculateDays();
    return days * vehicle.rentalPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const onSubmit = (data: ReservationFormData) => {
    console.log('Données de réservation:', data);
    toast({
      title: "Réservation envoyée !",
      description: "Nous vous contacterons sous peu pour confirmer votre réservation.",
    });
    
    // Ici, vous pouvez envoyer les données à votre backend
  };

  return (
    <div className="space-y-6">
      {/* Récapitulatif */}
      <div className="bg-gradient-to-r from-bleu-royal/10 to-bleu-royal-light/10 p-4 rounded-lg">
        <h3 className="font-semibold text-noir-profond mb-2">Récapitulatif</h3>
        <p className="text-sm text-gray-700">{vehicle.brand} {vehicle.name}</p>
        <p className="text-sm text-gray-600">
          {formatPrice(vehicle.rentalPrice)} FCFA / jour
        </p>
        {calculateDays() > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600">{calculateDays()} jour(s)</p>
            <p className="text-lg font-bold text-bleu-royal">
              Total: {formatPrice(calculateTotal())} FCFA
            </p>
          </div>
        )}
      </div>

      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom *</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom *</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone *</FormLabel>
                <FormControl>
                  <Input placeholder="+225 XX XX XX XX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date de début *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: fr })
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date de fin *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: fr })
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || (startDate && date <= startDate)}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lieu de récupération *</FormLabel>
                <FormControl>
                  <Input placeholder="Adresse de récupération du véhicule" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="driverLicense"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de permis de conduire *</FormLabel>
                <FormControl>
                  <Input placeholder="Votre numéro de permis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (optionnel)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Demandes spéciales ou informations supplémentaires..." 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-bleu-royal to-bleu-royal-light hover:from-bleu-royal-dark hover:to-bleu-royal text-white"
          >
            Envoyer ma réservation
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReservationForm;
