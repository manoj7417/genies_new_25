import Hero from './components/Hero'
import TrustAndProblem from './components/TrustAndProblem'
import CoreFeatures from './components/CoreFeatures'
import SocialProof from './components/SocialProof'
import PricingPreview from './components/PricingPreview'
import TrustAuthority from './components/TrustAuthority'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import CareerMate from './components/CareerMate'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustAndProblem />
      <CoreFeatures />
      {/* <SocialProof /> */}
      <PricingPreview />
      {/* <TrustAuthority /> */}
      {/* <FooterCTA /> */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <Testimonials />
      <FAQ />

      {/* <CTA /> */}
      <Footer />
      
      {/* Chat Widget */}
      <CareerMate />
    </main>
  )
} 