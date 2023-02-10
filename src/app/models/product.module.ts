export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Producto {
  id: number;
  title: string;
  price: number;
  category: Category;
  images: string[];
  description: string;
  quantity: number;
}
