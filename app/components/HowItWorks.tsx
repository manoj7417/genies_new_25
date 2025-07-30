'use client'

import { Upload, Brain, Lightbulb, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your CV",
      description: "Start with your existing CV or use our professional template",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI reviews and scores your CV instantly",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "Get Tips",
      description: "Receive actionable suggestions to improve your CV",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Download & Apply",
      description: "Download your polished CV and start applying",
      gradient: "from-blue-500 to-orange-500"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your ATS-proof CV in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="https://www.geniescareerhub.com/cv-studio" className="bg-[#0077cc] hover:bg-[#0077cc] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
            Start Building Your CV
          </Link>
        </div>
      </div>
    </section>
  )
} 