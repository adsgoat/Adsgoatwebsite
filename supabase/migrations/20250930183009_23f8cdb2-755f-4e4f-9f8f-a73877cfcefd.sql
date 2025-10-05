-- Update blog categories to match the new requirements
-- First, delete existing categories if any
DELETE FROM blog_categories;

-- Insert the new categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('AI & Technology', 'ai-technology', 'Latest insights on AI and technology in marketing'),
  ('Performance Marketing Tips', 'performance-marketing-tips', 'Proven tips and strategies for performance marketing'),
  ('Marketing Trends & Industry News', 'marketing-trends-industry-news', 'Stay updated with the latest marketing trends and industry news'),
  ('Case Studies & Success Stories', 'case-studies-success-stories', 'Real-world success stories and case studies from our clients');