'use client'

import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works')
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center pt-20">
          {/* Main Content */}
          <div className="text-center max-w-4xl">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <CheckCircle className="w-3 h-3 text-blue-600 mr-2" />
                <span className="text-blue-700 text-xs font-medium">Trusted by 50,000+ professionals</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Skip the Rejection Pile.
                <span className="block text-blue-500">
                  Land Your Dream Job
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
                AI-powered career platform that builds ATS-winning resumes, matches you with perfect jobs, and connects you with expert coaches.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
                <Link href="https://www.geniescareerhub.com/cv-studio" className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center">
                  Build ATS-Proof CV Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="https://www.geniescareerhub.com/career-coaching"
                  className="bg-white hover:bg-gray-100 text-blue-950 font-semibold py-3 px-6 rounded-lg text-base border-2 border-white transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                    Meet Coaches
                </Link>
              </div>

              {/* Trust Indicators */}
              {/* <div className="text-gray-300 text-xs">
                No credit card • Instant download
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 