'use client'

import { Star, Quote, Building2, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Analytics Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The AI-powered job recommendations are spot-on. I found opportunities I never would have discovered on my own. Highly recommended!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Product Manager",
      company: "Innovate Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The platform's comprehensive approach to career development is unmatched. From skill assessment to job placement, everything is seamless.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Connecting with industry mentors through the platform gave me insights that accelerated my career growth significantly.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The AI resume builder helped me land my dream job at a top tech company. The ATS optimization is incredible - I got 3x more interviews!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&h=150&fit=crop&crop=face",
      content: "Found a hidden job opportunity through their AI matching system. The career coaching helped me negotiate a 40% salary increase!",
      rating: 5
    }
  ]

  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop" }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who have achieved their dreams.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonial Cards */}
            <div className="flex gap-6 px-8">
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <div key={index} className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-w-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-blue-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.content}"</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Wall */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Where Our Users Got Hired</h3>
            <p className="text-gray-600">Trusted by professionals at top companies worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2 font-medium">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
            <p className="text-blue-100">Real metrics from our successful users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">ATS Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm opacity-90">Careers Transformed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm opacity-90">More Interviews</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 