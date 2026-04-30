import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle } from 'lucide-react'

const steps = [
  { id: 1, name: 'Service', description: 'Select service type' },
  { id: 2, name: 'Location', description: 'Choose center' },
  { id: 3, name: 'Date & Time', description: 'Pick slot' },
  { id: 4, name: 'Details', description: 'Your information' },
  { id: 5, name: 'Confirmation', description: 'Review & confirm' },
]

const BookAppointmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F7F8FB]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#18264D] mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-[#667085]">
            Schedule your visa application appointment in just a few steps
          </p>
        </div>
        
        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep > step.id 
                      ? 'bg-[#2E7D32] text-white' 
                      : currentStep === step.id 
                      ? 'bg-[#18264D] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </div>
                  <div className="text-center hidden md:block">
                    <div className={`text-sm font-semibold ${
                      currentStep >= step.id ? 'text-[#18264D]' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${
                    currentStep > step.id ? 'bg-[#2E7D32]' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Form Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {steps[currentStep - 1].name}
            </CardTitle>
            <CardDescription className="text-base">
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#18264D] mb-4">Select Service Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ServiceOption 
                    title="UAE Tourist Visa"
                    description="14, 30, or 90-day tourist visa"
                    selected={true}
                  />
                  <ServiceOption 
                    title="Document Attestation"
                    description="Educational & personal documents"
                    selected={false}
                  />
                  <ServiceOption 
                    title="Visa Consultation"
                    description="Expert guidance for your application"
                    selected={false}
                  />
                  <ServiceOption 
                    title="Other Services"
                    description="Additional visa services"
                    selected={false}
                  />
                </div>
              </div>
            )}
            
            {/* Step 2: Location Selection */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#18264D] mb-4">Select Application Center</h3>
                <div className="space-y-3">
                  <LocationOption 
                    city="Dubai"
                    address="123 Sheikh Zayed Road, Dubai"
                    selected={true}
                  />
                  <LocationOption 
                    city="Abu Dhabi"
                    address="456 Corniche Road, Abu Dhabi"
                    selected={false}
                  />
                  <LocationOption 
                    city="Sharjah"
                    address="789 King Faisal Street, Sharjah"
                    selected={false}
                  />
                </div>
              </div>
            )}
            
            {/* Step 3: Date & Time */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#18264D] mb-4">Select Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Date</Label>
                    <Input type="date" className="mt-2" />
                  </div>
                  <div>
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <TimeSlot time="09:00 AM" available={true} />
                      <TimeSlot time="10:00 AM" available={true} />
                      <TimeSlot time="11:00 AM" available={false} />
                      <TimeSlot time="02:00 PM" available={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 4: Applicant Details */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#18264D] mb-4">Applicant Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+971 XX XXX XXXX" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="passport">Passport Number</Label>
                    <Input id="passport" placeholder="Enter passport number" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input id="nationality" placeholder="Enter nationality" className="mt-2" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg text-[#18264D] mb-4">Confirm Your Appointment</h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <SummaryItem label="Service" value="UAE Tourist Visa" />
                  <SummaryItem label="Location" value="Dubai - Sheikh Zayed Road" />
                  <SummaryItem label="Date & Time" value="January 15, 2024 at 09:00 AM" />
                  <SummaryItem label="Applicant" value="John Doe" />
                  <SummaryItem label="Contact" value="john.doe@example.com | +971 XX XXX XXXX" />
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Appointment Ready</p>
                    <p className="text-sm text-green-700">Please review the details and confirm your appointment.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button 
                onClick={() => {
                  if (currentStep < 5) {
                    setCurrentStep(currentStep + 1)
                  }
                }}
              >
                {currentStep === 5 ? 'Confirm Appointment' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const ServiceOption = ({ title, description, selected }: { title: string; description: string; selected: boolean }) => {
  return (
    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
      selected ? 'border-[#18264D] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-[#18264D]">{title}</h4>
        {selected && <Badge variant="accent">Selected</Badge>}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

const LocationOption = ({ city, address, selected }: { city: string; address: string; selected: boolean }) => {
  return (
    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
      selected ? 'border-[#18264D] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-[#18264D]">{city}</h4>
          <p className="text-sm text-gray-600">{address}</p>
        </div>
        {selected && <Badge variant="accent">Selected</Badge>}
      </div>
    </div>
  )
}

const TimeSlot = ({ time, available }: { time: string; available: boolean }) => {
  return (
    <button 
      disabled={!available}
      className={`p-3 rounded-lg text-sm font-medium transition-colors ${
        available 
          ? 'bg-white border-2 border-gray-200 hover:border-[#18264D] text-[#18264D]' 
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
      }`}
    >
      {time}
    </button>
  )
}

const SummaryItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex justify-between items-start">
      <span className="text-sm font-medium text-gray-600">{label}:</span>
      <span className="text-sm font-semibold text-[#18264D] text-right">{value}</span>
    </div>
  )
}

export default BookAppointmentPage
