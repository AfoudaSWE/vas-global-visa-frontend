import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Users, Clock, TrendingUp } from 'lucide-react'

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#18264D] mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          icon={<MapPin className="w-6 h-6" />}
          title="Total Centres"
          value="12"
          change="+2 this month"
          trend="up"
        />
        <StatsCard 
          icon={<Calendar className="w-6 h-6" />}
          title="Available Slots"
          value="248"
          change="For next 7 days"
          trend="neutral"
        />
        <StatsCard 
          icon={<Users className="w-6 h-6" />}
          title="Booked Appointments"
          value="156"
          change="+12% from last week"
          trend="up"
        />
        <StatsCard 
          icon={<Clock className="w-6 h-6" />}
          title="Pending Requests"
          value="23"
          change="Requires attention"
          trend="neutral"
        />
      </div>
      
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest appointment bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <BookingItem 
                name="Ahmed Hassan"
                service="UAE Tourist Visa"
                date="Jan 15, 2024"
                time="09:00 AM"
                status="confirmed"
              />
              <BookingItem 
                name="Sarah Johnson"
                service="Document Attestation"
                date="Jan 15, 2024"
                time="10:30 AM"
                status="confirmed"
              />
              <BookingItem 
                name="Mohammed Ali"
                service="UAE Tourist Visa"
                date="Jan 16, 2024"
                time="11:00 AM"
                status="pending"
              />
              <BookingItem 
                name="Emily Chen"
                service="Visa Consultation"
                date="Jan 16, 2024"
                time="02:00 PM"
                status="confirmed"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Centre Performance</CardTitle>
            <CardDescription>Booking statistics by centre</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <CentreItem 
                name="Dubai - Sheikh Zayed Road"
                bookings={45}
                capacity={60}
                utilizationRate={75}
              />
              <CentreItem 
                name="Abu Dhabi - Corniche"
                bookings={38}
                capacity={50}
                utilizationRate={76}
              />
              <CentreItem 
                name="Sharjah - King Faisal"
                bookings={28}
                capacity={40}
                utilizationRate={70}
              />
              <CentreItem 
                name="Dubai - Deira"
                bookings={33}
                capacity={50}
                utilizationRate={66}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickAction 
              icon={<Calendar className="w-8 h-8" />}
              title="Add New Slots"
              description="Create availability for appointments"
            />
            <QuickAction 
              icon={<MapPin className="w-8 h-8" />}
              title="Manage Centres"
              description="Edit centre details and capacity"
            />
            <QuickAction 
              icon={<Users className="w-8 h-8" />}
              title="View All Bookings"
              description="Review and manage appointments"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
}

const StatsCard = ({ icon, title, value, change, trend }: StatsCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      case 'neutral':
        return 'text-gray-600'
    }
  }
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
            {icon}
          </div>
          {trend === 'up' && <TrendingUp className="w-5 h-5 text-green-600" />}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-[#18264D]">{value}</p>
          <p className={`text-xs ${getTrendColor()}`}>{change}</p>
        </div>
      </CardContent>
    </Card>
  )
}

interface BookingItemProps {
  name: string
  service: string
  date: string
  time: string
  status: 'confirmed' | 'pending' | 'cancelled'
}

const BookingItem = ({ name, service, date, time, status }: BookingItemProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="success">Confirmed</Badge>
      case 'pending':
        return <Badge variant="warning">Pending</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
    }
  }
  
  return (
    <div className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-[#18264D]">{name}</h4>
          {getStatusBadge()}
        </div>
        <p className="text-sm text-gray-600">{service}</p>
        <p className="text-xs text-gray-500 mt-1">{date} at {time}</p>
      </div>
    </div>
  )
}

interface CentreItemProps {
  name: string
  bookings: number
  capacity: number
  utilizationRate: number
}

const CentreItem = ({ name, bookings, capacity, utilizationRate }: CentreItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-[#18264D] text-sm">{name}</h4>
          <p className="text-xs text-gray-600">{bookings}/{capacity} slots booked</p>
        </div>
        <span className="text-sm font-semibold text-[#18264D]">{utilizationRate}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-all"
          style={{ width: `${utilizationRate}%` }}
        ></div>
      </div>
    </div>
  )
}

interface QuickActionProps {
  icon: React.ReactNode
  title: string
  description: string
}

const QuickAction = ({ icon, title, description }: QuickActionProps) => {
  return (
    <button className="p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left group">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-[#18264D] mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-semibold text-[#18264D] mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  )
}

export default DashboardPage
