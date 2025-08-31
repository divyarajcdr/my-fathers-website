"use client";

import { useCallback } from 'react';
import { ArrowRight, Phone, Star, Crown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToProducts = useCallback(() => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full blur-3xl premium-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full blur-3xl premium-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full blur-3xl premium-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full premium-border mb-6">
            <Crown className="w-4 h-4 text-slate-700" />
            <span className="text-sm font-medium text-slate-700 no-zoom">3+ Years of Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 no-zoom">
            <span className="premium-gradient-text">Premium</span>
            <br />
            <span className="text-slate-800">Article Gallery</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto no-zoom">
            Discover our exquisite collection of handcrafted brass sculptures, 
            Hindu deity artifacts, and premium decorative pieces
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 mb-1 no-zoom">1000+</div>
              <div className="text-sm text-slate-600 no-zoom">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 mb-1 no-zoom">100%</div>
              <div className="text-sm text-slate-600 no-zoom">Handcrafted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 mb-1 no-zoom">24/7</div>
              <div className="text-sm text-slate-600 no-zoom">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProducts}
              className="premium-button group no-zoom"
            >
              <span>View Collection</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="tel:+919826081841"
              className="premium-button-outline group no-zoom"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm no-zoom">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm no-zoom">Authentic Brass</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              <span className="text-sm no-zoom">Handcrafted Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20">
        <div className="w-8 h-8 bg-slate-300/30 rounded-full premium-float"></div>
      </div>
      <div className="absolute top-40 right-32">
        <div className="w-6 h-6 bg-slate-400/40 rounded-full premium-float" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-32 left-40">
        <div className="w-10 h-10 bg-slate-200/20 rounded-full premium-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute bottom-20 right-20">
        <div className="w-4 h-4 bg-slate-500/50 rounded-full premium-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
}