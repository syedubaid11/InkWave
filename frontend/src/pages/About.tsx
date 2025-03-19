
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="inkwave-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="tag-yellow mb-4 animate-fade-down">About Us</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-up">Our Story</h1>
              <p className="text-lg text-foreground/80 animate-fade-up" style={{ animationDelay: '100ms' }}>
                Discover the journey behind Inkwave and our passion for great storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-16 bg-inkwave-50/50">
          <div className="inkwave-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg mb-6 text-foreground/80">
                At Inkwave, we believe in the power of words to transform, inspire, and connect. Our mission is to create a platform where thoughtful content thrives and where writers and readers can engage in meaningful ways.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                We're dedicated to preserving the art of thoughtful writing in a digital age often dominated by fleeting content. We value depth, nuance, and the time it takes to craft ideas with care.
              </p>
              <p className="text-lg text-foreground/80">
                Our platform is designed with both writers and readers in mind, creating an ecosystem where quality content can be discovered and appreciated.
              </p>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16">
          <div className="inkwave-container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team member 1 */}
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" 
                    alt="Emma Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">Emma Chen</h3>
                <p className="text-inkwave-600 mb-3">Founder & Editor-in-Chief</p>
                <p className="text-foreground/80 text-sm">
                  Former journalist with a passion for storytelling and digital publishing.
                </p>
              </div>
              
              {/* Team member 2 */}
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
                    alt="Marcus Kim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">Marcus Kim</h3>
                <p className="text-inkwave-600 mb-3">Lead Developer</p>
                <p className="text-foreground/80 text-sm">
                  Full-stack developer focused on creating intuitive user experiences.
                </p>
              </div>
              
              {/* Team member 3 */}
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop" 
                    alt="Sofia Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">Sofia Martinez</h3>
                <p className="text-inkwave-600 mb-3">Creative Director</p>
                <p className="text-foreground/80 text-sm">
                  Designer with a background in digital publishing and brand strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="py-16 bg-inkwave-50/50">
          <div className="inkwave-container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-inkwave-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif font-bold text-inkwave-700">1</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Quality Over Quantity</h3>
                <p className="text-foreground/80">
                  We prioritize thoughtful, well-crafted content over high-volume publishing.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-inkwave-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif font-bold text-inkwave-700">2</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Creator-First Approach</h3>
                <p className="text-foreground/80">
                  We build tools and features that empower writers to create their best work.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-inkwave-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif font-bold text-inkwave-700">3</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Community Connection</h3>
                <p className="text-foreground/80">
                  We foster meaningful engagement between writers and readers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
