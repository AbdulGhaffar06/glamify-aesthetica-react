
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-glamify-cream">
      <div className="container-custom grid md:grid-cols-2 gap-8 py-12 md:py-20">
        <div className="flex flex-col justify-center text-left space-y-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Elevate Your <span className="text-glamify-purple">Style</span> with Glamify
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Discover our curated collection of premium fashion pieces that combine timeless elegance with contemporary design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#shop" className="btn-primary inline-flex items-center justify-center">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#collections" className="btn-outline">
              Explore Collections
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop"
              alt="Glamify Fashion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 z-0 w-full h-[400px] md:h-[500px] bg-glamify-purple/20 rounded-xl"></div>
        </div>
      </div>
      
      {/* Floating features bar */}
      <div className="bg-white py-5 shadow-md relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">Free Shipping</span>
              <span className="text-sm text-gray-500">On orders over $100</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">Easy Returns</span>
              <span className="text-sm text-gray-500">30-day return policy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">Secure Payment</span>
              <span className="text-sm text-gray-500">100% secure checkout</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">Customer Support</span>
              <span className="text-sm text-gray-500">24/7 assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
