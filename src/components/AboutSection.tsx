"use client";

import { Award, Users, Clock, Star, Gem, Shield, Heart } from 'lucide-react';

export function AboutSection() {
  const stats = [
    {
      icon: Award,
      number: "1000+",
      label: "Premium Products",
      description: "Handcrafted with precision"
    },
    {
      number: "500+",
      label: "Happy Customers",
      icon: Users,
      description: "Satisfied customers worldwide"
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: Clock,
      description: "In premium article business"
    },
    {
      number: "100%",
      label: "Quality Assured",
      icon: Shield,
      description: "Premium quality guarantee"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Respect for All Traditions",
      description: "We honor and celebrate spiritual practices from all cultures and faiths, creating pieces that resonate with diverse beliefs."
    },
    {
      icon: Award,
      title: "Premium Quality Commitment",
      description: "Every piece in our collection meets the highest standards of craftsmanship and quality, ensuring lasting beauty."
    },
    {
      icon: Gem,
      title: "Premium Excellence",
      description: "Our premium finishes and quality materials create articles that sparkle with elegance and sophistication."
    },
    {
      icon: Shield,
      title: "Expert Curation",
      description: "Our team of experts carefully selects each piece, ensuring authenticity and exceptional value for our customers."
    }
  ];

  return (
    <section className="py-24 premium-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full blur-3xl premium-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full premium-shadow-lg mb-6">
            <Heart className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700 no-zoom">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 no-zoom">
            <span className="text-slate-800">About Premium</span>
            <br />
            <span className="premium-gradient-text">Article Gallery</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Premium Article Gallery has been a trusted name in premium articles 
            and spiritual artifacts. We specialize in creating and curating pieces that honor diverse 
            religious and cultural traditions while maintaining the highest standards of quality and craftsmanship.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="premium-card rounded-3xl p-8 premium-shadow-lg text-center group hover:premium-shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 premium-shadow group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-slate-700" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2 no-zoom">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-700 mb-2 no-zoom">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="premium-card rounded-3xl p-12 premium-shadow-lg mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Gem className="w-10 h-10 text-slate-700" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 no-zoom">
              Our Mission
            </h3>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              To provide premium articles and spiritual artifacts that celebrate the beauty 
              of diverse traditions while delivering exceptional quality and service. We believe that 
              our articles are more than decorations—they're expressions of faith, culture, and personal style.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center premium-shadow flex-shrink-0">
                  <Award className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 no-zoom">Excellence</h4>
                  <p className="text-slate-600 text-sm">Committed to the highest standards of quality and craftsmanship.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center premium-shadow flex-shrink-0">
                  <Heart className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 no-zoom">Respect</h4>
                  <p className="text-slate-600 text-sm">Honoring all religious and cultural traditions with dignity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center premium-shadow flex-shrink-0">
                  <Users className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 no-zoom">Service</h4>
                  <p className="text-slate-600 text-sm">Providing personalized attention and expert guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="premium-card rounded-3xl p-8 premium-shadow-lg group hover:premium-shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-4 no-zoom">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}