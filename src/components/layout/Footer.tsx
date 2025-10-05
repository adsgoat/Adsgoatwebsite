import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/src/assets/adsgoat-logo.png" alt="AdsGoat Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground">AdsGoat</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We don't just run campaigns. We build momentum. 
              Transforming digital marketing through AI and human creativity.
            </p>
            <Badge variant="outline" className="border-primary text-primary">
              AI-Powered Growth
            </Badge>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/services/web-app-development" className="hover:text-primary transition-colors">Web/App Development</a></li>
              <li><a href="/services/ai-marketing" className="hover:text-primary transition-colors">AI Marketing</a></li>
              <li><a href="/services/lead-generation" className="hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="/services/social-media" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="/services/content-seo" className="hover:text-primary transition-colors">Content & SEO</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/#case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="leading-relaxed">
                Capital Pk Rd, beside Lot Mobile, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
              </li>
              <li>
                <strong className="text-foreground">Phone:</strong> +91 9347847228
              </li>
              <li>
                <strong className="text-foreground">Email:</strong> info@adsgoat.in
              </li>
              <li>
                <strong className="text-foreground">Business Hours:</strong><br />
                Mon - Fri: 10:30 AM - 7:30 PM IST
              </li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 AdsGoat. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;