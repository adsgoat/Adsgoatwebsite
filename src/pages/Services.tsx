import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Bot, Target, Share2, FileText } from "lucide-react";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web/App Development",
      description: "Custom websites and mobile applications built for performance, conversions, and exceptional user experience.",
      features: ["Custom Web Development", "Mobile App Development", "E-commerce Solutions", "Performance Optimization"],
      link: "/services/web-app-development"
    },
    {
      icon: Bot,
      title: "AI Marketing",
      description: "Leverage cutting-edge AI technology to optimize campaigns, predict trends, and automate marketing processes.",
      features: ["AI Campaign Optimization", "Predictive Analytics", "Marketing Automation", "Smart Bidding"],
      link: "/services/ai-marketing"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Strategic lead generation campaigns that attract, nurture, and convert high-quality prospects into customers.",
      features: ["Targeted Lead Campaigns", "Landing Page Optimization", "CRM Integration", "Lead Nurturing"],
      link: "/services/lead-generation"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Build authentic communities and drive engagement across all social platforms with data-driven strategies.",
      features: ["Content Strategy", "Community Management", "Paid Social Advertising", "Influencer Marketing"],
      link: "/services/social-media"
    },
    {
      icon: FileText,
      title: "Content and SEO",
      description: "Dominate search results with compelling content and technical SEO that drives organic traffic and conversions.",
      features: ["SEO Strategy", "Content Creation", "Technical SEO", "Local SEO"],
      link: "/services/content-seo"
    }
  ];

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
            <Badge variant="outline" className="mb-6">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital marketing services designed to build momentum for your brand. 
              From AI-powered SEO to creative campaigns that convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={service.link}>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Momentum?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss which services align with your goals and create a custom strategy for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
              <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
              <Link to="/blogcaseStudies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;