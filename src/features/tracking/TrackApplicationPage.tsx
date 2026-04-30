import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Search, CheckCircle2, Clock, FileText, Package } from 'lucide-react'

const TrackApplicationPage = () => {
  const [tracking, setTracking] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  
  const handleTrack = () => {
    setTracking(true)
  }
  
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F7F8FB]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#18264D] mb-4">
            Track Your Application
          </h1>
          <p className="text-lg text-[#667085]">
            Enter your reference number to check the status of your visa application
          </p>
        </div>
        
        {/* Search Card */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Application Tracking</CardTitle>
            <CardDescription className="text-base">
              Enter your application or reference number below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="reference">Reference Number</Label>
                <div className="flex gap-3 mt-2">
                  <Input 
                    id="reference" 
                    placeholder="e.g., VAS2024123456"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTrack} className="px-8">
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                You can find your reference number in the confirmation email sent to you after booking.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Status Card - Only shown after tracking */}
        {tracking && (
          <>
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Application Status</CardTitle>
                    <CardDescription className="text-base">
                      Reference: <span className="font-semibold text-[#18264D]">VAS2024123456</span>
                    </CardDescription>
                  </div>
                  <Badge variant="success" className="text-sm px-4 py-2">
                    In Progress
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <InfoCard 
                    label="Service Type"
                    value="UAE Tourist Visa"
                  />
                  <InfoCard 
                    label="Application Date"
                    value="Jan 10, 2024"
                  />
                  <InfoCard 
                    label="Expected Completion"
                    value="Jan 15, 2024"
                  />
                </div>
                
                {/* Timeline */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg text-[#18264D]">Application Timeline</h3>
                  
                  <TimelineItem 
                    icon={<CheckCircle2 className="w-6 h-6" />}
                    title="Application Received"
                    description="Your application has been received and is being reviewed"
                    date="Jan 10, 2024 - 10:30 AM"
                    status="completed"
                  />
                  
                  <TimelineItem 
                    icon={<FileText className="w-6 h-6" />}
                    title="Document Verification"
                    description="All submitted documents are being verified"
                    date="Jan 11, 2024 - 02:15 PM"
                    status="completed"
                  />
                  
                  <TimelineItem 
                    icon={<Clock className="w-6 h-6" />}
                    title="Processing"
                    description="Your application is currently being processed"
                    date="Jan 12, 2024 - 09:00 AM"
                    status="current"
                  />
                  
                  <TimelineItem 
                    icon={<Package className="w-6 h-6" />}
                    title="Ready for Collection"
                    description="Your visa will be ready for collection"
                    date="Estimated: Jan 15, 2024"
                    status="pending"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Support */}
            <Card className="shadow-lg bg-gradient-to-br from-[#18264D] to-[#0f1a36] text-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                    <p className="text-gray-200">
                      Contact our support team for any questions about your application
                    </p>
                  </div>
                  <Button variant="default" className="bg-white text-[#18264D] hover:bg-gray-100">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

const InfoCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="font-semibold text-[#18264D]">{value}</div>
    </div>
  )
}

interface TimelineItemProps {
  icon: React.ReactNode
  title: string
  description: string
  date: string
  status: 'completed' | 'current' | 'pending'
}

const TimelineItem = ({ icon, title, description, date, status }: TimelineItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-[#2E7D32] text-white'
      case 'current':
        return 'bg-[#F0444C] text-white'
      case 'pending':
        return 'bg-gray-200 text-gray-400'
    }
  }
  
  const getLineColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-[#2E7D32]'
      case 'current':
        return 'bg-[#F0444C]'
      case 'pending':
        return 'bg-gray-200'
    }
  }
  
  return (
    <div className="flex gap-4 relative">
      {status !== 'pending' && (
        <div className={`absolute left-6 top-16 w-0.5 h-full ${getLineColor()}`}></div>
      )}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getStatusColor()}`}>
        {icon}
      </div>
      <div className="flex-1 pb-8">
        <h4 className={`font-semibold mb-1 ${status === 'pending' ? 'text-gray-500' : 'text-[#18264D]'}`}>
          {title}
        </h4>
        <p className={`text-sm mb-2 ${status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
        <p className={`text-xs ${status === 'pending' ? 'text-gray-400' : 'text-gray-500'}`}>
          {date}
        </p>
      </div>
    </div>
  )
}

export default TrackApplicationPage
