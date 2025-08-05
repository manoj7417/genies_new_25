'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Briefcase, Target, BookOpen, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const LandingHero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-background">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Balls */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-10 h-10 bg-[#172554] rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-20 w-8 h-8 bg-[#172554] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-48 left-1/4 w-6 h-6 bg-[#172554] rounded-full opacity-25"
        />
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-64 right-1/3 w-8 h-8 bg-[#172554] rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-32 left-1/3 w-6 h-6 bg-[#172554] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
          className="absolute bottom-20 right-10 w-10 h-10 bg-[#172554] rounded-full opacity-25"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-16 right-16 w-8 h-8 border-2 border-[#172554] rounded-[3px] opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-16 left-16 w-6 h-6 border-2 border-[#172554] rounded-[3px] opacity-15"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/4 w-4 h-4 border-2 border-[#172554] rounded-[3px] opacity-12"
        />

        {/* Floating Lines */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-24 left-1/3 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#172554] to-transparent opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-24 right-1/3 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#172554] to-transparent opacity-15"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full h-full">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] text-foreground leading-[1.15] mb-4 lg:mb-6"
            >
              Turn Rejections into <span className='text-blue-800'>Interviews.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-[1.4] mb-6 lg:mb-8 px-4 lg:px-0"
            >
              Connect with employers on a platform they trust with our AI-powered career solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 text-sm lg:text-[13px] font-[600] group bg-blue-950 hover:bg-blue-900 text-white"
                onClick={() => {
                  document.getElementById('cv-scan')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-150" />
              </Button>
              
              <Button 
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 text-sm lg:text-[13px] font-[600] group text-foreground underline"
                onClick={() => {
                  window.location.href = 'https://www.geniescareerhub.com/career-coaching';
                }}
              >
                <Play className="mr-2 w-4 h-4" />
                 Meet Coaches
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="border-0 overflow-hidden rounded-lg lg:rounded-none">
              <div>
                <img
                  src="/banner-img-2.png"
                  alt="Hero Banner"
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero 