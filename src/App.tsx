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
import LouisianaBookkeeping from "./pages/locations/LouisianaBookkeeping";
import MississippiBookkeeping from "./pages/locations/MississippiBookkeeping";
import PanamaBookkeeping from "./pages/locations/PanamaBookkeeping";
import DallasBookkeeping from "./pages/locations/DallasBookkeeping";
import DFWBookkeeping from "./pages/locations/DFWBookkeeping";
import PlanoBookkeeping from "./pages/locations/PlanoBookkeeping";
import FriscoBookkeeping from "./pages/locations/FriscoBookkeeping";
import McKinneyBookkeeping from "./pages/locations/McKinneyBookkeeping";
import FortWorthBookkeeping from "./pages/locations/FortWorthBookkeeping";
import ArlingtonBookkeeping from "./pages/locations/ArlingtonBookkeeping";
// Industry Pages
import Industries from "./pages/Industries";
import GolfCourseBookkeeping from "./pages/industries/GolfCourseBookkeeping";
import RestaurantBookkeeping from "./pages/industries/RestaurantBookkeeping";
import ConstructionBookkeeping from "./pages/industries/ConstructionBookkeeping";
import RealEstateBookkeeping from "./pages/industries/RealEstateBookkeeping";
import MedicalBookkeeping from "./pages/industries/MedicalBookkeeping";
import TechnologyBookkeeping from "./pages/industries/TechnologyBookkeeping";
import ManufacturingBookkeeping from "./pages/industries/ManufacturingBookkeeping";
import EnergyBookkeeping from "./pages/industries/EnergyBookkeeping";
import HospitalityBookkeeping from "./pages/industries/HospitalityBookkeeping";
import AgricultureBookkeeping from "./pages/industries/AgricultureBookkeeping";
// Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
// Case Studies
import CaseStudies from "./pages/CaseStudies";

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
      {/* Location Routes */}
      <Route path="/oklahoma-bookkeeping" element={<OklahomaBookkeeping />} />
      <Route path="/texas-bookkeeping" element={<TexasBookkeeping />} />
      <Route path="/florida-bookkeeping" element={<FloridaBookkeeping />} />
      <Route path="/new-mexico-bookkeeping" element={<NewMexicoBookkeeping />} />
      <Route path="/louisiana-bookkeeping" element={<LouisianaBookkeeping />} />
      <Route path="/mississippi-bookkeeping" element={<MississippiBookkeeping />} />
      <Route path="/panama-bookkeeping" element={<PanamaBookkeeping />} />
      {/* Dallas / DFW Metro Routes */}
      <Route path="/dallas-bookkeeping" element={<DallasBookkeeping />} />
      <Route path="/dfw-bookkeeping" element={<DFWBookkeeping />} />
      <Route path="/plano-bookkeeping" element={<PlanoBookkeeping />} />
      <Route path="/frisco-bookkeeping" element={<FriscoBookkeeping />} />
      <Route path="/mckinney-bookkeeping" element={<McKinneyBookkeeping />} />
      <Route path="/fort-worth-bookkeeping" element={<FortWorthBookkeeping />} />
      <Route path="/arlington-bookkeeping" element={<ArlingtonBookkeeping />} />
      {/* Industry Routes */}
      <Route path="/industries" element={<Industries />} />
      <Route path="/golf-course-bookkeeping" element={<GolfCourseBookkeeping />} />
      <Route path="/restaurant-bookkeeping" element={<RestaurantBookkeeping />} />
      <Route path="/construction-bookkeeping" element={<ConstructionBookkeeping />} />
      <Route path="/real-estate-bookkeeping" element={<RealEstateBookkeeping />} />
      <Route path="/medical-bookkeeping" element={<MedicalBookkeeping />} />
      <Route path="/technology-bookkeeping" element={<TechnologyBookkeeping />} />
      <Route path="/manufacturing-bookkeeping" element={<ManufacturingBookkeeping />} />
      <Route path="/energy-bookkeeping" element={<EnergyBookkeeping />} />
      <Route path="/hospitality-bookkeeping" element={<HospitalityBookkeeping />} />
      <Route path="/agriculture-bookkeeping" element={<AgricultureBookkeeping />} />
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Case Studies */}
      <Route path="/case-studies" element={<CaseStudies />} />
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