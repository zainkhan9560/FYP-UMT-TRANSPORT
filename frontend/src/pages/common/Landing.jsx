import MainLayout from '../components/common/Layouts/MainLayout'

import HeroSection from '../components/common/landing/HeroSection'
import StatsSection from '../components/common/landing/StatsSection'
import TrackingSection from '../components/common/landing/TrackingSection'
import FeaturesSection from '../components/common/landing/FeaturesSection'
import HowItWorksSection from '../components/common/landing/HowItWorksSection'
import RoutesSection from '../components/common/landing/RoutesSection'
import CtaSection from '../components/common/landing/CtaSection'

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
  )
}