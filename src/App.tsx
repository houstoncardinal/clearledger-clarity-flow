import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import QuickBooksServices from "./pages/QuickBooksServices";
import MonthlyManagement from "./pages/MonthlyManagement";
import BillingAccountsPayable from "./pages/BillingAccountsPayable";
import CleanupAdvisory from "./pages/CleanupAdvisory";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

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
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
