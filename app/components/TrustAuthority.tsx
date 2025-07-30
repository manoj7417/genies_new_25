'use client'

import { Award, Building2, Users, Star, CheckCircle, Quote } from 'lucide-react'
import Image from 'next/image'

export default function TrustAuthority() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Building2 className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Careers Through AI Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by career experts and AI specialists, we're on a mission to democratize access to professional career tools. 
              Our platform combines cutting-edge AI technology with human expertise to help professionals land their dream jobs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">10+ years of career development expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Advanced AI algorithms trained on millions of resumes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Certified career coaches and HR professionals</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">50,000+</div>
                    <div className="text-sm opacity-90">Professionals Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$2M+</div>
                    <div className="text-sm opacity-90">Salary Increases</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.9/5</div>
                    <div className="text-sm opacity-90">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Credentials</h3>
            <p className="text-gray-600">Trusted by industry leaders and certified by professional organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">SHRM Certified</h4>
              <p className="text-gray-600 text-sm">Society for Human Resource Management certification for career development excellence.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISO 27001</h4>
              <p className="text-gray-600 text-sm">Information security management certification ensuring your data protection.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h4>
              <p className="text-gray-600 text-sm">Full compliance with European data protection regulations for global users.</p>
            </div>
          </div>
        </div>

        {/* Media Mentions */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured in Leading Publications</h3>
            <p className="text-gray-600">Recognized by top media outlets for our innovative approach to career development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold text-lg">TC</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">TechCrunch</h4>
              <p className="text-gray-600 text-sm">"Revolutionizing resume building with AI"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold text-lg">F</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Forbes</h4>
              <p className="text-gray-600 text-sm">"Top 10 career tools for 2024"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold text-lg">BI</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Insider</h4>
              <p className="text-gray-600 text-sm">"AI-powered career acceleration"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 font-bold text-lg">FT</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Company</h4>
              <p className="text-gray-600 text-sm">"Innovation in job search technology"</p>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <blockquote className="text-xl font-medium mb-4 max-w-3xl mx-auto">
              "Geniess Career Hub represents the future of career development. Their AI-powered approach has transformed how professionals approach job searching and career growth."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <div className="font-semibold">Jane Doe</div>
                <div className="text-blue-100 text-sm">Career Development Expert, Harvard Business Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 