"use client";

import { useState, useCallback } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

export function PremiumNavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <header className="premium-nav fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-100 rounded-xl flex items-center justify-center premium-shadow">
              <Sparkles className="w-7 h-7 text-slate-700" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-white no-zoom">PAG</h1>
              <p className="text-xs text-slate-300 no-zoom">Premium Article Gallery</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="premium-nav-item text-base font-medium no-zoom"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="premium-nav-item text-base font-medium no-zoom"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="premium-nav-item text-base font-medium no-zoom"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="premium-nav-item text-base font-medium no-zoom"
            >
              Contact
            </button>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919826081841"
              className="hidden sm:flex premium-button-light items-center gap-2 text-sm font-semibold no-zoom"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center premium-border"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 premium-card rounded-2xl premium-shadow-lg">
            <nav className="flex flex-col gap-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors no-zoom"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors no-zoom"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors no-zoom"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors no-zoom"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-slate-200">
                <a 
                  href="tel:+919826081841"
                  className="premium-button w-full justify-center no-zoom"
                >
                  <Phone className="w-4 h-4" />
                  Call +91 98260 81841
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}