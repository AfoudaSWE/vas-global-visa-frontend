import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Clock, Shield, Zap, Plane, FileText, Calendar, MapPin } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-6 text-sm px-4 py-2">
              🏆 Official ICP Partner
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <br />
              <span className="text-gradient-primary bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                VAS Global
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Your trusted partner for UAE visa applications and document services. 
              Fast, secure, and hassle-free processing with government authorization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/book-appointment">
                <Button size="xl" className="w-full sm:w-auto shadow-2xl">
                  Apply for UAE Tourist Visa
                </Button>
              </Link>
              <Link to="/track-application">
                <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                  Track Application
                </Button>
              </Link>
            </div>
            
            {/* Quick Link */}
            <Link to="/book-appointment" className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium underline underline-offset-4">Book an Appointment Now</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={<Shield className="w-6 h-6 text-[#F0444C]" />}
              title="Authorized by Government"
              description="Official ICP partner with full authorization"
            />
            <FeatureItem 
              icon={<Zap className="w-6 h-6 text-[#F0444C]" />}
              title="Fast Processing"
              description="Quick turnaround time for all services"
            />
            <FeatureItem 
              icon={<CheckCircle2 className="w-6 h-6 text-[#F0444C]" />}
              title="Hassle-Free Application"
              description="Simple and streamlined process"
            />
          </div>
        </div>
      </section>
      
      {/* One Destination Section */}
      <section className="py-20 bg-[#F7F8FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18264D] mb-4">
              One Destination, One Easy Start
            </h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Complete visa solutions for UAE tourist visas, document attestation, 
              and appointment scheduling—all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Plane className="w-8 h-8" />}
              title="UAE Tourist Visa"
              description="Fast-track visa processing for tourists visiting the UAE"
              image="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&q=80"
            />
            <ServiceCard 
              icon={<Calendar className="w-8 h-8" />}
              title="Book Appointment"
              description="Schedule your visa application appointment online"
              image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80"
            />
            <ServiceCard 
              icon={<FileText className="w-8 h-8" />}
              title="Document Attestation"
              description="Get your documents attested quickly and securely"
              image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80"
            />
            <ServiceCard 
              icon={<MapPin className="w-8 h-8" />}
              title="Track Application"
              description="Monitor your application status in real-time"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18264D] mb-4">
              Why Choose VAS Global?
            </h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              We provide premium visa services with a commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Clock className="w-10 h-10 text-[#F0444C]" />}
              title="24/7 Support"
              description="Our dedicated team is available round the clock to assist you with your visa application process."
            />
            <BenefitCard 
              icon={<Shield className="w-10 h-10 text-[#F0444C]" />}
              title="Secure & Confidential"
              description="Your personal information and documents are protected with bank-level security."
            />
            <BenefitCard 
              icon={<CheckCircle2 className="w-10 h-10 text-[#F0444C]" />}
              title="High Success Rate"
              description="99% application success rate with our expert guidance and thorough document review."
            />
            <BenefitCard 
              icon={<Zap className="w-10 h-10 text-[#F0444C]" />}
              title="Fast Processing"
              description="Express visa processing available with delivery in as fast as 24-48 hours."
            />
            <BenefitCard 
              icon={<FileText className="w-10 h-10 text-[#F0444C]" />}
              title="Complete Documentation"
              description="We handle all documentation requirements and ensure everything is in order."
            />
            <BenefitCard 
              icon={<MapPin className="w-10 h-10 text-[#F0444C]" />}
              title="Multiple Locations"
              description="Service centers across major cities for your convenience and accessibility."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#18264D] to-[#0f1a36]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of satisfied customers who trust VAS Global for their visa needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="xl" variant="default" className="w-full sm:w-auto bg-white text-[#18264D] hover:bg-gray-100">
                Get Started Now
              </Button>
            </Link>
            <Link to="/services">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#18264D]">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Feature Item Component
interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#18264D] mb-1">{title}</h3>
        <p className="text-sm text-[#667085]">{description}</p>
      </div>
    </div>
  )
}

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#18264D]">
          {icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

// Benefit Card Component
interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default HomePage
