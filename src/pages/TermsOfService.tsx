import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getBreadcrumbSchema } from '@/utils/schemaMarkup';

const TermsOfService = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms-of-service" }
  ];

  return (
    <>
      <SEO 
        title="Terms of Service | ClearLedger Solutions"
        description="ClearLedger Solutions terms of service. Read our terms and conditions for using our bookkeeping and financial management services."
        keywords="terms of service, terms and conditions, ClearLedger terms, service agreement"
        canonical="/terms-of-service"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <main className="min-h-screen bg-background">
        <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the services of ClearLedger Solutions LLC, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Services Description
                </h2>
                <p className="text-muted-foreground mb-4">
                  ClearLedger Solutions LLC provides bookkeeping, financial management, and advisory services including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>QuickBooks Online and Desktop bookkeeping</li>
                  <li>Monthly reconciliation and reporting</li>
                  <li>Accounts payable management</li>
                  <li>Financial cleanup and advisory services</li>
                  <li>Compliance and regulatory support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain timely communication</li>
                  <li>Provide necessary access to financial records</li>
                  <li>Review and approve work in a timely manner</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Payment Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Invoices are due within 30 days of issue</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All fees are subject to applicable taxes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Confidentiality
                </h2>
                <p className="text-muted-foreground mb-4">
                  We maintain strict confidentiality of all client information and financial data. We will not disclose any confidential information without your written consent, except as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  ClearLedger Solutions LLC's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-foreground">
                    <strong>Email:</strong> admin@yourclearledger.com<br />
                    <strong>Phone:</strong> (903) 815-9488<br />
                    <strong>Address:</strong> Whitewright, TX (Serving clients worldwide)
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

export default TermsOfService; 