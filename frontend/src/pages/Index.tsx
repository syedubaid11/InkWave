
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedPosts />
        
        {/* Call to action section */}
        <section className="py-20 bg-gradient-to-b from-white to-inkwave-50">
          <div className="inkwave-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="tag-yellow mb-4 inline-block">Start Writing</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Share Your Story?</h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Join our community of writers and reach readers who appreciate thoughtful, well-crafted content.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="btn-primary px-8 py-3 text-base">
                  Create Account
                </a>
                <a href="#" className="btn-secondary px-8 py-3 text-base">
                  Learn How It Works
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
