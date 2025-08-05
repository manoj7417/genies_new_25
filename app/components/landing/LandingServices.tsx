'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle, Users, TrendingUp, Search, Home, HelpCircle, GraduationCap, Tag, Bookmark, Users as UsersIcon, Building, Plus, MessageSquare, FileText, Heart, Award } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const LandingServices = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-[1264px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="text-primary">Core Services</span>
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-3xl mx-auto leading-[1.4]">
            Discover the tools and services that will accelerate your career growth and help you achieve your professional goals.
          </p>
        </motion.div>

        {/* For Candidate Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm font-semibold">
              For Candidates
            </Badge>
            <Separator className="flex-1" />
          </div>
        </motion.div>

        {/* Candidate Services Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.services-next',
              prevEl: '.services-prev',
            }}
            pagination={{
              clickable: true,
              el: '.services-pagination',
            }}
            className="services-swiper"
          >
            {/* CV Builder Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-muted/30 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">CB</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">CV Builder</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        We're best known for our AI-powered career platform that millions of professionals visit every month to find jobs, build CVs, and accelerate their careers with personalized guidance and expert coaching.
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg"
                          className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                          onClick={() => {
                            window.location.href = 'https://www.geniescareerhub.com/resume-builder';
                          }}
                        >
                          CV Builder
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Right Panel - CV Builder Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/cv-builder.png" 
                            alt="CV Builder Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>

            {/* CV Analyser Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-blue-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">CA</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">CV Analyser</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Where professionals analyze and optimize their Cv with AI-powered insights. Get detailed feedback on your CV's strengths, weaknesses, and improvement opportunities.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="lg"
                            className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                            onClick={() => {
                              window.location.href = 'https://www.geniescareerhub.com/resume-analyzer';
                            }}
                          >
                            Discover Analyser
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Right Panel - CV Analyser Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/ats-score.png" 
                            alt="CV Analyser Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>

            {/* CV Match Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-orange-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">CM</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">CV Match</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Where job seekers find perfect opportunities and employers discover top talent. Our intelligent matching algorithm connects skills with opportunities for optimal career growth.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="lg"
                            className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                            onClick={() => {
                              window.location.href = 'https://www.geniescareerhub.com/job-cv';
                            }}
                          >
                            Discover Matches
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Right Panel - CV Match Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/resume11.png" 
                            alt="CV Match Interface" 
                            className="w-full h-64 rounded-md object-contain"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>

            {/* AI-Human Coaches Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-purple-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">AC</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">AI-Human Coaches</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Get personalized guidance from our AI-powered career coaches combined with human expertise. Receive tailored advice, interview preparation, and career strategy from industry professionals.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="lg"
                            className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                            onClick={() => {
                              window.location.href = 'https://www.geniescareerhub.com/login?redirect=%2Fcareer-counselling';
                            }}
                          >
                            Connect with AI Coaches
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Right Panel - AI-Human Coaches Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/ai-human-coahes.webp" 
                            alt="AI-Human Coaches Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>

            {/* Jobs Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-green-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">J</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">Jobs</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Discover thousands of job opportunities from top companies worldwide. Our advanced job search engine matches your skills and preferences with the perfect career opportunities.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="lg"
                            className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                            onClick={() => {
                              window.location.href = 'https://www.geniescareerhub.com/jobs';
                            }}
                          >
                            Find Jobs
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Right Panel - Jobs Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/jobtransition.png" 
                            alt="Jobs Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="services-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background rounded-full shadow-lg border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="services-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background rounded-full shadow-lg border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="services-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10"></div>
        </div>

        {/* For Recruiters Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 mt-20"
        >
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm font-semibold">
              For Corporate
            </Badge>
            <Separator className="flex-1" />
          </div>
        </motion.div>

        {/* Recruiter Services Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.recruiter-services-next',
              prevEl: '.recruiter-services-prev',
            }}
            pagination={{
              clickable: true,
              el: '.recruiter-services-pagination',
            }}
            className="recruiter-services-swiper"
          >
            {/* Recruitment Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-red-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">R</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">Recruitment</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Post job opportunities and reach qualified candidates instantly. Our advanced job posting platform helps you find the perfect talent for your organization.
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg"
                          className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                          onClick={() => {
                            window.location.href = 'https://www.geniescareerhub.com/recruiter/signin';
                          }}
                        >
                          Post a Job
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Right Panel - Job Posting Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/recruitment.jpg" 
                            alt="Job Posting Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>

            {/* Coaching For Employees Slide */}
            <SwiperSlide>
              <Card className="border-0 shadow-lg bg-teal-50/50 min-h-[450px]">
                <CardContent className="lg:p-12 p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Panel - Marketing Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center mr-3">
                          <span className="text-white text-[12px] font-[700]">CE</span>
                        </div>
                        <span className="text-[19px] font-[600] text-foreground">Coaching For Employees</span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] text-foreground leading-[1.4]">
                        Track your recruitment performance with comprehensive analytics. Monitor application rates, candidate quality, and hiring success metrics in real-time.
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg"
                          className="px-8 py-3 text-[13px] font-[400] group bg-blue-950 hover:bg-blue-900 text-white"
                          onClick={() => {
                            window.location.href = 'https://www.geniescareerhub.com/career-coaching';
                          }}
                        >
                          Meet Coaches
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Right Panel - Coaching For Employees Interface */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border shadow-sm overflow-hidden">
                        <CardContent className="lg:p-6 p-0">
                          <img 
                            src="/coaching-employee.webp" 
                            alt="Analytics Dashboard Interface" 
                            className="w-full h-64 rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons for Recruiter Services */}
          <div className="recruiter-services-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background rounded-full shadow-lg border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="recruiter-services-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background rounded-full shadow-lg border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Custom Pagination for Recruiter Services */}
          <div className="recruiter-services-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10"></div>
        </div>
        
      </div>

      <style jsx global>{`
        .services-swiper {
          position: relative;
        }
        
        .services-pagination .swiper-pagination-bullet {
          background: hsl(var(--border));
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 4px;
        }
        
        .services-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
        
        .services-swiper .swiper-button-prev::after,
        .services-swiper .swiper-button-next::after {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default LandingServices 