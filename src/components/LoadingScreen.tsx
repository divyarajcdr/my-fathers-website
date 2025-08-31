"use client";

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minLoadingDuration?: number;
}

export default function LoadingScreen({ 
  onLoadingComplete, 
  minLoadingDuration = 2000 
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            // Complete loading after exit animation
            setTimeout(onLoadingComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, minLoadingDuration / 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete, minLoadingDuration]);

  return (
    <div className={`fixed inset-0 z-50 premium-background flex items-center justify-center transition-all duration-700 ease-in-out ${
      isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full blur-3xl premium-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full blur-3xl premium-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className={`text-center relative z-10 transition-all duration-500 ${
        isExiting ? 'transform translate-y-8 opacity-0' : 'transform translate-y-0 opacity-100'
      }`}>
        {/* Logo */}
        <div className="mb-8">
          <div className={`w-24 h-24 bg-gradient-to-br from-white to-slate-100 rounded-3xl flex items-center justify-center mx-auto premium-shadow-xl premium-glow transition-transform duration-500 ${
            isComplete ? 'scale-110' : 'scale-100'
          }`}>
            <Sparkles className="w-12 h-12 text-slate-700" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 no-zoom">
          <span className="text-slate-800">PAG</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 no-zoom">Premium Article Gallery</p>

        {/* Loading Progress */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-full h-2 premium-shadow mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-slate-600 to-slate-800 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-slate-500 text-sm font-medium no-zoom">
            {isComplete ? 'Welcome to Premium Collection...' : `Loading Premium Collection... ${progress}%`}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8">
          <div className="w-4 h-4 bg-slate-300 rounded-full opacity-60 premium-float"></div>
        </div>
        <div className="absolute -top-4 -right-12">
          <div className="w-3 h-3 bg-slate-400 rounded-full opacity-40 premium-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute -bottom-6 -left-16">
          <div className="w-5 h-5 bg-slate-200 rounded-full opacity-50 premium-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute -bottom-8 -right-8">
          <div className="w-2 h-2 bg-slate-500 rounded-full opacity-70 premium-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
}