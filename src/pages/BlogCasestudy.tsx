import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const BlogCasestudy = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Case Studies & Success Stories");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchBlogPosts();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');
    
    if (!error && data) {
      setCategories(data);
    }
  };

  const fetchBlogPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(name, slug),
        author:profiles(full_name)
      `)
      .eq('published', true)
      .order('published_at', { ascending: false });
    
    if (!error && data) {
      setBlogPosts(data);
    }
    setLoading(false);
  };

  const filteredPosts = selectedCategory === "Case Studies & Success Stories" 
    ? blogPosts 
    : blogPosts.filter(post => post.category?.name === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6">Insights & Ideas</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The AdsGoat 
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, strategies, and thought leadership from the frontlines of digital marketing innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
          
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found. Visit the admin panel to create your first post!</p>
              <Link to="/admin">
                <Button className="mt-4">Go to Admin</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
                    {post.cover_image_url && (
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.cover_image_url} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category?.name || 'Uncategorized'}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author?.full_name || 'Admin'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogCasestudy;