import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Target, BarChart3, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

const AIMarketing = () => {
  const features = [
    "AI Campaign Optimization",
    "Predictive Analytics",
    "Marketing Automation",
    "Smart Bidding",
    "Audience Targeting",
    "Performance Prediction"
  ];

  const benefits = [
    { title: "40% Better ROI", description: "AI-optimized campaigns deliver superior returns" },
    { title: "24/7 Optimization", description: "Continuous campaign improvements around the clock" },
    { title: "Data-Driven Insights", description: "Predictive analytics for smarter decisions" },
    { title: "Automated Scaling", description: "Intelligent budget allocation across channels" }
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
            <Badge variant="outline" className="mb-6">AI Marketing</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Marketing
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Chatbots, predictive analytics, AI content creation - leverage cutting-edge technology for unprecedented marketing growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Unlock AI Power
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                See AI in Action
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
              <h2 className="text-4xl font-bold mb-6">AI That Works For You</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our advanced AI algorithms continuously learn and optimize your marketing campaigns for maximum performance.
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
                <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">Set it and forget it marketing</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Continuously improving algorithms</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Smart Targeting</h3>
                <p className="text-sm text-muted-foreground">AI-powered audience insights</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground">Forecast future performance</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose AI Marketing?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of artificial intelligence in transforming your marketing results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <h3 className="font-bold text-2xl text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Experience AI Marketing?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our AI technology transform your marketing campaigns and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start AI Campaign
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Book Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMarketing;