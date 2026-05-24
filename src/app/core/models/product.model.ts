export interface Product {
  id: number;
  name: string;
  description: string;
  story: string;
  price: number;
  currency: string;
  availableSizes: string[];
  imageUrls: string[];
  material: string;
  weight: string;
  inStock: boolean;
  featured: boolean;
}
