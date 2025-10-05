import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import WebAppDevelopment from "@/pages/services/WebAppDevelopment";
import AIMarketing from "@/pages/services/AIMarketing";
import LeadGeneration from "@/pages/services/LeadGeneration";
import SocialMedia from "@/pages/services/SocialMedia";
import ContentSEO from "@/pages/services/ContentSEO";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import Auth from "@/pages/Auth";
import Admin from "@/pages/Admin";
import BlogCasestudy from "./pages/BlogCasestudy";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen bg-background font-satoshi">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
              <Route path="/services/ai-marketing" element={<AIMarketing />} />
              <Route path="/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/services/social-media" element={<SocialMedia />} />
              <Route path="/services/content-seo" element={<ContentSEO />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogcaseStudies" element={<BlogCasestudy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
