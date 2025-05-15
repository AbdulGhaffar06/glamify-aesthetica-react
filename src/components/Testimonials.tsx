
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, position, testimonial, rating, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-glamify-gold fill-glamify-gold" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-glamify-black">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      position: "Fashion Influencer",
      testimonial: "Glamify has completely transformed my wardrobe. The quality of their pieces is unmatched, and I always receive compliments when wearing their designs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      position: "Creative Director",
      testimonial: "As someone who values both style and quality, I've been consistently impressed with Glamify's attention to detail and timeless designs.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Sophia Rodriguez",
      position: "Style Consultant",
      testimonial: "Glamify strikes the perfect balance between trendy and timeless. Their pieces are versatile enough to mix and match for countless stunning looks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-spacing bg-glamify-purple/5">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Hear from our satisfied customers about their Glamify experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
