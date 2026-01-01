import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useScrollToTop } from "./hooks/useScrollToTop";
import MobileToolbar from "./components/MobileToolbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Import pages directly to avoid lazy loading issues on live site
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import QuickBooksServices from "./pages/QuickBooksServices";
import MonthlyManagement from "./pages/MonthlyManagement";
import BillingAccountsPayable from "./pages/BillingAccountsPayable";
import CleanupAdvisory from "./pages/CleanupAdvisory";
import CheckOrdering from "./pages/CheckOrdering";
import EnhancedCheckOrdering from "./pages/EnhancedCheckOrdering";
import Admin from "./pages/Admin";
import Bookkeeping from "./pages/Bookkeeping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
// Location Pages
import OklahomaBookkeeping from "./pages/locations/OklahomaBookkeeping";
import TexasBookkeeping from "./pages/locations/TexasBookkeeping";
import FloridaBookkeeping from "./pages/locations/FloridaBookkeeping";
import NewMexicoBookkeeping from "./pages/locations/NewMexicoBookkeeping";
import PanamaBookkeeping from "./pages/locations/PanamaBookkeeping";
// Industry Pages
import GolfCourseBookkeeping from "./pages/industries/GolfCourseBookkeeping";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/consultation" element={<Consultation />} />
      <Route path="/quickbooks-services" element={<QuickBooksServices />} />
      <Route path="/monthly-management" element={<MonthlyManagement />} />
      <Route path="/billing-accounts-payable" element={<BillingAccountsPayable />} />
      <Route path="/cleanup-advisory" element={<CleanupAdvisory />} />
      <Route path="/check-ordering" element={<CheckOrdering />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/bookkeeping" element={<Bookkeeping />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <LanguageProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <div className="w-full overflow-x-hidden">
                  <AppContent />
                </div>
                <MobileToolbar />
              </BrowserRouter>
            </CartProvider>
          </LanguageProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
