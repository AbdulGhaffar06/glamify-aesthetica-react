
import React from 'react';
import ProductCard, { Product } from './ProductCard';

const NewArrivals: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Oversized Cotton Shirt",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=1374&auto=format&fit=crop",
      category: "Women's Tops",
      rating: 4,
      isNew: true
    },
    {
      id: 2,
      name: "Tailored Wool Blazer",
      price: 229.99,
      imageUrl: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1374&auto=format&fit=crop",
      category: "Women's Outerwear",
      rating: 5,
      isNew: true
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1463&auto=format&fit=crop",
      category: "Accessories",
      rating: 4,
      isNew: true
    },
    {
      id: 4,
      name: "Premium Denim Jeans",
      price: 119.99,
      imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1374&auto=format&fit=crop",
      category: "Women's Bottoms",
      rating: 4,
      isNew: true,
      isSale: true,
      discountedPrice: 89.99
    },
    {
      id: 5,
      name: "Fine Knit Cashmere Sweater",
      price: 179.99,
      imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop",
      category: "Women's Tops",
      rating: 5,
      isNew: true
    },
    {
      id: 6,
      name: "Structured Tote Bag",
      price: 159.99,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1471&auto=format&fit=crop",
      category: "Accessories",
      rating: 4,
      isNew: true
    },
    {
      id: 7,
      name: "Statement Gold Earrings",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1374&auto=format&fit=crop",
      category: "Jewelry",
      rating: 3,
      isNew: true
    },
    {
      id: 8,
      name: "Suede Ankle Boots",
      price: 199.99,
      imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop",
      category: "Footwear",
      rating: 5,
      isNew: true,
      isSale: true,
      discountedPrice: 149.99
    }
  ];

  return (
    <section className="section-spacing bg-white" id="new-arrivals">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our latest additions to help you stay ahead of the trends
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#shop" className="btn-outline inline-block">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
