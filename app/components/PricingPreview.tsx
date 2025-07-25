'use client'

import { Check, Star, Zap, Crown, Shield, ArrowRight, Search, Users } from 'lucide-react'
import Link from 'next/link'

export default function PricingPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <Star className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-medium">Start Free, Upgrade When Ready</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start building your ATS-proof resume for free. Upgrade when you're ready to unlock premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Free Tier */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">1 ATS-Optimised resume</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">5 professional templates</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Basic keyword optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">PDF download</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Email support</span>
              </div>
            </div>

            <Link 
              href="https://www.geniescareerhub.com/cv-studio"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center mt-auto"
            >
              Start Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
              <div className="text-4xl font-bold mb-2">$19</div>
              <p className="text-purple-100">per month</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>Everything in Free</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>Unlimited resumes</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>50+ premium templates</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>Advanced AI optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>AI job matching</span>
              </div>
              {/* <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>1-on-1 career coaching</span>
              </div> */}
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                <span>Priority support</span>
              </div>
            </div>

            <Link 
              href="https://www.geniescareerhub.com/pricing"
              className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center mt-auto"
            >
              Start Premium Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2" />
              <span>30-Day Money Back</span>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Premium?</h3>
            <p className="text-gray-600">Unlock advanced features to accelerate your career growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced AI</h4>
              <p className="text-gray-600 text-sm">Sophisticated algorithms that analyze job descriptions and optimize your resume for maximum ATS compatibility.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Job Matching</h4>
              <p className="text-gray-600 text-sm">AI-powered job discovery that finds hidden opportunities matching your skills and career goals.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Coaching</h4>
              <p className="text-gray-600 text-sm">Personalized career guidance from industry experts to help you land your dream job.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 