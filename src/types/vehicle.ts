
export type VehicleType = 'sale' | 'rental' | 'both';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  rentalPrice: number;
  type: VehicleType;
  images: string[];
  location: string;
  fuel: string;
  passengers: number;
  transmission: string;
  engine: string;
  mileage: string;
  features: string[];
  description: string;
  isAvailable: boolean;
  rating: number;
  reviews: number;
}
