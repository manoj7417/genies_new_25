'use client'

import { Check, Star, Zap, Crown, Shield, ArrowRight, Search, Users } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function PricingPreview() {
  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Star className="w-4 h-4 mr-2" />
            Start Free, Upgrade When Ready
          </Badge>
          <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start building your ATS-proof resume for free. Upgrade when you're ready to unlock premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Free Tier */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 flex flex-col h-full">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Free Plan</h3>
                <div className="text-4xl font-bold text-foreground mb-2">$0</div>
                <p className="text-muted-foreground">Perfect for getting started</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-foreground">1 ATS-Optimised resume</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-foreground">5 professional templates</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-foreground">Basic keyword optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-foreground">PDF download</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-foreground">Email support</span>
                </div>
              </div>

              <Button 
                asChild
                className="w-full mt-auto"
                size="lg"
              >
                <Link href="https://www.geniescareerhub.com/cv-studio">
                  Start Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                MOST POPULAR
              </Badge>
            </div>
            
            <CardContent className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold mb-2">$14.99</div>
                <p className="text-primary-foreground/80">per month</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Everything in Free</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited resumes</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>50+ premium templates</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced AI optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>AI job matching</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority support</span>
                </div>
              </div>

              <Button 
                asChild
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-gray-100 mt-auto"
                size="lg"
              >
                <Link href="https://www.geniescareerhub.com/pricing">
                  Start Premium Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/30 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>No Credit Card Required</span>
                </div>
                <Separator orientation="vertical" className="hidden sm:block h-4" />
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Cancel Anytime</span>
                </div>
                <Separator orientation="vertical" className="hidden sm:block h-4" />
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  <span>30-Day Money Back</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

       
      </div>
    </section>
  )
} 