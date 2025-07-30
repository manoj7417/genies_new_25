'use client'

import { FileText, Search, Users, Sparkles, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Lottie from 'lottie-react'
import Link from 'next/link'

export default function CoreFeatures() {
  return (
    <section id="core-features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Features That Transform Careers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to build an ATS-proof resume, find hidden job opportunities, and accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Resume Builder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Resume Builder</h3>
              <p className="text-blue-600 font-medium">ATS-Optimised in Minutes</p>
            </div>
            
            <div className="mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Lottie 
                    animationData={require('/public/animations/a1.json')}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">50+ ATS-friendly templates</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Keyword optimization</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Instant formatting</span>
              </div>
            </div>

            <Link 
              href="https://www.geniescareerhub.com/resume"
              className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Start Building
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* AI Job Matching */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Job Matching</h3>
              <p className="text-green-600 font-medium">Find Hidden Opportunities</p>
            </div>
            
            <div className="mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Lottie 
                    animationData={require('/public/animations/a2.json')}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Hidden job opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Skills-based matching</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Real-time alerts</span>
              </div>
            </div>

            <Link 
              href="https://www.geniescareerhub.com/job-cv"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Find Jobs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Expert Coaching */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Coaching</h3>
              <p className="text-purple-600 font-medium">Accelerate Your Growth</p>
            </div>
            
            <div className="mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Lottie 
                    animationData={require('/public/animations/a3.json')}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">1-on-1 career guidance</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Interview preparation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Salary negotiation</span>
              </div>
            </div>

            <Link 
              href="https://www.geniescareerhub.com/career-coaching"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Get Coaching
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 