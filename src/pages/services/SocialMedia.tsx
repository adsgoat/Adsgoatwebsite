import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Heart, MessageCircle, Camera, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

const SocialMedia = () => {
  const features = [
    "Content Strategy",
    "Community Management",
    "Paid Social Advertising",
    "Influencer Marketing",
    "Social Commerce",
    "Analytics & Reporting"
  ];

  const platforms = [
    { name: "Facebook", description: "Build communities and drive engagement" },
    { name: "Instagram", description: "Visual storytelling and brand awareness" },
    { name: "LinkedIn", description: "B2B networking and thought leadership" },
    { name: "TikTok", description: "Viral content and younger demographics" }
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
            <Badge variant="outline" className="mb-6">Social Media Marketing</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Social Media
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Multi-channel, influencer campaigns, AI scheduling - build authentic communities with data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Boost Your Presence
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                See Our Work
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
              <h2 className="text-4xl font-bold mb-6">Complete Social Media Solutions</h2>
              <p className="text-xl text-muted-foreground mb-8">
                From content creation to community management, we handle every aspect of your social media presence.
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
                <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Engaging posts that resonate</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Community Building</h3>
                <p className="text-sm text-muted-foreground">Foster loyal brand advocates</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Engagement</h3>
                <p className="text-sm text-muted-foreground">Real-time audience interaction</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Visual Content</h3>
                <p className="text-sm text-muted-foreground">Eye-catching graphics and videos</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Platforms We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We know the ins and outs of every major social media platform to maximize your reach and engagement.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Social Media?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a social media strategy that builds your brand and drives meaningful engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Social Strategy
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Audit My Accounts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;