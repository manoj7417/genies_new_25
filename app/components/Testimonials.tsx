'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      content: "Geniess Career Hub helped me land my dream job at a top tech company. The mentorship program was invaluable in preparing me for interviews.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Growth Inc",
      content: "The career planning tools and skill development courses transformed my professional trajectory. I've advanced faster than I ever thought possible.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Analytics Pro",
      content: "The AI-powered job recommendations were spot-on. I found opportunities I never would have discovered on my own. Highly recommended!",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Product Manager",
      company: "Innovate Labs",
      content: "The platform's comprehensive approach to career development is unmatched. From skill assessment to job placement, everything is seamless.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      company: "Design Studio",
      content: "Connecting with industry mentors through the platform gave me insights that accelerated my career growth significantly.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Wilson",
      role: "Sales Director",
      company: "Revenue Corp",
      content: "The performance analytics helped me understand my strengths and areas for improvement. My career has never been more focused.",
      rating: 5,
      avatar: "JW"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {" "}Our Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers and achieved their dreams.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            // pagination={{
            //   clickable: true,
            //   el: '.swiper-pagination',
            // }}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary-200" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-blue-950 !w-12 !h-12 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-colors duration-300"></div>
          <div className="swiper-button-next !text-blue-950 !w-12 !h-12 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-colors duration-300"></div>

          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-0 !mt-8"></div>
        </div>

        
      </div>

      {/* <style jsx>{`
        .testimonials-swiper {
          padding: 50px 0 !important;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .swiper-button-prev {
          left: -20px;
        }
        
        .swiper-button-next {
          right: -20px;
        }
        
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .swiper-pagination {
          position: relative;
          text-align: center;
          margin-top: 20px;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
        }
        
        .swiper-pagination-bullet-active {
          background: #6366f1;
        }
        
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style> */}
    </section>
  )
} 