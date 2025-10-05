import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies help us understand how you use our website and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="leading-relaxed mb-3">AdsGoat uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and personalize your experience</li>
                <li><strong>Marketing Cookies:</strong> Track your online activity to help advertisers deliver more relevant advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Strictly Necessary Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are essential for you to navigate our website and use its features. Without these cookies, services you have requested cannot be provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Analytics and Performance Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies collect information about how visitors use our website, such as which pages visitors go to most often. We use this information to improve how our website works and to understand user behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3.3 Functionality Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies allow our website to remember choices you make and provide enhanced, more personalized features. They may also be used to provide services you have requested.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3.4 Targeting or Advertising Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="leading-relaxed mb-3">
                We may use third-party services that also set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms (LinkedIn, Facebook, etc.) for social sharing features</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Customer support tools for chat functionality</li>
              </ul>
              <p className="leading-relaxed mt-3">
                These third parties have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Managing Cookies</h2>
              <p className="leading-relaxed mb-3">
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
              </p>
              <p className="leading-relaxed">
                Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Cookie Retention Period</h2>
              <p className="leading-relaxed">
                The length of time a cookie remains on your device depends on its type. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or you delete them.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Updates to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="leading-relaxed mb-3">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;