'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Award, Users, MessageSquare, GraduationCap, Heart, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const LandingCoaches = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const coaches = [
    {
      id: 1,
      name: "David Richardson",
      role: "Solution-Focused Career Coach",
      expertise: "Psychometrics & Personal Development",
      experience: "15+ years in strategic growth",
      image: "/David.jpg",
      description: "David uses a solution-focused coaching style grounded in psychometrics and personal development tools. His method supports lasting change through tailored plans, accountability, and strategic growth.",
      rating: 4.9,
      reviews: 127,
      specialties: ["Solution-Focused Coaching", "Psychometrics", "Strategic Growth"],
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
      textColor: "text-gray-900"
    },
    {
      id: 2,
      name: "Cathleen O'Sullivan",
      role: "Humble Leadership Coach",
      expertise: "Self-Awareness & Communication",
      experience: "12+ years in leadership development",
      image: "/Cathleen.jpg",
      description: "Cathleen champions humble leadership, helping clients deepen self-awareness and enhance communication for greater impact. Her coaching combines empathy, professionalism, and challenge to inspire personal growth.",
      rating: 4.8,
      reviews: 203,
      specialties: ["Humble Leadership", "Self-Awareness", "Communication"],
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
      textColor: "text-gray-900"
    },
    {
      id: 3,
      name: "Kai-Nneka Townsend",
      role: "Leadership & Wellbeing Coach",
      expertise: "Burnout Prevention & Resilience",
      experience: "10+ years in leadership coaching",
      image: "/Kai.png",
      description: "Kai-Nneka is a leadership coach who empowers managers to transition into senior roles without compromising their wellbeing. She specialises in burnout prevention, resilience, and tailored leadership strategies.",
      rating: 4.9,
      reviews: 156,
      specialties: ["Leadership Coaching", "Burnout Prevention", "Resilience"],
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
      textColor: "text-gray-900"
    },
    {
      id: 4,
      name: "Clare Belmont",
      role: "Mindset & Productivity Coach",
      expertise: "Time Management & Peak Productivity",
      experience: "8+ years in mindset coaching",
      image: "/Clare.jpeg",
      description: "Clare is a mindset coach helping professionals overcome distraction and procrastination with a holistic blend of strategy and mindfulness. Her approach integrates time management, peak productivity, and personal fulfilment.",
      rating: 4.7,
      reviews: 89,
      specialties: ["Mindset Coaching", "Time Management", "Productivity"],
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
      textColor: "text-gray-900"
    },
    {
      id: 5,
      name: "Megan Camacho",
      role: "Collaborative Career Coach",
      expertise: "Supportive Coaching & Decision Making",
      experience: "6+ years in collaborative coaching",
      image: "/Megan.jpg",
      description: "Megan adopts a collaborative coaching style, encouraging clients to explore solutions in a positive and supportive setting. She constructively challenges clients to address difficult topics and make confident decisions.",
      rating: 4.8,
      reviews: 142,
      specialties: ["Collaborative Coaching", "Decision Making", "Supportive Environment"],
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
      textColor: "text-gray-900"
    }
  ]

  return (
    <section className="py-20 bg-background" id="coaches">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
            Meet Our{' '}
            <span className="text-primary">Expert Coaches</span>
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-3xl mx-auto leading-[1.4]">
            Get personalized guidance from industry professionals who have helped thousands of professionals advance their careers and achieve their goals.
          </p>
        </motion.div>

                 {/* Main Layout Container */}
         <div className="flex flex-col lg:flex-row gap-6 lg:h-[500px] h-auto">
           
           {/* Vertical Pill Tabs - Left Side (Hidden on Mobile) */}
           <div className="hidden lg:flex flex-col gap-4 w-[280px]">
             {coaches.map((coach, index) => (
               <motion.button
                 key={coach.id}
                 onClick={() => setCurrentTab(index)}
                 className={`
                   relative h-[80px] rounded-xl transition-all duration-300 cursor-pointer p-4
                   ${index === currentTab ? 'scale-105 shadow-lg ring-2 ring-blue-500 ring-offset-2' : 'hover:scale-102'}
                   ${coach.bgColor} ${coach.hoverBg}
                 `}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 {/* Tab Content with Image and Text */}
                 <div className="flex items-center gap-4 h-full">
                   {/* Circular Profile Picture */}
                   <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                     <img
                       src={coach.image}
                       alt={coach.name}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   
                   {/* Coach Name */}
                   <div className={`flex-1 ${coach.textColor}`}>
                     <span className="text-sm font-semibold tracking-wide block truncate">
                       {coach.name}
                     </span>
                     <span className="text-xs text-gray-600 truncate">
                       {coach.role}
                     </span>
                   </div>
                 </div>
               </motion.button>
             ))}
           </div>

           {/* Main Content Area - Right Side (Full Width on Mobile) */}
           <div className="w-full lg:flex-1 relative rounded-3xl overflow-hidden lg:h-[500px] h-[400px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentTab}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.6, ease: "easeInOut" }}
                 className="absolute inset-0 w-full h-full"
                 style={{
                   backgroundImage: `url(${coaches[currentTab].image})`,
                   backgroundSize: "contain",
                   backgroundPosition: "center",
                   backgroundRepeat: "no-repeat",
                 }}
               >
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                 
                 {/* Content */}
                 <div className="relative h-full flex flex-col justify-center p-6 lg:p-12 text-white max-w-2xl">
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                     className="mb-4"
                   >
                     <Badge variant="secondary" className="text-xs lg:text-sm font-semibold mb-2">
                       Expert Coach
                     </Badge>
                     <div className="flex items-center gap-1 mb-2">
                       <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-current" />
                       <span className="text-xs lg:text-sm font-medium">{coaches[currentTab].rating}</span>
                       <span className="text-xs lg:text-sm text-white/80">({coaches[currentTab].reviews} reviews)</span>
                     </div>
                   </motion.div>
                   
                   <motion.h3
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3, duration: 0.6 }}
                     className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-2"
                   >
                     {coaches[currentTab].name}
                   </motion.h3>
                   
                   <motion.p
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4, duration: 0.6 }}
                     className="text-sm lg:text-lg text-white/90 mb-2"
                   >
                     {coaches[currentTab].role}
                   </motion.p>
                   
                   <motion.p
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5, duration: 0.6 }}
                     className="text-xs lg:text-sm text-white/80 mb-4 lg:mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none"
                   >
                     {coaches[currentTab].description}
                   </motion.p>
                   
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6, duration: 0.6 }}
                     className="flex flex-wrap gap-1 lg:gap-2 mb-4 lg:mb-6"
                   >
                     {coaches[currentTab].specialties.map((specialty, idx) => (
                       <Badge key={idx} variant="outline" className="text-xs bg-white/10 border-white/20 text-white">
                         {specialty}
                       </Badge>
                     ))}
                   </motion.div>
                   
                   {/* <motion.button
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.7, duration: 0.6 }}
                     className="self-start inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg font-semibold transition-all duration-300 group"
                     whileHover={{ scale: 1.05 }}
                     onClick={() => {
                       window.location.href = 'https://www.geniescareerhub.com/career-counselling';
                     }}
                   >
                     Book Session with {coaches[currentTab].name}
                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                   </motion.button> */}
                 </div>

                 {/* Navigation Arrow - Top Right */}
                 <motion.button
                   onClick={() => setCurrentTab((prev) => (prev + 1) % coaches.length)}
                   className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.8, duration: 0.5 }}
                 >
                   <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 group-hover:text-gray-900" />
                 </motion.button>
               </motion.div>
             </AnimatePresence>
           </div>
         </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to accelerate your career? Book a session with any of our expert coaches today.
          </p>
          <Button 
            size="lg"
            className="px-10 py-4 text-lg font-semibold group bg-blue-950 hover:bg-blue-900 text-white"
            onClick={() => {
              window.location.href = 'https://www.geniescareerhub.com/coaches';
            }}
          >
            View All Coaches
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingCoaches 