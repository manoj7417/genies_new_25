'use client'

import { CheckCircle, TrendingUp, Award, Users, AlertTriangle, ArrowRight, Zap, Target, BarChart3, Brain, Search, Palette, Download } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function TrustAndProblem() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Signals Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Trust & Recognition
            </Badge>
            <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our AI-powered system
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* ATS Pass Rate */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">95%</h3>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">ATS Pass Rate</p>
                <p className="text-xs lg:text-sm text-muted-foreground mt-2">Our CVs consistently pass Applicant Tracking Systems</p>
              </CardContent>
            </Card>

            {/* Careers Transformed */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">10,000+</h3>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Careers Transformed</p>
                <p className="text-xs lg:text-sm text-muted-foreground mt-2">Real professionals who landed their dream jobs</p>
              </CardContent>
            </Card>

            {/* Trusted by Professionals */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Trusted by Professionals</h3>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Across the UK and Globally</p>
                <p className="text-xs lg:text-sm text-muted-foreground mt-2">Helping individuals build smarter career paths</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 