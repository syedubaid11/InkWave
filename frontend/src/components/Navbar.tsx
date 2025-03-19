
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="inkwave-container">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-inkwave-500 rounded-lg flex items-center justify-center 
                           shadow-[0_2px_10px_rgba(255,179,11,0.3)] 
                           group-hover:shadow-[0_4px_16px_rgba(255,179,11,0.4)]
                           transition-all duration-300">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">
              <span className="text-inkwave-700">ink</span>
              <span className="text-inkwave-900">wave</span>
            </span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-inkwave-700 transition-colors duration-200">Home</Link>
            <Link to="/blog" className="text-foreground/80 hover:text-inkwave-700 transition-colors duration-200">Blog</Link>
            <Link to="/about" className="text-foreground/80 hover:text-inkwave-700 transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-inkwave-700 transition-colors duration-200">Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/subscribe" className="btn-primary px-5 py-2.5">Subscribe</Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg absolute top-full left-0 right-0 border-b border-inkwave-100 animate-fade-down">
          <div className="inkwave-container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-inkwave-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="px-4 py-2 hover:bg-inkwave-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-inkwave-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 hover:bg-inkwave-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 pb-1">
              <Link 
                to="/subscribe" 
                className="btn-primary w-full py-2.5 px-5"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
