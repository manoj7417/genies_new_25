'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Contact', href: '#contact' },
  ]



  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-14 w-20"
                src="/beta-logo.png"
                alt="Geniess Career Hub"
              />
            </div>
            
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => {
              window.location.href = 'https://www.geniescareerhub.com/login';
            }}>
              Sign In
            </Button>
            <Button size="sm" onClick={() => {
              window.location.href = 'https://www.geniescareerhub.com/cv-studio';
            }}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-background border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 space-y-3 border-t border-border">
                <Button variant="ghost" className="w-full justify-start text-base py-3" size="sm" onClick={() => {
                  window.location.href = 'https://www.geniescareerhub.com/login';
                }}>
                  Sign In
                </Button>
                <Button className="w-full text-base py-3" size="sm" onClick={() => {
                  window.location.href = 'https://www.geniescareerhub.com/cv-studio';
                }}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default LandingHeader 