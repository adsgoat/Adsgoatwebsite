import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Recognition = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Recognized by Government of India</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We are officially recognized under national programs that promote credibility, transparency, and ease of doing business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-xl font-bold mb-4">Udyam (MSME) Registration</h3>
            <p className="text-muted-foreground mb-6">
              UDYAM-TS-02-0116285 • Verified MSME registered entity
            </p>
            <Button 
              className="w-full" 
              onClick={() => window.open('/documents/msme-certificate.pdf', '_blank')}
            >
              View Certificate
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4">Startup India (DPIIT) Recognition</h3>
            <p className="text-muted-foreground mb-6">
              DIPP143365 • Recognized startup under DPIIT
            </p>
            <Button 
              className="w-full"
              onClick={() => window.open('/documents/dpiit-certificate.pdf', '_blank')}
            >
              View Certificate
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recognition;