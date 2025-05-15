
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send the email to your backend
    toast({
      title: "Thank you!",
      description: "You've been successfully subscribed to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="bg-glamify-cream py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Join Our Fashion Community</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and style inspiration delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-glamify-purple focus:border-transparent"
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap inline-flex items-center justify-center"
            >
              Subscribe <ArrowRight size={16} className="ml-2" />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing communications from Glamify.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
