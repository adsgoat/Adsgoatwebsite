import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Code, Bot, Target, Share2, FileText } from "lucide-react";
import adsgoatLogo from "@/assets/adsgoat-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  // ✅ Services Data with Icons & Redirect Links
  const services = [
    {
      icon: Code,
      title: "Web/App Development",
      link: "/services/web-app-development",
    },
    {
      icon: Bot,
      title: "AI Marketing",
      link: "/services/ai-marketing",
    },
    {
      icon: Target,
      title: "Lead Generation",
      link: "/services/lead-generation",
    },
    {
      icon: Share2,
      title: "Social Media",
      link: "/services/social-media",
    },
    {
      icon: FileText,
      title: "Content and SEO",
      link: "/services/content-seo",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={adsgoatLogo}
              alt="AdsGoat Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(true)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(false)}
              >
                <Link
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 flex items-center ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        openDropdown ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  )}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-lg border border-border overflow-hidden ring-1 ring-black/5"
                      >
                        {services.map((service, idx) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.link}
                              to={service.link}
                              className={`flex items-center gap-3 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200 ${
                                idx !== services.length - 1
                                  ? "border-b border-border/60"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center justify-center w-7 h-7 bg-primary/10 text-primary rounded-md">
                                <Icon size={16} />
                              </div>
                              <span>{service.title}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Button variant="default" size="sm" className="ml-4">
            <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(!openDropdown)}
                          className="w-full text-left text-base font-medium text-foreground hover:text-primary flex justify-between items-center"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              openDropdown ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-3 bg-white rounded-md shadow-md border border-border p-3 space-y-2"
                            >
                              {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.link}
                                    to={service.link}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md px-3 py-2 transition"
                                  >
                                    <Icon size={16} className="text-primary" />
                                    {service.title}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-base font-medium transition-colors duration-300 ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="default" size="sm" className="w-full mt-4">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
