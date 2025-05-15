
import React from 'react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  count: number;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, count, link }) => {
  return (
    <a 
      href={link} 
      className="relative group overflow-hidden rounded-xl aspect-[4/5]"
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-glamify-black/70 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="font-serif text-xl md:text-2xl font-medium">{title}</h3>
        <p className="mt-1 text-white/80">{count} Products</p>
      </div>
    </a>
  );
};

const FeaturedCategories: React.FC = () => {
  const categories = [
    { 
      title: "Women's Fashion", 
      count: 248, 
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop",
      link: "#womens" 
    },
    { 
      title: "Men's Collection", 
      count: 157, 
      imageUrl: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1374&auto=format&fit=crop", 
      link: "#mens" 
    },
    { 
      title: "Accessories", 
      count: 89, 
      imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1374&auto=format&fit=crop",
      link: "#accessories" 
    },
    { 
      title: "Footwear", 
      count: 124, 
      imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop",
      link: "#footwear" 
    }
  ];

  return (
    <section className="section-spacing bg-white" id="collections">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our curated collections designed to match your unique style and preferences
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              imageUrl={category.imageUrl}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
