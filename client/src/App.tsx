import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesOverview from "@/pages/ServicesOverview";
import ServiceDetail from "@/pages/ServiceDetail";
import PowerWashing from "@/pages/services/PowerWashing";
import CarpetCleaning from "@/pages/services/CarpetCleaning";
import WindowCleaning from "@/pages/services/WindowCleaning";
import LocationsOverview from "@/pages/LocationsOverview";
import LocationDetail from "@/pages/LocationDetail";
import Contact from "@/pages/Contact";
import GetQuote from "@/pages/GetQuote";
import Reviews from "@/pages/Reviews";
import Faq from "@/pages/Faq";
import ThankYou from "@/pages/ThankYou";
import Accessibility from "@/pages/Accessibility";
import BlogOverview from "@/pages/blog/BlogOverview";
import ApplianceCleaning from "@/pages/blog/ApplianceCleaning";
import MemorialDayCleaning from "@/pages/blog/MemorialDayCleaning";
import CityBlogIndex from "@/pages/blog/cities/CityBlogIndex";
import WixomBlog from "@/pages/blog/cities/WixomBlog";
import NoviBlog from "@/pages/blog/cities/NoviBlog";
import WestBloomfieldBlog from "@/pages/blog/cities/WestBloomfieldBlog";
import LivoniaBlog from "@/pages/blog/cities/LivoniaBlog";
import NoviCleaningGuide from "@/pages/blog/NoviCleaningGuide";
import Careers from "@/pages/Careers";
import BitcoinPayments from "@/pages/BitcoinPayments";
import Checklist from "@/pages/Checklist";
import NoviDetailed from "@/pages/locations/NoviDetailed";
import PseoPage from "@/pages/PseoPage";
import ServiceAreas from "@/pages/ServiceAreas";
import CityHub from "@/pages/CityHub";
import ServiceHub from "@/pages/ServiceHub";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingTextChat from "@/components/shared/FloatingTextChat";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesOverview} />
      <Route path="/services/window-cleaning" component={WindowCleaning} />
      <Route path="/services/power-washing" component={PowerWashing} />
      <Route path="/services/carpet-cleaning" component={CarpetCleaning} />
      <Route path="/services/general-cleaning" component={ServiceDetail} />
      <Route path="/services/standard-cleaning" component={ServiceDetail} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/locations" component={LocationsOverview} />
      <Route path="/locations/novi" component={NoviDetailed} />
      <Route path="/novi" component={NoviDetailed} />
      <Route path="/locations/:slug" component={LocationDetail} />
      <Route path="/wixom" component={LocationDetail} />
      <Route path="/livonia" component={LocationDetail} />
      <Route path="/milford" component={LocationDetail} />
      <Route path="/commerce" component={LocationDetail} />
      <Route path="/walled-lake" component={LocationDetail} />
      <Route path="/west-bloomfield" component={LocationDetail} />
      <Route path="/northville" component={LocationDetail} />
      <Route path="/keego-harbor" component={LocationDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={GetQuote} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={Faq} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/accessibility" component={Accessibility} />
      <Route path="/blog" component={BlogOverview} />
      <Route path="/blog/cities" component={CityBlogIndex} />
      <Route path="/blog/cities/wixom" component={WixomBlog} />
      <Route path="/blog/cities/novi" component={NoviBlog} />
      <Route path="/blog/cities/west-bloomfield" component={WestBloomfieldBlog} />
      <Route path="/blog/cities/livonia" component={LivoniaBlog} />
      <Route path="/blog/novi-house-cleaning-guide" component={NoviCleaningGuide} />
      <Route path="/blog/inside-appliance-cleaning" component={ApplianceCleaning} />
      <Route path="/blog/memorial-day-cleaning" component={MemorialDayCleaning} />
      <Route path="/careers" component={Careers} />
      <Route path="/bitcoin-payments" component={BitcoinPayments} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/pay-with-bitcoin" component={BitcoinPayments} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/services/:service" component={ServiceHub} />
      <Route path="/mi/:city/:service" component={PseoPage} />
      <Route path="/mi/:city" component={CityHub} />
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
        <FloatingTextChat />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
