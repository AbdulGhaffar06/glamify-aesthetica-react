
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-glamify-black text-white pt-16 pb-8" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="/" className="text-3xl font-serif font-bold text-white">
              Glamify
            </a>
            <p className="text-gray-300 max-w-xs">
              Elevating everyday style with premium fashion that combines elegance, comfort, and contemporary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#women" className="text-gray-300 hover:text-white transition-colors">Women</a></li>
              <li><a href="#men" className="text-gray-300 hover:text-white transition-colors">Men</a></li>
              <li><a href="#accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#new-arrivals" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#sale" className="text-gray-300 hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#press" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">123 Fashion Avenue, Style City, SC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@glamify.com" className="text-gray-300 hover:text-white transition-colors">
                  info@glamify.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Glamify. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#shipping" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping Policy</a>
              <a href="#returns" className="text-gray-400 hover:text-white text-sm transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
