'use client'
import { motion } from 'framer-motion'
import { Brain, FileText, Target, Users, Zap, Shield, Globe, TrendingUp } from 'lucide-react'

const LandingFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Career Coach',
      description: 'Get personalized career guidance 24/7 with our advanced AI technology that understands your goals and provides tailored advice.',
      color: '#f48024'
    },
    {
      icon: FileText,
      title: 'ATS-Optimized CV Builder',
      description: 'Create professional resumes that pass through Applicant Tracking Systems with our intelligent CV builder and optimizer.',
      color: '#0077cc'
    },
    {
      icon: Target,
      title: 'Smart Job Matching',
      description: 'Find your perfect job match using AI-powered algorithms that analyze your skills, experience, and career goals.',
      color: '#5eba7d'
    },
    {
      icon: Users,
      title: 'Expert Career Coaching',
      description: 'Connect with certified career coaches for one-on-one guidance, interview prep, and career transition support.',
      color: '#f48024'
    },
    {
      icon: Zap,
      title: 'Instant Resume Analysis',
      description: 'Get real-time feedback on your resume with ATS scoring and optimization suggestions to increase your chances.',
      color: '#0077cc'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Access job opportunities worldwide with our extensive network of employers and remote work options.',
      color: '#5eba7d'
    },
    {
      icon: TrendingUp,
      title: 'Career Analytics',
      description: 'Track your career progress with detailed analytics, skill assessments, and personalized development plans.',
      color: '#f48024'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security and privacy controls to keep your information safe.',
      color: '#0077cc'
    }
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-[1264px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[27px] md:text-[32px] font-[700] text-[#222426] mb-4">
            Everything You Need to{' '}
            <span className="text-[#0077cc]">
              Succeed
            </span>
          </h2>
          <p className="text-[15px] text-[#6a737c] max-w-3xl mx-auto leading-[1.4]">
            Our comprehensive platform combines cutting-edge AI technology with expert human guidance to accelerate your career growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-[5px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e4e6ea] hover:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-[3px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-[17px] font-[600] text-[#222426] mb-3 group-hover:text-[#0077cc] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#6a737c] leading-[1.4]">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-[#0077cc] rounded-[3px]"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#f8f9f9] rounded-[5px] p-8 border border-[#e4e6ea]">
            <h3 className="text-[19px] font-[600] text-[#222426] mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-[13px] text-[#6a737c] mb-6 max-w-2xl mx-auto leading-[1.4]">
              Join thousands of professionals who have already accelerated their careers with our AI-powered platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0077cc] hover:bg-[#0077cc] text-white px-8 py-3 rounded-[3px] font-[400] text-[13px] hover:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] transition-all duration-300"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingFeatures 