'use client'

import React from 'react'
import {
    Search,
    Users,
    TrendingUp,
    CheckCircle,
    Star,
    ArrowRight,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    UserCheck,
    Target,
    Zap,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2">
                <div className="flex items-center mb-4">
                    <img src="/beta-logo.png" alt="GeniesCareerHub Logo" className="h-12 lg:h-14 w-auto mr-2" />
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                    Transforming careers and connecting talent with opportunity. Your success is our mission.
                </p>
                <div className="flex space-x-3 lg:space-x-4">
                    <a href="https://www.linkedin.com/company/genies-career-hub/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-blue-950 cursor-pointer transition-colors duration-200">
                        <Linkedin className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61560696226983" target="_blank" rel="noopener noreferrer" className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-blue-950 cursor-pointer transition-colors duration-200">
                        <Facebook className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </a>
                    <a href="https://www.instagram.com/genies_career_hub/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-blue-950 cursor-pointer transition-colors duration-200">
                        <Instagram className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </a>
                </div>
            </div>
            <div>
                <h4 className="font-semibold mb-3 lg:mb-4 text-gray-900 text-sm lg:text-base">Services</h4>
                <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
                    <li><a href="https://www.geniescareerhub.com/jobs" className="hover:text-blue-950 transition-colors duration-200">Find Jobs</a></li>
                    <li><a href="https://www.geniescareerhub.com/career-services" className="hover:text-blue-950 transition-colors duration-200">Career Coaching</a></li>
                    <li><a href="https://www.geniescareerhub.com/resume" className="hover:text-blue-950 transition-colors duration-200">CV Builder</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3 lg:mb-4 text-gray-900 text-sm lg:text-base">Company</h4>
                <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
                    <li><a href="https://www.geniescareerhub.com" className="hover:text-blue-950 transition-colors duration-200">Careers</a></li>
                    <li><a href="https://www.geniescareerhub.com/privacy-policy" className="hover:text-blue-950 transition-colors duration-200">Privacy Policy</a></li>
                    <li><a href="https://www.geniescareerhub.com/recruiter/signin?redirect=/recruiter/jobs/post" className="hover:text-blue-950 transition-colors duration-200">Post Jobs</a></li>
                </ul>
            </div>
        </div>
                        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
                            <p>&copy; 2025 GeniessCareerHub. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
    </div>
  )
}

export default Footer 