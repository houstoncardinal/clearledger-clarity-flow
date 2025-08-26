import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getBreadcrumbSchema } from '@/utils/schemaMarkup';

const CookiePolicy = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Cookie Policy", url: "/cookie-policy" }
  ];

  return (
    <>
      <SEO 
        title="Cookie Policy | ClearLedger Solutions"
        description="ClearLedger Solutions cookie policy. Learn how we use cookies and similar technologies to improve your experience on our website."
        keywords="cookie policy, cookies, ClearLedger cookies, website cookies"
        canonical="/cookie-policy"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <main className="min-h-screen bg-background">
        <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  What Are Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Session Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Temporary cookies that are deleted when you close your browser. They help maintain your session while using our website.
                    </p>
                  </div>
                  <div className="bg-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Persistent Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Cookies that remain on your device for a set period. They remember your preferences and settings for future visits.
                    </p>
                  </div>
                  <div className="bg-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Cookies set by third-party services we use, such as analytics tools and social media platforms.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Managing Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Cookie consent: We provide options to accept or decline non-essential cookies</li>
                  <li>Third-party opt-outs: You can opt out of third-party cookies through their respective websites</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Your Choices
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Accept or decline cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set browser preferences to block future cookies</li>
                  <li>Contact us with questions about our cookie usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our Cookie Policy, please contact us:
                </p>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-foreground">
                    <strong>Email:</strong> jj@yourclearledger.com<br />
                    <strong>Phone:</strong> (903) 815-9488<br />
                    <strong>Address:</strong> Whitewright, TX
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
};

export default CookiePolicy; 