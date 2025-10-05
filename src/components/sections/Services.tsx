import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Web/App Development",
      description: "Custom websites and applications built for performance, conversions, and exceptional user experience — from code-heavy to low-code.",
      features: ["Custom Web Development", "Mobile App Development", "E-commerce Solutions", "Performance Optimization"],
      badge: "Development"
    },
    {
      title: "AI Marketing", 
      description: "Leverage cutting-edge AI technology to optimize campaigns, predict trends, and automate marketing processes.",
      features: ["AI Campaign Optimization", "Predictive Analytics", "Marketing Automation", "Smart Bidding"],
      badge: "AI Powered"
    },
    {
      title: "Lead Generation",
      description: "Strategic lead generation campaigns that attract, nurture, and convert high-quality prospects into customers.",
      features: ["Targeted Lead Campaigns", "Landing Page Optimization", "CRM Integration", "Lead Nurturing"],
      badge: "Growth"
    },
    {
      title: "Social Media",
      description: "Build authentic communities and drive engagement across all social platforms with data-driven strategies.",
      features: ["Content Strategy", "Community Management", "Paid Social Advertising", "Influencer Marketing"],
      badge: "Social"
    },
    {
      title: "Content and SEO",
      description: "Dominate search, engage humans, and stay LLM-relevant — with intelligent content crafted for both Google and generative AI.",
      features: ["SEO Strategy", "Content Creation", "Technical SEO", "Local SEO"],
      badge: "Content"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The complete growth
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              marketing engine
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the tools, systems, and expertise to transform your marketing 
            from cost center to growth driver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_20px_40px_hsl(220_8%_4%/0.4)] hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Badge */}
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;