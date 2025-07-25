'use client'

import { CheckCircle, TrendingUp, Award, Users, AlertTriangle, ArrowRight, Zap, Target, BarChart3, Brain, Search, Palette, Download } from 'lucide-react'
import Image from 'next/image'

export default function TrustAndProblem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Signals Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our AI-powered system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ATS Pass Rate */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600 font-medium">ATS Pass Rate</p>
              <p className="text-sm text-gray-500 mt-2">Our CVs consistently pass Applicant Tracking Systems</p>
            </div>

            {/* Careers Transformed */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600 font-medium">Careers Transformed</p>
              <p className="text-sm text-gray-500 mt-2">Real professionals who landed their dream jobs</p>
            </div>

            {/* Featured In */}
            {/* <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Featured in</h3>
              <p className="text-gray-600 font-medium">TechCrunch, Forbes</p>
              <p className="text-sm text-gray-500 mt-2">Recognized by leading publications</p>
            </div> */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <Award className="w-8 h-8 text-purple-600" />
  </div>
  <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted by Professionals</h3>
  <p className="text-gray-600 font-medium">Across the UK and Globally</p>
  <p className="text-sm text-gray-500 mt-2">Helping individuals build smarter career paths</p>
</div>

          </div>
        </div>

        {/* Problem/Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Problem Side - Fixed */}
          <div className="lg:sticky lg:top-8">
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
                <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-red-700 text-sm font-medium">The Problem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why 75% of Resumes Never Reach Human Eyes
              </h2>
            </div>

            <div className="space-y-6">
              {/* ATS Rejection Statistics */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ATS Rejection Statistics</h3>
                    <p className="text-gray-600 text-sm">75% of applications are rejected by ATS systems before human review, even from qualified candidates.</p>
                  </div>
                </div>
              </div>

              {/* Common CV Mistakes */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Common CV Mistakes</h3>
                    <p className="text-gray-600 text-sm">Poor keyword optimization, generic templates, and lack of quantifiable achievements lead to instant rejection.</p>
                  </div>
                </div>
              </div>

              {/* Career Stagnation Data */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Career Stagnation Data</h3>
                    <p className="text-gray-600 text-sm">Professionals spend 6+ months job searching due to poor CV optimization, missing career opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side - Scrollable */}
          <div className="space-y-12">
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-4">
                <Zap className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-700 text-sm font-medium">The Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The AI Career System That Actually Works
              </h2>
            </div>

            {/* Step 1: AI Analysis */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                    <h3 className="text-xl font-semibold text-gray-900">AI Analysis</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Our AI analyzes your experience and target roles</p>
                  <div className="rounded-lg p-4">
                    <div className="aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/ai-analysis.jpeg" 
                        alt="AI Analysis Process"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: ATS Optimization */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                    <h3 className="text-xl font-semibold text-gray-900">ATS Optimization</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Optimize keywords and formatting for ATS systems</p>
                  <div className="rounded-lg p-4">
                    <div className="aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/ai-optimisation.jpg" 
                        alt="ATS Optimization Process"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Professional Design */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                    <h3 className="text-xl font-semibold text-gray-900">Professional Design</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Choose from 50+ ATS-friendly templates</p>
                  <div className="rounded-lg p-4">
                    <div className="aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/resume11.png" 
                        alt="Professional Resume Template"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Instant Download */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                    <h3 className="text-xl font-semibold text-gray-900">Instant Download</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Get your ATS-proof CV ready in minutes</p>
                  <div className="rounded-lg p-4">
                    <div className="aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/instant-download.jpg" 
                        alt="Instant Download Process"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Examples */}
        <div className="mt-20">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Examples
            </h2> */}
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See how our AI transforms generic CVs into ATS-Optimised, interview-winning resumes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Example */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-5 h-5 bg-red-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">×</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl">Before: Generic CV</h3>
              </div>
              
              {/* Before CV Image */}
              <div className="mb-6">
                <div className="rounded-xl p-6 border-0 border-dashed border-gray-300 overflow-hidden">
                  <Image 
                    src="/before-ats.png" 
                    alt="Before: Generic CV Example"
                    width={400}
                    height={400}
                    className="w-full h-[300px] object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Responsible for managing projects"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Worked with team members"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Helped with various tasks"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Generic template with no keywords</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Poor formatting and structure</span>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <p className="text-red-700 text-sm font-medium">Likely to be rejected by ATS</p>
                </div>
              </div>
            </div>

            {/* After Example */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl">After: ATS-Optimised CV</h3>
              </div>
              
              {/* After CV Image */}
              <div className="mb-6">
                <div className="rounded-xl p-6 border-0 border-blue-200 overflow-hidden">
                  <Image 
                    src="/after-ats.png" 
                    alt="After: ATS-Optimised CV Example"
                    width={400}
                    height={400}
                    className="w-full h-[300px] object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>"Led cross-functional team of 8 members"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>"Increased project efficiency by 35%"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>"Managed $500K budget successfully"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Keyword-Optimised for target roles</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Professional ATS-friendly format</span>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-green-700 text-sm font-medium">95% ATS pass rate guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">ATS Success Rate</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3x</h3>
              <p className="text-gray-600">More Interviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
              <p className="text-gray-600">Faster Job Search</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
} 