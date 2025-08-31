export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  ourPrice: number;
  discount: number;
  primaryImageUrl: string;
  imageUrls: string[];
  categoryName: string;
  subcategoryName: string;
}