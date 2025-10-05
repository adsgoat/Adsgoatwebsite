import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(name, slug),
        author:profiles(full_name, avatar_url)
      `)
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (!error && data) {
      setPost(data);
    }
    setLoading(false);
  };

  const renderContent = (content: string) => {
    if (!content) return null;

    // Split content by embed markers (you can customize this pattern)
    const parts = content.split(/(\[embed:.*?\])/g);
    
    return parts.map((part, index) => {
      // Check if it's an embed
      if (part.startsWith('[embed:') && part.endsWith(']')) {
        const url = part.slice(7, -1); // Extract URL from [embed:URL]
        
        // YouTube embed
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          const videoId = url.includes('youtu.be') 
            ? url.split('youtu.be/')[1]?.split('?')[0]
            : new URLSearchParams(new URL(url).search).get('v');
          
          return (
            <div key={index} className="my-8 aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        }
        
        // Instagram embed
        if (url.includes('instagram.com')) {
          return (
            <div key={index} className="my-8 flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              />
            </div>
          );
        }
        
        // Twitter/X embed
        if (url.includes('twitter.com') || url.includes('x.com')) {
          return (
            <div key={index} className="my-8 flex justify-center">
              <blockquote className="twitter-tweet">
                <a href={url}>View Tweet</a>
              </blockquote>
            </div>
          );
        }
        
        // Facebook embed
        if (url.includes('facebook.com')) {
          return (
            <div key={index} className="my-8 flex justify-center">
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&width=500`}
                className="w-full max-w-[500px] h-[600px] border-0 rounded-lg"
                scrolling="no"
                allow="encrypted-media"
              />
            </div>
          );
        }
        
        // Generic iframe for other embeds
        return (
          <div key={index} className="my-8">
            <iframe
              src={url}
              className="w-full h-[400px] rounded-lg border border-border"
              allowFullScreen
            />
          </div>
        );
      }
      
      // Regular text content
      return (
        <div 
          key={index} 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: part }}
        />
      );
    });
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section with Featured Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-background to-card overflow-hidden"
      >
        {post.cover_image_url && (
          <div className="absolute inset-0">
            <img 
              src={post.cover_image_url} 
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}
        
        <div className="relative container mx-auto px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <Badge variant="secondary" className="mb-4">
              {post.category?.name || 'Uncategorized'}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author?.full_name || 'Admin'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
                {post.excerpt}
              </p>
            )}
            
            <div className="blog-content">
              {renderContent(post.content)}
            </div>
          </div>
        </div>
      </motion.article>

      <Footer />
    </div>
  );
};

export default BlogPost;