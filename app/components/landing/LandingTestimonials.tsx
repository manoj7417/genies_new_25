'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LandingTestimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'Genies Career Hub transformed my job search. The AI career coach helped me identify the right opportunities, and the CV builder created a resume that got me interviews at top tech companies.',
      highlight: 'Got hired at Google'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      company: 'Microsoft',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The personalized career guidance was incredible. The platform helped me transition from marketing to product management, and I landed my dream job at Microsoft.',
      highlight: 'Career transition success'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Amazon',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The ATS-optimized resume builder is a game-changer. My resume now passes through every applicant tracking system, and I received 3x more interview calls.',
      highlight: '3x more interviews'
    },
    {
      name: 'David Thompson',
      role: 'UX Designer',
      company: 'Apple',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The job matching algorithm found positions I never would have discovered on my own. The platform truly understands my career goals and skills.',
      highlight: 'Perfect job matches'
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager',
      company: 'Netflix',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The career coaching sessions were invaluable. My coach helped me negotiate a 40% salary increase and provided strategies for long-term career growth.',
      highlight: '40% salary increase'
    },
    {
      name: 'James Wilson',
      role: 'DevOps Engineer',
      company: 'Meta',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'From resume optimization to interview prep, Genies Career Hub covered everything. The AI insights were spot-on and helped me land a role at Meta.',
      highlight: 'Hired at Meta'
    },
    // Duplicated testimonials for continuous flow
    {
      name: 'Alex Rodriguez',
      role: 'Frontend Developer',
      company: 'Spotify',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The CV builder is incredibly intuitive. I created a professional resume in minutes that perfectly highlighted my skills and experience.',
      highlight: 'Quick resume creation'
    },
    {
      name: 'Maria Garcia',
      role: 'Backend Engineer',
      company: 'Uber',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The AI career coach provided personalized advice that helped me navigate a complex job market and land my dream role.',
      highlight: 'Personalized guidance'
    },
    {
      name: 'John Smith',
      role: 'Data Analyst',
      company: 'LinkedIn',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The job matching feature found opportunities I never would have considered. It opened doors to amazing career possibilities.',
      highlight: 'Discovering new opportunities'
    },
    {
      name: 'Emma Davis',
      role: 'Product Designer',
      company: 'Airbnb',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The interview preparation tools were game-changing. I felt confident and prepared for every interview question.',
      highlight: 'Interview success'
    },
    {
      name: 'Carlos Mendez',
      role: 'Full Stack Developer',
      company: 'Twitter',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The platform helped me transition from junior to senior developer. The career path guidance was invaluable.',
      highlight: 'Career advancement'
    },
    {
      name: 'Sophie Turner',
      role: 'UX Researcher',
      company: 'Figma',
      avatar: '/genies.jpg',
      rating: 5,
      content: 'The salary negotiation tips from the career coach helped me secure a 30% pay increase in my new role.',
      highlight: 'Salary negotiation success'
    }
  ]

  // Split testimonials into two rows with more content
  const firstRow = testimonials.slice(0, 6)
  const secondRow = testimonials.slice(6, 12)

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="max-w-[1264px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
            What Our{' '}
            <span className="text-primary">
              Users Say
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-[1.4]">
            Join thousands of professionals who have transformed their careers with our AI-powered platform.
          </p>
        </motion.div>

        {/* First Row - Moving Left */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            loop={true}
            speed={8000}
            className="testimonials-swiper-left"
          >
            {firstRow.map((testimonial, index) => (
              <SwiperSlide key={`row1-${testimonial.name}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border-0 shadow-sm">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary opacity-50" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-primary fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground leading-[1.4] mb-6 text-[13px]">
                        "{testimonial.content}"
                      </p>

                      {/* Highlight */}
                      <Badge variant="outline" className="mb-4 text-[12px] font-[400] bg-primary/5 text-primary border-primary/20">
                        {testimonial.highlight}
                      </Badge>

                      {/* Author */}
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="text-xs">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-[600] text-foreground text-[13px]">{testimonial.name}</div>
                          <div className="text-[12px] text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Row - Moving Right */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            loop={true}
            speed={8000}
            className="testimonials-swiper-right"
          >
            {secondRow.map((testimonial, index) => (
              <SwiperSlide key={`row2-${testimonial.name}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border-0 shadow-sm">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary opacity-50" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-primary fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground leading-[1.4] mb-6 text-[13px]">
                        "{testimonial.content}"
                      </p>

                      {/* Highlight */}
                      <Badge variant="outline" className="mb-4 text-[12px] font-[400] bg-primary/5 text-primary border-primary/20">
                        {testimonial.highlight}
                      </Badge>

                      {/* Author */}
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="text-xs">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-[600] text-foreground text-[13px]">{testimonial.name}</div>
                          <div className="text-[12px] text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper-left .swiper-wrapper,
        .testimonials-swiper-right .swiper-wrapper {
          transition-timing-function: linear;
        }
        .testimonials-swiper-left .swiper-slide,
        .testimonials-swiper-right .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  )
}

export default LandingTestimonials 