'use client'

import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Your Career?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already accelerated their careers with our comprehensive platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://www.geniescareerhub.com" className="bg-[#0077cc] hover:bg-[#0077cc] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            {/* <button className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Schedule Demo
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
} 