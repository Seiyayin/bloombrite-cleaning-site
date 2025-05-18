import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesOverview from "@/pages/ServicesOverview";
import ServiceDetail from "@/pages/ServiceDetail";
import LocationsOverview from "@/pages/LocationsOverview";
import LocationDetail from "@/pages/LocationDetail";
import Contact from "@/pages/Contact";
import GetQuote from "@/pages/GetQuote";
import Reviews from "@/pages/Reviews";
import Faq from "@/pages/Faq";
import ThankYou from "@/pages/ThankYou";
import Accessibility from "@/pages/Accessibility";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesOverview} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/locations" component={LocationsOverview} />
      <Route path="/locations/:slug" component={LocationDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/get-quote" component={GetQuote} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={Faq} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/accessibility" component={Accessibility} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Router />
          </div>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
