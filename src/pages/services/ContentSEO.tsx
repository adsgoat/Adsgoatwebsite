import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, TrendingUp, Globe, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

const ContentSEO = () => {
  const features = [
    "SEO Strategy",
    "Content Creation",
    "Technical SEO",
    "Local SEO",
    "Keyword Research",
    "Performance Tracking"
  ];

  const services = [
    { icon: Search, title: "SEO Optimization", description: "Technical and on-page SEO improvements" },
    { icon: FileText, title: "Content Strategy", description: "High-quality, search-optimized content" },
    { icon: TrendingUp, title: "Ranking Growth", description: "Measurable improvements in search rankings" },
    { icon: Globe, title: "Local SEO", description: "Dominate local search results" }
  ];

  const results = [
    { metric: "300%", description: "Average organic traffic increase" },
    { metric: "85%", description: "Keywords in top 10 rankings" },
    { metric: "200%", description: "Improvement in conversion rates" },
    { metric: "6 months", description: "Average time to see significant results" }
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
            <Badge variant="outline" className="mb-6">Content & SEO</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Content & SEO
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Mastery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              GenAI optimization, voice/LLM-friendly copy - strategic content and SEO that drives organic traffic and authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Boost Rankings Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Free SEO Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Complete SEO & Content Solutions</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine technical SEO expertise with compelling content creation to drive sustainable organic growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data-driven approach to SEO and content delivers measurable improvements in rankings and traffic.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <h3 className="font-bold text-3xl text-primary mb-2">{result.metric}</h3>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our SEO Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to improving your search visibility and organic traffic.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Research & Analysis</h3>
              <p className="text-muted-foreground">
                Comprehensive keyword research, competitor analysis, and technical SEO audit to identify opportunities.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy & Implementation</h3>
              <p className="text-muted-foreground">
                Develop and execute a custom SEO strategy with on-page optimization and high-quality content creation.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Monitor & Optimize</h3>
              <p className="text-muted-foreground">
                Continuous monitoring, analysis, and optimization to maintain and improve search rankings over time.
              </p>
            </Card>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create an SEO and content strategy that drives sustainable organic growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start SEO Campaign
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentSEO;