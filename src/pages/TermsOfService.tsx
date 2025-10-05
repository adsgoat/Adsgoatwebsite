import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using AdsGoat's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="leading-relaxed">
                AdsGoat provides digital marketing services including but not limited to AI-powered marketing optimization, web and app development, lead generation, social media management, content creation, and SEO services. The specific scope of services will be detailed in individual service agreements or proposals.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed mb-3">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the services or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms will be specified in individual service agreements. Generally, payment is required before services commence or as per the payment schedule agreed upon. Late payments may result in service suspension and may incur additional charges as per applicable Indian law.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality on the AdsGoat website, including but not limited to text, graphics, logos, and software, are the exclusive property of AdsGoat and are protected by Indian and international copyright, trademark, and other intellectual property laws. Client deliverables and intellectual property rights will be addressed in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Confidentiality</h2>
              <p className="leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of business. This includes business strategies, marketing plans, financial information, and other sensitive data. Specific confidentiality terms will be outlined in Non-Disclosure Agreements (NDAs) as applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Service Modifications and Termination</h2>
              <p className="leading-relaxed">
                AdsGoat reserves the right to modify, suspend, or discontinue any aspect of our services at any time. We may also terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by Indian law, AdsGoat shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
              <p className="leading-relaxed">
                In the event of any dispute, both parties agree to first attempt resolution through good faith negotiations. If unresolved, disputes may be settled through arbitration in accordance with the Arbitration and Conciliation Act, 1996, in Hyderabad, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to update or modify these Terms of Service at any time. Continued use of our services after such changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="leading-relaxed mb-3">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="font-medium">AdsGoat</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Capital Pk Rd, beside Lot Mobile, Cyber Hills Colony, VIP Hills,<br />
                  Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Email: info@adsgoat.in<br />
                  Phone: +91 9347847228<br />
                  Business Hours: Mon - Fri: 10:30 AM - 7:30 PM IST
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

export default TermsOfService;