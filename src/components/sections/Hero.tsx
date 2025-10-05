import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-humanized-ai.jpg";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 39, 50, 0.9), rgba(33, 39, 50, 0.7), rgba(0, 255, 136, 0.1)), url(${heroImage})`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left space-y-8">

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                We don't just run campaigns.
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  We build momentum.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              At AdsGoat, you get more than campaign clicks—you get real business growth. With analytics, creative insight, and smart automation, we deliver results that matter. Ready for your next breakthrough?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Let's Talk Strategy
              </Button> */}
              <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
                <Link to="/contact">Let's Talk Strategy</Link>
              </Button>
              
              <Button variant="dark" size="lg" className="text-lg px-8 py-4">
              <Link to="/blogcaseStudies">See Case Studies</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Trusted by growth-focused brands
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground/60">
                <span className="text-sm font-medium">15000+ Campaigns</span>
                <span className="text-sm">•</span>
                <span className="text-sm font-medium">$30M+ Ad Spend</span>
                <span className="text-sm">•</span>
                <span className="text-sm font-medium">90% Client Retention</span>
              </div>
            </div>
          </div>

          {/* Right: Visual space handled by background image */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;