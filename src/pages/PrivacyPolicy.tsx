import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to AdsGoat ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register on our website</li>
                <li>Express interest in obtaining information about us or our products and services</li>
                <li>Participate in activities on our website</li>
                <li>Contact us</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The personal information we collect may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use personal information collected via our website for a variety of business purposes including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To send you marketing and promotional communications</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To send administrative information</li>
                <li>To fulfill and manage orders and services</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations under Indian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Data Retention</h2>
              <p className="leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Your Privacy Rights (Under Indian Law)</h2>
              <p className="leading-relaxed mb-3">Under applicable Indian data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="leading-relaxed">
                We may use third-party service providers to help us operate our business and website or administer activities on our behalf. These third parties have access to your personal information only to perform specific tasks and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="leading-relaxed mb-3">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="font-medium">AdsGoat</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Capital Pk Rd, beside Lot Mobile, Cyber Hills Colony, VIP Hills,<br />
                  Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Email: info@adsgoat.in<br />
                  Phone: +91 9347847228
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;