import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RiskDetails from "./pages/RiskDetails";
import CrossSaleDetails from "./pages/CrossSaleDetails";
import SupplierDetails from "./pages/SupplierDetails";
import AllRiskCases from "./pages/AllRiskCases";
import AllAtRiskClients from "./pages/AllAtRiskClients";
import AllCrossSaleCategories from "./pages/AllCrossSaleCategories";
import AllCrossSaleOpportunities from "./pages/AllCrossSaleOpportunities";
import AllSupplierCategories from "./pages/AllSupplierCategories";
import AllSupplierCandidates from "./pages/AllSupplierCandidates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="dashboard-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/risk/:id" element={<RiskDetails />} />
            <Route path="/cross-sale/:id" element={<CrossSaleDetails />} />
            <Route path="/supplier/:id" element={<SupplierDetails />} />
            <Route path="/all-risk-cases" element={<AllRiskCases />} />
            <Route path="/all-at-risk-clients" element={<AllAtRiskClients />} />
            <Route path="/all-cross-sale-categories" element={<AllCrossSaleCategories />} />
            <Route path="/all-cross-sale-opportunities" element={<AllCrossSaleOpportunities />} />
            <Route path="/all-supplier-categories" element={<AllSupplierCategories />} />
            <Route path="/all-supplier-candidates" element={<AllSupplierCandidates />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
