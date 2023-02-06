export interface Producto {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  rating?: object;
  description?: string;
}
