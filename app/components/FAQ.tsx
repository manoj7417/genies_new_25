'use client'

import { ChevronDown, ChevronUp, HelpCircle, Shield, Zap, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How is this different from other CV builders?",
      answer: "Unlike traditional CV builders, we use advanced AI that analyzes job descriptions and optimizes your resume for specific roles. Our ATS optimization is based on millions of successful applications, ensuring your resume passes through Applicant Tracking Systems and reaches human recruiters."
    },
    {
      question: "What makes your ATS optimization better?",
      answer: "Our AI is trained on millions of successful resumes and job descriptions. It doesn't just use generic keywords - it understands context, industry-specific terminology, and the latest ATS algorithms. We also provide real-time feedback on your resume's ATS compatibility score."
    },
    {
      question: "How do you match with coaches?",
      answer: "Our AI analyzes your career goals, experience level, and industry to match you with certified career coaches who specialize in your field. Each coach is vetted and has proven success helping professionals advance their careers. You can also browse coach profiles and choose based on their expertise."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and are fully GDPR compliant. Your personal information is never shared with third parties. We're ISO 27001 certified for information security management, ensuring your data is protected at the highest standards."
    },
    {
      question: "How long does it take to create a resume?",
      answer: "With our AI-powered builder, you can create an ATS-Optimised resume in as little as 10 minutes. The AI guides you through each section, suggests improvements, and ensures your resume is ready for immediate use. Most users complete their first resume in under 15 minutes."
    },
    {
      question: "Can I use the free version indefinitely?",
      answer: "Yes! Our free plan includes 1 ATS-Optimised resume, 5 professional templates, and basic keyword optimization. You can use it indefinitely. Premium features like unlimited resumes, advanced AI optimization, and career coaching are available when you're ready to upgrade."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Questions About Our Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered career platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
            <p className="text-gray-600 text-sm">Your data is protected with enterprise-grade encryption</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Fast & Efficient</h4>
            <p className="text-gray-600 text-sm">Create ATS-Optimised resumes in under 15 minutes</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">Get help from certified career coaches and HR professionals</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <Star className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of our platform. 
            Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://www.geniescareerhub.com/contact-us"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Contact Support
            </Link>
            <Link
              href="https://www.geniescareerhub.com/cv-studio"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Start Building Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 