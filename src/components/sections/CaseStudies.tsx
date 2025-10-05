import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const CaseStudies = () => {
  const location = useLocation();
  const cases = [
    {
      client: "SaaS Product",
      industry: "B2B Software",
      challenge: "Struggling with high CAC and low conversion rates",
      results: {
        improvement: "180% ROAS increase",
        metric1: "23% lower CAC",
        metric2: "1.2x conversion rate"
      },
      description: "Rebuilt entire funnel with AI-driven targeting and dynamic creative optimization.",
      color: "from-primary to-accent"
    },
    {
      client: "E-commerce Business",
      industry: "E-commerce",
      challenge: "Seasonal business with unpredictable demand patterns",
      results: {
        improvement: "202% revenue growth",
        metric1: "5x ROAS",
        metric2: "18% repeat customer rate"
      },
      description: "Implemented predictive analytics and automated inventory-based campaigns.",
      color: "from-accent to-primary"
    },
    {
      client: "HealthTech Startup",
      industry: "Healthcare",
      challenge: "Complex compliance requirements limiting ad reach",
      results: {
        improvement: "112% lead increase",
        metric1: "42% cost reduction",
        metric2: "2.8x qualified leads"
      },
      description: "Created compliant creative framework with precision audience modeling.",
      color: "from-primary/80 to-accent/80"
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10">
            Case Studies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Real results from
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              real partnerships
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed marketing performance for companies just like yours.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cases.map((study, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_20px_40px_hsl(220_8%_4%/0.4)] hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Client & Industry */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{study.client}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Main Result */}
                  <div className={`bg-gradient-to-r ${study.color} rounded-lg text-center`}>
                    <div className="text-3xl font-bold text-primary-foreground mb-2">
                      {study.results.improvement}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Primary Result
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{study.results.metric1}</div>
                      <div className="text-xs text-muted-foreground">Additional Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{study.results.metric2}</div>
                      <div className="text-xs text-muted-foreground">Bonus Metric</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
          <Link to="/blogcaseStudies">View Full Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;