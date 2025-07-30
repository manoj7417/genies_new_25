import LandingHero from '../components/landing/LandingHero'
import LandingFeatures from '../components/landing/LandingFeatures'
import LandingServices from '../components/landing/LandingServices'
import LandingTestimonials from '../components/landing/LandingTestimonials'
import LandingCTA from '../components/landing/LandingCTA'
import LandingHeader from '../components/landing/LandingHeader'
import LandingFooter from '../components/landing/LandingFooter'
import CareerMate from '../components/CareerMate'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <LandingHeader />
      <LandingHero />
      {/* <LandingFeatures /> */}
      <LandingServices />
      <LandingTestimonials />
      {/* <LandingCTA /> */}
      <LandingFooter />
      
      {/* Chat Widget */}
      <CareerMate />
    </main>
  )
} 