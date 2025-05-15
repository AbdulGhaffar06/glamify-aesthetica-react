
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '#shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-glamify-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <a href="/" className="text-2xl font-serif font-bold text-glamify-purple">
            Glamify
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-glamify-black hover:text-glamify-purple transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-glamify-black hover:text-glamify-purple transition-colors duration-300">
            <Search size={20} />
          </button>
          <button aria-label="User Account" className="text-glamify-black hover:text-glamify-purple transition-colors duration-300">
            <User size={20} />
          </button>
          <button aria-label="Shopping Cart" className="text-glamify-black hover:text-glamify-purple transition-colors duration-300 relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-glamify-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              3
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container-custom flex flex-col space-y-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-glamify-black hover:text-glamify-purple transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-gray-200 my-4" />
          <a 
            href="#account" 
            className="flex items-center space-x-2 text-glamify-black hover:text-glamify-purple"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={18} />
            <span>Account</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
