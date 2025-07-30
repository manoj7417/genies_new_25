'use client'

import { Search, Users, TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "AI-Powered CV Builder",
      description: "Create professional, ATS-Optimised CVs with our intelligent builder that adapts to your industry and experience level.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Templates",
      description: "Choose from 50+ professionally designed templates that are guaranteed to pass through Applicant Tracking Systems.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analysis",
      description: "Get instant feedback on your CV with our AI analysis that scores your document and provides actionable improvements.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "ATS Optimization",
      description: "Our CVs are specifically designed to pass through Applicant Tracking Systems and reach human recruiters.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      title: "Industry-Specific",
      description: "Templates and content suggestions tailored to your specific industry and job requirements.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: ArrowRight,
      title: "Instant Download",
      description: "Download your polished CV in multiple formats (PDF, Word) ready for immediate use in job applications.",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {" "}Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create a winning CV that gets you noticed by top employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your Winning CV?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our AI-powered CV builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.geniescareerhub.com/cv-studio" className="bg-[#0077cc] hover:bg-[#0077cc] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                Get Started Free
              </Link>
              {/* <button className="bg-white hover:bg-gray-50 text-blue-950 font-semibold py-4 px-8 rounded-lg text-lg border-2 border-blue-950 transition-all duration-300 hover:shadow-lg">
                Schedule a Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 