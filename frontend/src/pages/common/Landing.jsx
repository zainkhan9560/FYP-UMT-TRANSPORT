import HeroSection from "../../components/common/landing/HeroSection";
import StatsSection from "../../components/common/landing/StatsSection";
import TrackingSection from "../../components/common/landing/TrackingSection";
import RoutesSection from "../../components/common/landing/RoutesSection";
import HowItWorksSection from "../../components/common/landing/HowItWorksSection";
import FeaturesSection from "../../components/common/landing/FeaturesSection";
import CtaSection from "../../components/common/landing/CtaSection";
import Navbar from "../../components/common/landing/Navbar";
import Footer from "../../components/common/landing/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />
      <div className="h-[35px]" aria-hidden="true" />
      <HeroSection />
      <StatsSection />
      <TrackingSection />
      <RoutesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
