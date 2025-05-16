import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./Index";
import NotFound from "./pages/NotFound";

// Service Pages
import HomeLoanPage from "./pages/services/HomeLoanPage";
import PropertyLoanPage from "./pages/services/PropertyLoanPage";
import BalanceTransferPage from "./pages/services/BalanceTransferPage";
import BusinessLoanPage from "./pages/services/BusinessLoanPage";

// Calculator Pages
import BalanceTransferCalculatorPage from "./pages/calculators/BalanceTransferCalculatorPage";
import EMICalculatorPage from "./pages/calculators/EMICalculatorPage";
import EligibilityCalculatorPage from "./pages/calculators/EligibilityCalculatorPage";
import ForecloseCalculatorPage from "./pages/calculators/ForecloseCalculatorPage";
import PrePaymentCalculatorPage from "./pages/calculators/PrePaymentCalculatorPage";

// Other Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/services/home-loan" element={<HomeLoanPage />} />
          <Route path="/services/property-loan" element={<PropertyLoanPage />} />
          <Route path="/services/balance-transfer" element={<BalanceTransferPage />} />
          <Route path="/services/business-loan" element={<BusinessLoanPage />} />
          
          {/* Calculator Pages */}
          <Route path="/calculators/emi" element={<EMICalculatorPage />} />
          <Route path="/calculators/eligibility" element={<EligibilityCalculatorPage />} />
          <Route path="/calculators/foreclose" element={<ForecloseCalculatorPage />} />
          <Route path="/calculators/pre-payment" element={<PrePaymentCalculatorPage />} />
          <Route path="/calculators/balance-transfer" element={<BalanceTransferCalculatorPage />} />
          
          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offers" element={<OffersPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
