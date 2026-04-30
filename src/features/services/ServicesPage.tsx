import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plane, Calendar, FileText, Search, ArrowRight } from 'lucide-react'

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#18264D] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto">
            Comprehensive visa and document services tailored to your needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ServiceDetailCard 
            icon={<Plane className="w-12 h-12" />}
            title="UAE Tourist Visa"
            description="Fast and reliable tourist visa processing for UAE. Get your visa in as little as 24-48 hours with our express service."
            features={[
              '14-day, 30-day, and 90-day visa options',
              'Single and multiple entry visas',
              'Express processing available',
              'Full document support',
            ]}
            linkTo="/book-appointment"
          />
          
          <ServiceDetailCard 
            icon={<Calendar className="w-12 h-12" />}
            title="Appointment Booking"
            description="Schedule your visa application appointment at our authorized centers across multiple locations."
            features={[
              'Choose your preferred date and time',
              'Multiple location options',
              'Online slot booking',
              'Instant confirmation',
            ]}
            linkTo="/book-appointment"
          />
          
          <ServiceDetailCard 
            icon={<FileText className="w-12 h-12" />}
            title="Document Attestation"
            description="Get your educational, personal, and commercial documents attested for UAE and other countries."
            features={[
              'Educational certificate attestation',
              'Marriage certificate attestation',
              'Commercial document attestation',
              'Fast turnaround time',
            ]}
            linkTo="/book-appointment"
          />
          
          <ServiceDetailCard 
            icon={<Search className="w-12 h-12" />}
            title="Application Tracking"
            description="Track your visa application status in real-time with our advanced tracking system."
            features={[
              'Real-time status updates',
              'SMS and email notifications',
              'Detailed timeline view',
              '24/7 access to application status',
            ]}
            linkTo="/track-application"
          />
        </div>
      </div>
    </div>
  )
}

interface ServiceDetailCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  linkTo: string
}

const ServiceDetailCard = ({ icon, title, description, features, linkTo }: ServiceDetailCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <ArrowRight className="w-4 h-4 text-[#F0444C] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={linkTo}>
          <Button className="w-full">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ServicesPage
