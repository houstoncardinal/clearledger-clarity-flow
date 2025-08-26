import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getBreadcrumbSchema } from '@/utils/schemaMarkup';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy | ClearLedger Solutions"
        description="ClearLedger Solutions privacy policy. Learn how we collect, use, and protect your personal information when you use our bookkeeping and financial services."
        keywords="privacy policy, data protection, personal information, ClearLedger privacy"
        canonical="/privacy-policy"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <main className="min-h-screen bg-background">
        <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  ClearLedger Solutions LLC collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Contact us for services or consultation</li>
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Provide and improve our bookkeeping services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you updates and newsletters (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 