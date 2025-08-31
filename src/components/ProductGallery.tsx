"use client";

import { useState, useMemo, useEffect } from 'react';
import { ArrowRight, Phone, Gem, X, Search, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Product } from '@/app/page';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ProductGallery({ products, allCategories }: { products: Product[]; allCategories: string[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalImage, setModalImage] = useState('');

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalImage(product.primaryImageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const mainCategories = useMemo(() => ['All', ...allCategories], [allCategories]);
  
  const subCategories = useMemo(() => {
    if (selectedCategory === 'All') return ['All'];
    return ['All', ...Array.from(new Set(products.filter(p => p.categoryName === selectedCategory).map(p => p.subcategoryName)))];
  }, [products, selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const searchMatch = !searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory === 'All' || product.categoryName === selectedCategory;
      const subCategoryMatch = selectedSubCategory === 'All' || product.subcategoryName === selectedSubCategory;
      return searchMatch && categoryMatch && subCategoryMatch;
    });
  }, [products, searchTerm, selectedCategory, selectedSubCategory]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory('All');
  };

  return (
    <>
      <section className="py-24 premium-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Header and Filters Section */}
            <div className="text-center mb-16">
                <div className="max-w-4xl mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-xl premium-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="search-input" className="block text-left text-sm font-medium text-slate-700 mb-2">Search Products</label>
                            <input id="search-input" type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="main-category-select" className="block text-left text-sm font-medium text-slate-700 mb-2">Main Category</label>
                            <select id="main-category-select" value={selectedCategory} onChange={handleCategoryChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:outline-none">
                                {mainCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sub-category-select" className="block text-left text-sm font-medium text-slate-700 mb-2">Sub-Category</label>
                            <select id="sub-category-select" value={selectedSubCategory} onChange={(e) => setSelectedSubCategory(e.target.value)} className={`w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 focus:outline-none transition-opacity duration-300 ${ selectedCategory === 'All' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>
                                {subCategories.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="premium-card rounded-2xl p-4 premium-shadow-lg group hover:premium-shadow-xl transition-all duration-300 flex flex-col">
                        <div className="relative mb-4">
                            <img src={product.primaryImageUrl || 'https://via.placeholder.com/400'} alt={product.name} className="w-full h-56 object-cover rounded-xl"/>
                            {product.discount > 0 && (<div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{product.discount}% OFF</div>)}
                        </div>
                        <div className="flex flex-col flex-grow p-2">
                            <h3 className="font-serif font-bold text-xl text-slate-800 leading-tight no-zoom mb-2">{product.name}</h3>
                            <div className="text-xl font-bold text-slate-800 mb-4">
                            ₹{product.ourPrice}
                            {product.originalPrice > product.ourPrice && (<s className="text-sm text-slate-400 font-normal ml-2">₹{product.originalPrice}</s>)}
                            </div>
                            <div className="flex gap-3 mt-auto">
                            <a href="tel:+919826081841" className="premium-button-light text-sm flex-1 justify-center"><Phone className="w-4 h-4" /> Inquire</a>
                            <button onClick={() => openModal(product)} className="premium-button text-sm px-3">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Product Detail Modal with Button Zoom */}
      {selectedProduct && (
        <div onClick={closeModal} className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl w-full relative flex flex-col md:flex-row gap-8">
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors duration-200 text-4xl font-light leading-none z-20">&times;</button>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative w-full h-80 rounded-lg bg-slate-100 cursor-grab overflow-hidden">
                <TransformWrapper key={modalImage} maxScale={8} minScale={1} initialScale={1} centerOnInit={true}>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full">
                                <img src={modalImage} alt={selectedProduct.name} className="w-full h-full object-contain"/>
                            </TransformComponent>
                            <div className="absolute bottom-3 right-3 flex gap-2">
                                <button onClick={() => zoomIn()} className="bg-slate-800/60 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"><ZoomIn className="w-5 h-5"/></button>
                                <button onClick={() => zoomOut()} className="bg-slate-800/60 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"><ZoomOut className="w-5 h-5"/></button>
                                <button onClick={() => resetTransform()} className="bg-slate-800/60 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"><RotateCcw className="w-5 h-5"/></button>
                            </div>
                        </>
                    )}
                </TransformWrapper>
              </div>
              <div className="flex gap-2 flex-wrap justify-center mt-4">
                {selectedProduct.imageUrls.map((url, index) => (
                  <img key={index} src={url} alt={`${selectedProduct.name} thumbnail ${index+1}`} onClick={() => setModalImage(url)} className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${modalImage === url ? 'border-slate-800 shadow-md' : 'border-transparent hover:border-slate-300'}`}/>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 flex flex-col pt-8 md:pt-0">
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-3 leading-tight">{selectedProduct.name}</h2>
              <div className="text-3xl font-bold text-slate-800 mb-5 flex items-center flex-wrap">
                  ₹{selectedProduct.ourPrice}
                  {selectedProduct.originalPrice > selectedProduct.ourPrice && <s className="text-lg text-slate-400 font-normal ml-3">₹{selectedProduct.originalPrice}</s>}
                  {selectedProduct.discount > 0 && <span className="ml-4 text-base font-bold text-white bg-red-600 px-3 py-1 rounded-full">{selectedProduct.discount}% OFF</span>}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">{selectedProduct.description}</p>
              <div className="flex gap-3 flex-wrap mb-8">
                  <span className="inline-block px-4 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">{selectedProduct.categoryName}</span>
                  <span className="inline-block px-4 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">{selectedProduct.subcategoryName}</span>
              </div>
              <a href="tel:+919826081841" className="premium-button text-xl px-10 py-5 mt-auto w-full flex justify-center items-center gap-3">
                <Phone className="w-6 h-6" /> Inquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}