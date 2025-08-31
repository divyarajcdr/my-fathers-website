"use client";

import { useState, useCallback, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { PremiumNavigationHeader } from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductGallery from '@/components/ProductGallery';
import { AboutSection } from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, clearIndexedDbPersistence } from 'firebase/firestore';

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

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  // NEW: State to hold all category names
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await clearIndexedDbPersistence(db);

        const categoriesQuery = query(collection(db, "categories"));
        const subcategoriesQuery = query(collection(db, "subcategories"));
        
        const [categorySnapshot, subcategorySnapshot] = await Promise.all([
          getDocs(categoriesQuery),
          getDocs(subcategoriesQuery)
        ]);

        const categoriesMap = new Map(categorySnapshot.docs.map(doc => [doc.id, doc.data().name]));
        const subcategoriesMap = new Map(subcategorySnapshot.docs.map(doc => [doc.id, doc.data().name]));

        // NEW: Save the full list of category names
        setAllCategories(Array.from(categoriesMap.values()));

        const productsQuery = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const productSnapshot = await getDocs(productsQuery);
        
        const fetchedProducts = productSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            description: data.description,
            originalPrice: data.originalPrice,
            ourPrice: data.ourPrice,
            discount: data.discount,
            primaryImageUrl: data.primaryImageUrl,
            imageUrls: data.imageUrls,
            categoryName: categoriesMap.get(data.categoryId) || 'Uncategorized',
            subcategoryName: subcategoriesMap.get(data.subcategoryId) || 'Uncategorized',
          };
        });
        
        setProducts(fetchedProducts);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <main className="min-h-screen diamond-background">
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={handleLoadingComplete}
          minLoadingDuration={2000}
        />
      )}
      
      {!isLoading && (
        <div className="w-full">
          <PremiumNavigationHeader />
          <section id="home"><HeroSection /></section>
          {/* NEW: Pass allCategories to the gallery */}
          <section id="products"><ProductGallery products={products} allCategories={allCategories} /></section>
          <section id="about"><AboutSection /></section>
          <section id="contact"><ContactSection /></section>
        </div>
      )}
    </main>
  );
}