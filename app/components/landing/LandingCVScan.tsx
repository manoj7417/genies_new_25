'use client'
import { motion } from 'framer-motion'
import { Upload, Download, FileText, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const LandingCVScan = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-5xl text-3xl font-bold text-foreground mb-4">
            Try Our Free AI CV Scan
          </h2>
          <div className="w-32 h-0.5 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Upload your CV or start from scratch. Genies AI reviews and scores it instantly
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">No experience needed!</p>
        </motion.div>

                 {/* Main Content - Two Columns */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
           
           {/* Left Panel - How it works */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
           >
             <Card className="bg-gray-50 border-0 shadow-sm">
               <CardContent className="p-8">
                 <h3 className="text-2xl font-bold text-blue-900 mb-6">How it works:</h3>
                 
                 <div className="space-y-4 mb-8">
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-950 rounded-full flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white text-xs font-bold">1</span>
                     </div>
                     <span className="text-gray-700">Upload your CV (or start with our template)</span>
                   </div>
                   
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-950 rounded-full flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white text-xs font-bold">2</span>
                     </div>
                     <span className="text-gray-700">Genies AI reviews and scores it instantly</span>
                   </div>
                   
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-950 rounded-full flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white text-xs font-bold">3</span>
                     </div>
                     <span className="text-gray-700">Get actionable tips to improve</span>
                   </div>
                   
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-950 rounded-full flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white text-xs font-bold">4</span>
                     </div>
                     <span className="text-gray-700">Download your new, standout CV</span>
                   </div>
                 </div>

                 <Button 
                   size="lg"
                   className="w-full bg-blue-950 hover:bg-blue-950 text-white font-semibold py-3"
                   onClick={() => {
                     window.location.href = 'https://www.geniescareerhub.com/resume-analyzer';
                   }}
                 >
                   Try Free CV Scan
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </CardContent>
             </Card>
           </motion.div>

           {/* Right Panel - No experience section */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <Card className="bg-gray-50 border-0 shadow-sm">
               <CardContent className="p-8">
                 <h3 className="text-lg font-medium text-gray-500 mb-4">No experience? No problem!</h3>
                 
                 <p className="text-gray-700 mb-6">
                   Genies helps you highlight your strengths, skills, and potential,even if you're just starting out.
                 </p>

                 {/* CV Scan Preview with Image */}
                 <Card className="bg-white border border-gray-200 overflow-hidden">
                   <CardContent className="p-0">
                     <div className="p-4 border-b border-gray-100">
                       <div className="flex items-center">
                         <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                           <FileText className="w-4 h-4 text-blue-600" />
                         </div>
                         <span className="text-gray-600 font-medium">CV Scan Preview</span>
                       </div>
                     </div>
                     
                     {/* Image Section */}
                     <div className="relative">
                       <img 
                         src="/ats-score.png" 
                         alt="AI CV Analysis Interface" 
                         className="w-full h-48 object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </div>
                   </CardContent>
                 </Card>
               </CardContent>
             </Card>
           </motion.div>
         </div>
      </div>
    </section>
  )
}

export default LandingCVScan 