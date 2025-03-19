
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to make it more noticeable
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="inkwave-container relative">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-inkwave-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-48 -left-20 w-80 h-80 bg-inkwave-400 rounded-full opacity-10 blur-3xl" />
        
        <div className="relative max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="tag-yellow mb-4 animate-fade-down">Welcome to Inkwave</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 md:mb-8 text-balance animate-fade-up">
              Where <span className="text-gradient">Ideas Flow</span> Like Waves of Ink
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto text-balance animate-fade-up" style={{ animationDelay: '100ms' }}>
              A modern blogging platform where storytellers and readers connect through beautifully crafted content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link to="/blog" className="btn-primary px-8 py-3 text-base">
                Explore Articles
              </Link>
              <Link to="/about" className="btn-secondary px-8 py-3 text-base">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
