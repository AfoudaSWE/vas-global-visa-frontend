import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, Download, Eye, X, CheckCircle } from 'lucide-react'

const BookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const bookings = [
    {
      id: '1',
      referenceNumber: 'VAS2024001',
      applicantName: 'Ahmed Hassan',
      email: 'ahmed.hassan@email.com',
      phone: '+971 50 123 4567',
      serviceType: 'UAE Tourist Visa',
      centre: 'Dubai - Sheikh Zayed Road',
      date: '2024-01-15',
      time: '09:00 AM',
      status: 'confirmed' as const,
      createdAt: '2024-01-10',
    },
    {
      id: '2',
      referenceNumber: 'VAS2024002',
      applicantName: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+971 52 987 6543',
      serviceType: 'Document Attestation',
      centre: 'Dubai - Sheikh Zayed Road',
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'confirmed' as const,
      createdAt: '2024-01-11',
    },
    {
      id: '3',
      referenceNumber: 'VAS2024003',
      applicantName: 'Mohammed Ali',
      email: 'mohammed.ali@email.com',
      phone: '+971 55 456 7890',
      serviceType: 'UAE Tourist Visa',
      centre: 'Abu Dhabi - Corniche',
      date: '2024-01-16',
      time: '11:00 AM',
      status: 'pending' as const,
      createdAt: '2024-01-12',
    },
    {
      id: '4',
      referenceNumber: 'VAS2024004',
      applicantName: 'Emily Chen',
      email: 'emily.chen@email.com',
      phone: '+971 58 234 5678',
      serviceType: 'Visa Consultation',
      centre: 'Sharjah - King Faisal',
      date: '2024-01-16',
      time: '02:00 PM',
      status: 'confirmed' as const,
      createdAt: '2024-01-12',
    },
    {
      id: '5',
      referenceNumber: 'VAS2024005',
      applicantName: 'Omar Abdullah',
      email: 'omar.abdullah@email.com',
      phone: '+971 56 789 0123',
      serviceType: 'UAE Tourist Visa',
      centre: 'Dubai - Deira',
      date: '2024-01-17',
      time: '09:30 AM',
      status: 'cancelled' as const,
      createdAt: '2024-01-13',
    },
  ]
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#18264D] mb-2">Bookings Management</h1>
          <p className="text-gray-600">View and manage all appointment bookings</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>
      
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  id="search"
                  placeholder="Search by name, email, or reference..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select id="status" className="mt-2">
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="centre">Centre</Label>
              <Select id="centre" className="mt-2">
                <option value="">All Centres</option>
                <option value="dubai-szr">Dubai - SZR</option>
                <option value="abudhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Total Bookings" value="156" variant="primary" />
        <StatsCard title="Confirmed" value="98" variant="success" />
        <StatsCard title="Pending" value="35" variant="warning" />
        <StatsCard title="Cancelled" value="23" variant="danger" />
      </div>
      
      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>List of all appointment bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <BookingCard key={booking.id} {...booking} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface StatsCardProps {
  title: string
  value: string
  variant: 'primary' | 'success' | 'warning' | 'danger'
}

const StatsCard = ({ title, value, variant }: StatsCardProps) => {
  const getColorClass = () => {
    switch (variant) {
      case 'primary':
        return 'text-[#18264D]'
      case 'success':
        return 'text-[#2E7D32]'
      case 'warning':
        return 'text-amber-600'
      case 'danger':
        return 'text-[#F0444C]'
    }
  }
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className={`text-3xl font-bold ${getColorClass()}`}>{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

interface BookingCardProps {
  referenceNumber: string
  applicantName: string
  email: string
  phone: string
  serviceType: string
  centre: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

const BookingCard = ({ 
  referenceNumber, 
  applicantName, 
  email, 
  phone, 
  serviceType, 
  centre, 
  date, 
  time, 
  status,
  createdAt 
}: BookingCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="success">Confirmed</Badge>
      case 'pending':
        return <Badge variant="warning">Pending</Badge>
      case 'completed':
        return <Badge variant="default">Completed</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
    }
  }
  
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#18264D] transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#18264D]">{applicantName}</h4>
                {getStatusBadge()}
              </div>
              <p className="text-sm text-gray-600">Ref: {referenceNumber}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Email:</span>
              <span className="ml-2 text-gray-700">{email}</span>
            </div>
            <div>
              <span className="text-gray-500">Phone:</span>
              <span className="ml-2 text-gray-700">{phone}</span>
            </div>
            <div>
              <span className="text-gray-500">Service:</span>
              <span className="ml-2 text-gray-700">{serviceType}</span>
            </div>
            <div>
              <span className="text-gray-500">Centre:</span>
              <span className="ml-2 text-gray-700">{centre}</span>
            </div>
            <div>
              <span className="text-gray-500">Date:</span>
              <span className="ml-2 text-gray-700">{new Date(date).toLocaleDateString()} at {time}</span>
            </div>
            <div>
              <span className="text-gray-500">Booked:</span>
              <span className="ml-2 text-gray-700">{new Date(createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex lg:flex-col gap-2">
          <Button size="sm" variant="outline" className="gap-2 flex-1 lg:flex-none">
            <Eye className="w-4 h-4" />
            View
          </Button>
          {status === 'pending' && (
            <Button size="sm" className="gap-2 flex-1 lg:flex-none">
              <CheckCircle className="w-4 h-4" />
              Confirm
            </Button>
          )}
          {status !== 'cancelled' && (
            <Button size="sm" variant="outline" className="gap-2 text-red-600 hover:bg-red-50">
              <X className="w-4 h-4" />
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingsPage
