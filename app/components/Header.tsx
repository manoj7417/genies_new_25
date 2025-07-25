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
    ChevronDown,
    FileText,
    BookOpen,
    Video,
    Calendar
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Toast from './Toast';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const handleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleComingSoonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowToast(true);
        setActiveDropdown(null); // Close dropdown
    };

    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('core-features')
        if (featuresSection) {
            featuresSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const jobSeekerLinks = [
        { name: 'Find Jobs', href: 'https://www.geniescareerhub.com/jobs', icon: Search },
        { name: 'Resume Builder', href: 'https://www.geniescareerhub.com/resume', icon: FileText },
        { name: 'Career Coaching', href: 'https://www.geniescareerhub.com/career-services', icon: BookOpen },
        { name: 'Interview Prep', href: '#interview-prep', icon: Video },
        { name: 'Salary Guide', href: '#salary-guide', icon: TrendingUp }
    ];

    const recruiterLinks = [
        { name: 'Post Jobs', href: 'https://www.geniescareerhub.com/recruiter/signin?redirect=/recruiter/jobs/post', icon: Briefcase },
        { name: 'Find Candidates', href: 'https://www.geniescareerhub.com/recruiter/signin?redirect=/recruiter/candidates', icon: Users },
        { name: 'Applicant Tracking', href: '#applicant-tracking', icon: Target },
        { name: 'Schedule Interviews', href: '#schedule-interviews', icon: Calendar },
        { name: 'Recruitment Analytics', href: '#recruitment-analytics', icon: TrendingUp }
    ];

  return (
    <div>
        <Toast 
            message="Coming soon" 
            isVisible={showToast} 
            onClose={() => setShowToast(false)} 
        />
        <nav ref={navRef} className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white shadow-sm border-b border-warm-100' 
                : 'bg-transparent'
        }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 flex items-center">
                                    <img src="/beta-logo.png" alt="GenieCareerHub Logo" className="h-14 w-auto mr-2" />
                                    
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-8">
                                    
                                    
                                    {/* Job Seekers Dropdown */}
                                    <div className="relative group">
                                        <button 
                                            onClick={() => handleDropdown('jobSeekers')} 
                                            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                                isScrolled 
                                                    ? 'text-blue-950 hover:text-blue-950' 
                                                    : 'text-white hover:text-gray-200'
                                            }`}
                                        >
                                            For Job Seekers
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'jobSeekers' ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {activeDropdown === 'jobSeekers' && (
                                            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-warm-100 py-2 z-50">
                                                {jobSeekerLinks.map((link) => {
                                                    const IconComponent = link.icon;
                                                    const isComingSoon = link.name === 'Interview Prep' || link.name === 'Salary Guide';
                                                    
                                                    if (isComingSoon) {
                                                        return (
                                                            <button 
                                                                key={link.name} 
                                                                onClick={handleComingSoonClick}
                                                                className="flex items-center w-full px-4 py-3 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200 text-left"
                                                            >
                                                                <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                                {link.name}
                                                            </button>
                                                        );
                                                    }
                                                    
                                                    return (
                                                        <Link 
                                                            key={link.name} 
                                                            href={link.href} 
                                                            className="flex items-center px-4 py-3 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                                        >
                                                            <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                            {link.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                    {/* Recruiters Dropdown */}
                                    <div className="relative group">
                                        <button 
                                            onClick={() => handleDropdown('recruiters')} 
                                            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                                isScrolled 
                                                    ? 'text-blue-950 hover:text-blue-950' 
                                                    : 'text-white hover:text-gray-200'
                                            }`}
                                        >
                                            For Recruiters
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'recruiters' ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {activeDropdown === 'recruiters' && (
                                            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-warm-100 py-2 z-50">
                                                {recruiterLinks.map((link) => {
                                                    const IconComponent = link.icon;
                                                    const isComingSoon = link.name === 'Applicant Tracking' || link.name === 'Schedule Interviews' || link.name === 'Recruitment Analytics';
                                                    
                                                    if (isComingSoon) {
                                                        return (
                                                            <button 
                                                                key={link.name} 
                                                                onClick={handleComingSoonClick}
                                                                className="flex items-center w-full px-4 py-3 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200 text-left"
                                                            >
                                                                <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                                {link.name}
                                                            </button>
                                                        );
                                                    }
                                                    
                                                    return (
                                                        <Link 
                                                            key={link.name} 
                                                            href={link.href} 
                                                            className="flex items-center px-4 py-3 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                                        >
                                                            <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                            {link.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                    <button 
                                        onClick={scrollToFeatures}
                                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                            isScrolled 
                                                ? 'text-blue-950 hover:text-blue-950' 
                                                : 'text-white hover:text-gray-200'
                                        }`}
                                    >
                                        Services
                                    </button>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-4">
                                <Link href="https://www.geniescareerhub.com/login" className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isScrolled 
                                        ? 'text-blue-950 hover:text-blue-950' 
                                        : 'text-white hover:text-gray-200'
                                }`}>
                                    Sign In
                                </Link>
                                <Link href="https://www.geniescareerhub.com/" className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                                    Get Started
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button 
                                    onClick={toggleMenu}
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                        isScrolled 
                                            ? 'text-blue-950 hover:text-blue-950' 
                                            : 'text-white hover:text-gray-200'
                                    }`}
                                >
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-warm-100">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <button 
                                    onClick={() => {
                                        scrollToFeatures();
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                >
                                    Services
                                </button>
                                
                                {/* Mobile Job Seekers */}
                                <div className="border-t border-warm-100 pt-2">
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        For Job Seekers
                                    </div>
                                    {jobSeekerLinks.map((link) => {
                                        const IconComponent = link.icon;
                                        const isComingSoon = link.name === 'Interview Prep' || link.name === 'Salary Guide';
                                        
                                        if (isComingSoon) {
                                            return (
                                                <button 
                                                    key={link.name} 
                                                    onClick={(e) => {
                                                        handleComingSoonClick(e);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="flex items-center w-full px-3 py-2 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                                >
                                                    <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                    {link.name}
                                                </button>
                                            );
                                        }
                                        
                                        return (
                                            <Link 
                                                key={link.name} 
                                                href={link.href} 
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center px-3 py-2 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                            >
                                                <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Mobile Recruiters */}
                                <div className="border-t border-warm-100 pt-2">
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        For Recruiters
                                    </div>
                                    {recruiterLinks.map((link) => {
                                        const IconComponent = link.icon;
                                        const isComingSoon = link.name === 'Applicant Tracking' || link.name === 'Schedule Interviews' || link.name === 'Recruitment Analytics';
                                        
                                        if (isComingSoon) {
                                            return (
                                                <button 
                                                    key={link.name} 
                                                    onClick={(e) => {
                                                        handleComingSoonClick(e);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="flex items-center w-full px-3 py-2 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                                >
                                                    <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                    {link.name}
                                                </button>
                                            );
                                        }
                                        
                                        return (
                                            <Link 
                                                key={link.name} 
                                                href={link.href} 
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center px-3 py-2 text-sm text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                            >
                                                <IconComponent className="h-4 w-4 mr-3 text-blue-950" />
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Mobile Sign In and Get Started */}
                                <div className="border-t border-warm-100 pt-4">
                                    <Link 
                                        href="https://www.geniescareerhub.com/login" 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-left px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-50 hover:text-blue-950 transition-colors duration-200"
                                    >
                                        Sign In
                                    </Link>
                                    <Link 
                                        href="https://www.geniescareerhub.com/" 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full mt-2 bg-blue-950 hover:bg-blue-900 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
    </div>
  )
}

export default Navbar; 