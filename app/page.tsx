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
import Link from 'next/link'
import LandingHero from './components/landing/LandingHero'
import LandingTestimonials from './components/landing/LandingTestimonials'
import LandingServices from './components/landing/LandingServices'
import LandingHeader from './components/landing/LandingHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LandingCVScan from './components/landing/LandingCVScan'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Enhanced Header with shadcn/ui styling */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <LandingHeader/>
      </div>
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <LandingHero/>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16 bg-background">
        <LandingServices/>
      </section>


      {/* CV Scan Section */}
      <section className="py-16 bg-background">
        <LandingCVScan/>
      </section>

      {/* Enhanced Trust and Problem Section */}
      <section className="py-16 bg-muted/30">
        <TrustAndProblem />
      </section>

      {/* Enhanced Pricing Preview with Card Components */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <PricingPreview />
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <LandingTestimonials/>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-background border-t">
        <Footer />
      </footer>
      
      {/* Enhanced Career Mate Component */}
      <div className="fixed bottom-4 right-4 z-50">
        <CareerMate />
      </div>
    </main>
  )
} 