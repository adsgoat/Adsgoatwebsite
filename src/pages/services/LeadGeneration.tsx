import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Mail, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

const LeadGeneration = () => {
  const features = [
    "Targeted Lead Campaigns",
    "Landing Page Optimization",
    "CRM Integration",
    "Lead Nurturing",
    "A/B Testing",
    "Conversion Tracking"
  ];

  const process = [
    { step: "1", title: "Strategy", description: "Define target audience and campaign goals" },
    { step: "2", title: "Create", description: "Build high-converting landing pages and funnels" },
    { step: "3", title: "Launch", description: "Deploy multi-channel lead generation campaigns" },
    { step: "4", title: "Optimize", description: "Continuously improve based on performance data" }
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
            <Badge variant="outline" className="mb-6">Lead Generation</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Quality Lead
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Automated funnels, AI CRM integrations - strategic campaigns that attract, nurture, and convert high-quality prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Generate Leads Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Case Studies
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
              <h2 className="text-4xl font-bold mb-6">Our Lead Generation Approach</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We use data-driven strategies to identify, attract, and convert your ideal customers.
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
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Targeting</h3>
                <p className="text-sm text-muted-foreground">Precision audience targeting</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Qualification</h3>
                <p className="text-sm text-muted-foreground">High-quality lead scoring</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Conversion</h3>
                <p className="text-sm text-muted-foreground">Optimized funnel performance</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Nurturing</h3>
                <p className="text-sm text-muted-foreground">Automated follow-up sequences</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to generating high-quality leads that convert into customers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Lead Generation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a custom lead generation strategy that fills your pipeline with qualified prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Generating Leads
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Get Free Analysis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadGeneration;