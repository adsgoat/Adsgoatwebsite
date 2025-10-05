-- Create blog categories table
CREATE TABLE public.blog_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on blog_categories
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Add category_id to blog_posts
ALTER TABLE public.blog_posts ADD COLUMN category_id uuid REFERENCES public.blog_categories(id);

-- Create index for faster lookups
CREATE INDEX idx_blog_posts_category_id ON public.blog_posts(category_id);

-- Insert default categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
  ('All', 'all', 'All blog posts'),
  ('AI & Technology', 'ai-technology', 'Posts about AI and technology innovations'),
  ('Performance Marketing Tips', 'performance-marketing-tips', 'Tips and tricks for performance marketing'),
  ('Marketing Trends & Industry News', 'marketing-trends-industry-news', 'Latest trends and news in marketing'),
  ('Case Studies & Success Stories', 'case-studies-success-stories', 'Real client success stories and case studies');

-- RLS Policies for blog_categories
CREATE POLICY "Anyone can view categories"
  ON public.blog_categories
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create categories"
  ON public.blog_categories
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update categories"
  ON public.blog_categories
  FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete categories"
  ON public.blog_categories
  FOR DELETE
  USING (auth.uid() IS NOT NULL);

-- Trigger for updating blog_categories updated_at
CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON public.blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();