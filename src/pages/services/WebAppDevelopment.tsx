import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, ShoppingCart, Zap, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

const WebAppDevelopment = () => {
  const features = [
    "Custom Web Development",
    "Mobile App Development", 
    "E-commerce Solutions",
    "Performance Optimization",
    "Responsive Design",
    "API Integration"
  ];

  const technologies = [
    { name: "React", description: "Modern frontend framework" },
    { name: "Node.js", description: "Scalable backend development" },
    { name: "MongoDB", description: "Flexible database solutions" },
    { name: "AWS", description: "Cloud infrastructure" }
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
            <Badge variant="outline" className="mb-6">Web/App Development</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Custom Development
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Custom coding + low/no-code platforms for business problem-solving with high-performance websites and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Portfolio
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
              <h2 className="text-4xl font-bold mb-6">What We Build</h2>
              <p className="text-xl text-muted-foreground mb-8">
                From simple websites to complex web applications, we create digital solutions that drive results.
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
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">Custom websites built for performance</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">Native and cross-platform solutions</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">E-commerce</h3>
                <p className="text-sm text-muted-foreground">Online stores that convert</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Lightning-fast loading speeds</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest technologies to ensure your project is built for the future.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your requirements and create a custom development solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppDevelopment;