'use client'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Zap, Shield } from 'lucide-react'

const LandingCTA = () => {
  const benefits = [
    'AI-powered career guidance 24/7',
    'ATS-optimized resume builder',
    'Smart job matching algorithm',
    'Expert career coaching sessions',
    'Real-time resume analysis',
    'Global job opportunities',
    'Secure and private platform',
    'Free trial available'
  ]

  return (
    <section className="py-20 bg-[#0077cc] relative overflow-hidden">
      <div className="max-w-[1264px] mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[27px] md:text-[32px] font-[700] text-white mb-6">
              Ready to Transform Your{' '}
              <span className="text-[#f2cc0c]">
                Career?
              </span>
            </h2>
            
            <p className="text-[15px] text-white/90 mb-8 leading-[1.4]">
              Join thousands of professionals who have already accelerated their careers with our AI-powered platform. Start your free trial today and experience the difference.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#5eba7d] flex-shrink-0" />
                  <span className="text-white/90 text-[13px]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#f48024] px-8 py-3 rounded-[3px] font-[400] text-[13px] flex items-center justify-center group hover:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-8 py-3 rounded-[3px] font-[400] text-[13px] flex items-center justify-center hover:bg-white hover:text-[#f48024] transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-[3px] bg-white/20 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-white/90 text-[12px]">Join 50,000+ professionals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-[5px] p-8 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-[3px] bg-white/20 text-white text-[12px] font-[400] mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Most Popular Choice
                </div>
                
                <h3 className="text-[19px] font-[600] text-white mb-4">
                  Premium Plan
                </h3>
                
                <div className="text-[27px] font-[700] text-white mb-2">
                  $29
                  <span className="text-[15px] font-[400] text-white/90">/month</span>
                </div>
                
                <p className="text-white/90 mb-6 text-[13px] leading-[1.4]">
                  Everything you need to accelerate your career
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5eba7d]" />
                    <span className="text-white/90 text-[13px]">Unlimited AI Career Coaching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5eba7d]" />
                    <span className="text-white/90 text-[13px]">Advanced CV Builder & Optimizer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5eba7d]" />
                    <span className="text-white/90 text-[13px]">Priority Job Matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5eba7d]" />
                    <span className="text-white/90 text-[13px]">1-on-1 Career Coaching Sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5eba7d]" />
                    <span className="text-white/90 text-[13px]">Advanced Analytics & Insights</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#f2cc0c] text-[#222426] px-6 py-3 rounded-[3px] font-[400] text-[13px] hover:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] transition-all duration-300"
                >
                  Get Started Now
                </motion.button>

                <p className="text-white/90 text-[12px] mt-4">
                  Free 14-day trial • No credit card required
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-[27px] font-[700] text-white">50K+</div>
            <div className="text-white/90 text-[13px]">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-[27px] font-[700] text-white">95%</div>
            <div className="text-white/90 text-[13px]">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-[27px] font-[700] text-white">4.9/5</div>
            <div className="text-white/90 text-[13px]">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingCTA 