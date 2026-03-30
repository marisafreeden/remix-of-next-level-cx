import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Pricing from "./pages/Pricing.tsx";
import UnifiedCommunications from "./pages/UnifiedCommunications.tsx";
import SipTrunking from "./pages/SipTrunking.tsx";
import VideoMessaging from "./pages/VideoMessaging.tsx";
import BusinessSMS from "./pages/BusinessSMS.tsx";
import VoiceChatbots from "./pages/VoiceChatbots.tsx";
import Resources from "./pages/Resources.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/unified-communications" element={<UnifiedCommunications />} />
          <Route path="/sip-trunking" element={<SipTrunking />} />
          <Route path="/video-messaging" element={<VideoMessaging />} />
          <Route path="/business-sms" element={<BusinessSMS />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
