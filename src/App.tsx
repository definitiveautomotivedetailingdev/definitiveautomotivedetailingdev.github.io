
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PackagesPricing from "./pages/PackagesPricing";
import AdditionalServices from "./pages/AdditionalServices";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import References from "./pages/References";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/packages-pricing" element={<PackagesPricing />} />
            <Route path="/additional-services" element={<AdditionalServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/gallery" element={<References />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
