import MainLayout from "../../components/Layouts/MainLayout";

import HeroSection from "../../components/common/Auth/landing/HeroSection";
import StatsSection from "../../components/common/Auth/landing/StatsSection";
import TrackingSection from "../../components/common/Auth/landing/TrackingSection";
import FeaturesSection from "../../components/common/Auth/landing/FeaturesSection";
import HowItWorksSection from "../../components/common/Auth/landing/HowItWorksSection";
import RoutesSection from "../../components/common/Auth/landing/RoutesSection";
import CtaSection from "../../components/common/Auth/landing/CtaSection";

export default function LandingPage() {
  return (
    <MainLayout>
      <div id="top">
        <HeroSection />
        <StatsSection />
        <TrackingSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RoutesSection />
        <CtaSection />
      </div>
    </MainLayout>
  );
}
