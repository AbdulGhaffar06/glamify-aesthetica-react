
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
  discountedPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={14} 
          className={i < rating ? "text-glamify-gold fill-glamify-gold" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
        {/* Product Image */}
        <a href={`#product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </a>
        
        {/* Product Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-glamify-purple text-white text-xs py-1 px-2 rounded">New</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-xs py-1 px-2 rounded">Sale</span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 flex justify-center gap-2 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="p-2 rounded-full bg-white hover:bg-glamify-purple hover:text-white border border-gray-200 transition-colors">
            <Heart size={18} />
          </button>
          <button className="flex-1 py-2 bg-glamify-purple text-white rounded-full hover:bg-glamify-purple-dark transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4 text-left">
        <div className="flex justify-between items-start">
          <a href={`#product/${product.id}`} className="block">
            <h3 className="font-medium text-glamify-black hover:text-glamify-purple transition-colors">
              {product.name}
            </h3>
          </a>
          <div className="flex items-center">
            {renderRatingStars(product.rating)}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex items-center gap-2">
          {product.discountedPrice ? (
            <>
              <span className="font-medium">${product.discountedPrice.toFixed(2)}</span>
              <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
