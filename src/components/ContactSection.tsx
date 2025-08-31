"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 premium-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 no-zoom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-800">
            <span>Get In</span>
            <br />
            <span className="premium-gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to explore our premium collection? Contact us today for personalized 
            assistance and expert guidance on our premium jewelry and religious artifacts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="premium-card rounded-2xl p-8 premium-shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8 no-zoom">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center premium-shadow">
                    <Phone className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg no-zoom">Phone</h4>
                    <a 
                      href="tel:+919826081841" 
                      className="text-slate-600 hover:text-slate-800 transition-colors text-lg font-medium"
                    >
                      +91 98260 81841
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center premium-shadow">
                    <Mail className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg no-zoom">Email</h4>
                    <a 
                      href="mailto:ajayrajoverseas@gmail.com" 
                      className="text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      ajayrajoverseas@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center premium-shadow">
                    <MapPin className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg no-zoom">Location</h4>
                    <p className="text-slate-600">
                      One Centre Mall, 56 Dukan<br />
                      Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="premium-card rounded-2xl p-8 premium-shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center premium-shadow">
                  <Clock className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 no-zoom">
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-3 text-slate-600">
                <div className="flex justify-between items-center">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-slate-800">11:00 AM - 7:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <div className="premium-card rounded-2xl p-8 premium-shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 premium-shadow">
                <Phone className="w-10 h-10 text-slate-700" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 no-zoom">
                Ready to Explore Our Collection?
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Call us now to discuss your premium jewelry and spiritual artifact needs. 
                Our experts are ready to help you find the perfect pieces for your collection.
              </p>
              
              <a 
                href="tel:+919826081841"
                className="premium-button mb-4 block w-full justify-center"
              >
                Call +91 98260 81841
              </a>
              
              <p className="text-sm text-slate-500">
                Available during business hours for immediate assistance
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="premium-card rounded-2xl p-8 premium-shadow-lg">
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-6 text-center no-zoom">
                Why Choose Premium Article Gallery?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-600">Expert curation of authentic spiritual artifacts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-600">Respect for all religious traditions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-600">Premium quality jewelry</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-600">500+ satisfied customers worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-600">Personalized customer service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}