'use client'

import { ArrowRight, Star, Zap, Users, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function FooterCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-10 border border-white border-opacity-20 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Ready to Transform Your Career?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Career Transformation Today
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join 10,000+ professionals who have already transformed their careers with our AI-powered platform. 
            Your dream job is just a few clicks away.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Create in Minutes</div>
                <div className="text-blue-200 text-sm">ATS-Optimised resumes</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">95% Success Rate</div>
                <div className="text-blue-200 text-sm">ATS compatibility guaranteed</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Expert Support</div>
                <div className="text-blue-200 text-sm">Career coaches available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Free Trial CTA */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Start Free Trial</h3>
            <p className="text-blue-200 mb-6">Create your first ATS-Optimised resume for free. No credit card required.</p>
            <Link 
              href="https://www.geniescareerhub.com/cv-studio"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Start Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Demo Booking CTA */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Book a Demo</h3>
            <p className="text-blue-200 mb-6">See our platform in action with a personalized demo from our experts.</p>
            <Link 
              href="mailto:demo@Geniesscareerhub.com?subject=Demo Request"
              className="inline-flex items-center bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Book Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-blue-200 mb-6">Have questions? Our support team is here to help you succeed.</p>
            <Link 
              href="mailto:support@Geniesscareerhub.com"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-sm text-blue-200 mb-8">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Land Your Dream Job?</h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already transformed their careers. 
              Start building your ATS-proof resume today and take the first step towards your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://www.geniescareerhub.com/cv-studio"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Start Building Now
              </Link>
              <Link 
                href="mailto:support@Geniesscareerhub.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 