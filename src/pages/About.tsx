import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Lightbulb, Handshake, BookOpen } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const values = [
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "People-First Thinking",
      description: "We don't see clients or teammates as numbers. We've taken calls at midnight, stayed late to help someone finish their first project, and trained interns like they were future leaders — because relationships always come before revenue."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Clarity Over Complexity",
      description: "No jargon. No overthinking. When a new teammate joins, we explain it simply. When a client is stuck, we break it down. Simplicity is our strategy — and it saves everyone time, stress, and energy."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Consistent Learning",
      description: "We've seen interns pitch ideas that got implemented. We've seen founders ask juniors for feedback. Learning never stops here — it doesn't matter where you sit or what your title says."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Action With Intention",
      description: "We don't chase trends for the sake of it. Every strategy we run, every product we build, starts with one question: Why does this matter? If it helps someone grow, we're in. If it's fluff, we leave it out."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Ownership Mindset",
      description: "Whether you're managing a campaign or designing a landing page, you're trusted to own it. We don't micromanage. We empower. And when mistakes happen? We fix them, learn, and move forward—together."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Open Communication",
      description: "Everyone here has a voice. We've had ideas from team lunches lead to big process changes. Our doors (and DMs) are open — because great work needs honest conversation, not just meetings."
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
            <Badge variant="outline" className="mb-6">About AdsGoat</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              We're not just building a business.
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> We're building a place where people grow with us.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Built by entrepreneurs. Driven by purpose. Focused on long-term impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Adsgoat was founded by three passionate individuals who didn't just want to start a company they wanted to build something meaningful. With entrepreneurial spirit, long nights, and an unshakable belief in purposeful growth, they began this journey not as business owners, but as builders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Founders Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">About the Founders</h2>
              <div className="text-left space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The founders of Adsgoat didn't just launch a business they built a movement around mindset.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience building brands from scratch, they've seen the challenges firsthand: long nights, uncertain beginnings, client rejections, tight deadlines, and the constant pressure to prove their ideas. But they chose not to settle. They chose to build.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Their vision was never just about profit. It was about creating a space where people can learn, grow, and lead with purpose.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As entrepreneurs, they bring energy, grit, and empathy into everything we do. Their journey is filled with lessons and those lessons now shape the heart of Adsgoat. Whether mentoring young talent, refining client strategies, or planning the next innovation, they stay close to the mission: to build with intention and lead with care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, their leadership is not defined by titles but by the values they inspire across the team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Today Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-12">What We Do Today</h2>
              <p className="text-xl text-muted-foreground mb-12">
                At Adsgoat we support growing brands through three core pillars:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Performance Ads</li>
                    <li>• Branding Campaigns</li>
                    <li>• Social Media Strategy</li>
                    <li>• Creative Content & Execution</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Web & App Development</h3>
                  <p className="text-sm text-muted-foreground mb-3">(via our trusted tech partners)</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Corporate Websites</li>
                    <li>• Custom Web Applications</li>
                    <li>• UX/UI and Mobile-first Design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Outsourcing & Team Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Digital marketing professionals</li>
                    <li>• Dedicated campaign support</li>
                    <li>• White-labeled execution for partner agencies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">How We Work — Real Culture. Not Just Posters.</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At Adsgoat, we believe culture isn't written in HR documents. It's built in the way we show up, support each other, and solve real problems together. Here's what that looks like — day to day, person to person.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="text-primary mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
              <div className="text-left space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the years ahead, we see Adsgoat becoming more than a service provider.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision ourselves as a full-scale digital ecosystem—blending marketing, product development, and education. We want to build tools, launch platforms, train talent, and most importantly, stay real while growing big.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                  Our future isn't about getting bigger fast—it's about getting better every day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Want to grow with us? Or just have a real conversation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's talk about where you are—and where we can go together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact"> Work With Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services"> Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;