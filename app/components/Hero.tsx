'use client'

import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import Image from 'next/image'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <CheckCircle className="w-3 h-3 text-blue-600 mr-2" />
                <span className="text-blue-700 text-xs font-medium">Trusted by 50,000+ professionals</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Build an ATS-proof CV
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  packed with real-world KPIs
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl leading-relaxed">
                Tailored to your course, skills, and the jobs you want instantly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="https://www.geniescareerhub.com/cv-studio" className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center">
                  Build ATS-Proof CV Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button 
                  onClick={scrollToHowItWorks}
                  className="bg-white hover:bg-gray-50 text-blue-950 font-semibold py-3 px-6 rounded-lg text-base border-2 border-blue-950 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  See How It Works
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="text-gray-500 text-xs">
                No credit card • Instant download
              </div>
            </div>
          </div>

          {/* Right Side - CV Builder Interface */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main CV Template with Image */}
              <div className="">
                <div className="relative">
                  {/* Resume Image */}
                  <Image 
                    src="/resume11.png" 
                    alt="Professional ATS-proof CV template" 
                    width={500} 
                    height={650}
                    className="w-full h-[450px] object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-gray-600 text-sm">ATS Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Professional Templates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">10,000+</div>
            <div className="text-gray-600 text-sm">CVs Created</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">AI-Powered Support</div>
          </div>
        </div>
      </div>
    </section>
  )
} 