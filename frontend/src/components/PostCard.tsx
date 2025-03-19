
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
}

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Calculate animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      ref={cardRef}
      className={`glass-card overflow-hidden transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      <Link to={`/post/${post.id}`} className="block h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className={`absolute inset-0 bg-inkwave-100 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className={`w-full h-full object-cover transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-4 left-4">
            <span className="tag-yellow">{post.category}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/40"></span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-inkwave-700 transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-foreground/80 line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex justify-end">
            <span className="text-inkwave-600 font-medium text-sm hover:text-inkwave-700 transition-colors">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
