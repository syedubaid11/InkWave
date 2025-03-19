
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Post as PostType } from '../components/PostCard';
import axios from "axios";


const Post = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [data, setData] = useState<string|null>(null);
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [author,setAuthor]=useState("")

  useEffect(() => {
      const fetchData = async () => {
          try{
              const response = await axios.get(`http://localhost:8787/api/v1/blog/blog/get/${id}`);
              setData(response.data); // Fix: Pass the response data to setData
              setTitle(response.data[0].title)
              setContent(response.data[0].content)
              setAuthor(response.data[0].author)
              
          }
          catch(error){
              console.log(error)
          }

          setTimeout(()=>{
            if(data){
              setIsLoading(false);
            }
            
          },400)
         
      };
      fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate data fetching
    setTimeout(() => {
      if (id && posts[id]) {
        setPost(posts[id]);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-24 h-24 bg-inkwave-200 rounded-full mb-4"></div>
            <div className="h-8 bg-inkwave-100 rounded w-64 mb-4"></div>
            <div className="h-4 bg-inkwave-50 rounded w-40"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Post Not Found</h2>
            <p className="mb-6 text-foreground/70">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="btn-primary px-6 py-2.5">
              Browse Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        {/* Hero section */}
        <section className="pt-20 pb-12">
          <div className="inkwave-container">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="tag-yellow mb-4 inline-block animate-fade-down">{post.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 animate-fade-up">{post.title}</h1>
              <div className="flex items-center justify-center gap-3 text-sm text-foreground/60 animate-fade-up" style={{ animationDelay: '100ms' }}>
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-foreground/40"></span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="relative aspect-[21/9] max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className={`absolute inset-0 bg-inkwave-100 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </section>
        
        {/* Content section */}
        <section>
          <div className="inkwave-container">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg md:prose-xl prose-img:rounded-xl prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-a:text-inkwave-600 prose-a:decoration-inkwave-200 hover:prose-a:decoration-inkwave-600 prose-blockquote:border-inkwave-300 prose-blockquote:bg-inkwave-50/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg max-w-none animate-fade-up" style={{ animationDelay: '300ms' }} dangerouslySetInnerHTML={{ __html: post.content }}>
              </article>
              
              <div className="mt-16 pt-8 border-t border-inkwave-100 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-serif font-bold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-inkwave-100 text-inkwave-900 hover:bg-inkwave-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-inkwave-100 text-inkwave-900 hover:bg-inkwave-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-inkwave-100 text-inkwave-900 hover:bg-inkwave-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-inkwave-100 text-inkwave-900 hover:bg-inkwave-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Post;
