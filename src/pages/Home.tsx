import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Recognition from "@/components/sections/Recognition";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Hero />
      <Services />
      <Recognition />
      <CaseStudies />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;