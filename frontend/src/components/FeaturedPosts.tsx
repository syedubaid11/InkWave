
import { useRef, useState, useEffect } from 'react';
import PostCard, { Post } from './PostCard';

// Sample post data
const posts: Post[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Writing',
    excerpt: 'Discover how stripping away excess can transform your writing into a more powerful form of expression.',
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'Writing',
    date: 'Feb 12, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Digital Wellness in a Connected World',
    excerpt: 'How to maintain mental health and focus in an era of constant digital notifications and distractions.',
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Lifestyle',
    date: 'Feb 8, 2024',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'The Psychology of Color in Design',
    excerpt: 'Understanding how different colors affect human psychology and how to use them effectively in design.',
    coverImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Design',
    date: 'Feb 3, 2024',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Sustainable Living: Small Changes, Big Impact',
    excerpt: 'Practical ways to incorporate eco-friendly practices into your daily routine.',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    category: 'Sustainability',
    date: 'Jan 28, 2024',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'The Future of Remote Work',
    excerpt: 'How companies and individuals are adapting to a new paradigm of work in the post-pandemic era.',
    coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Work',
    date: 'Jan 21, 2024',
    readTime: '9 min read',
  },
];

const FeaturedPosts = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="inkwave-container">
        <div className="mb-12 text-center">
          <h2 
            className={`text-3xl md:text-4xl font-serif font-bold mb-4 transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Featured Articles
          </h2>
          <p 
            className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-500 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Explore our collection of thoughtfully crafted stories and ideas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
