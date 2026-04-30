import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Clock, Plus, Filter } from 'lucide-react'

const SlotsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  
  const timeSlots = [
    { time: '09:00 AM', capacity: 10, booked: 8, available: 2 },
    { time: '09:30 AM', capacity: 10, booked: 10, available: 0 },
    { time: '10:00 AM', capacity: 10, booked: 7, available: 3 },
    { time: '10:30 AM', capacity: 10, booked: 5, available: 5 },
    { time: '11:00 AM', capacity: 10, booked: 9, available: 1 },
    { time: '11:30 AM', capacity: 10, booked: 6, available: 4 },
    { time: '02:00 PM', capacity: 10, booked: 4, available: 6 },
    { time: '02:30 PM', capacity: 10, booked: 3, available: 7 },
    { time: '03:00 PM', capacity: 10, booked: 8, available: 2 },
    { time: '03:30 PM', capacity: 10, booked: 5, available: 5 },
    { time: '04:00 PM', capacity: 10, booked: 2, available: 8 },
    { time: '04:30 PM', capacity: 10, booked: 1, available: 9 },
  ]
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#18264D] mb-2">Slots Management</h1>
          <p className="text-gray-600">Manage appointment time slots and capacity</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Bulk Slots
        </Button>
      </div>
      
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter Slots
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="centre">Centre</Label>
              <Select id="centre" className="mt-2">
                <option value="">All Centres</option>
                <option value="dubai-szr">Dubai - Sheikh Zayed Road</option>
                <option value="abudhabi">Abu Dhabi - Corniche</option>
                <option value="sharjah">Sharjah - King Faisal</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input 
                id="date" 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select id="status" className="mt-2">
                <option value="">All Statuses</option>
                <option value="available">Available</option>
                <option value="full">Fully Booked</option>
                <option value="limited">Limited Availability</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Total Slots</p>
              <p className="text-3xl font-bold text-[#18264D]">120</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Available</p>
              <p className="text-3xl font-bold text-[#2E7D32]">52</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Booked</p>
              <p className="text-3xl font-bold text-[#F0444C]">68</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Utilization</p>
              <p className="text-3xl font-bold text-[#18264D]">57%</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Time Slots Grid */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Available Time Slots</CardTitle>
              <CardDescription>
                Showing slots for Dubai - Sheikh Zayed Road on {new Date(selectedDate).toLocaleDateString()}
              </CardDescription>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-600">Limited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-600">Full</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeSlots.map((slot, index) => (
              <SlotCard key={index} {...slot} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface SlotCardProps {
  time: string
  capacity: number
  booked: number
  available: number
}

const SlotCard = ({ time, capacity, booked, available }: SlotCardProps) => {
  const getStatusColor = () => {
    if (available === 0) return 'bg-red-50 border-red-200'
    if (available <= 2) return 'bg-yellow-50 border-yellow-200'
    return 'bg-green-50 border-green-200'
  }
  
  const getStatusBadge = () => {
    if (available === 0) return <Badge variant="destructive">Full</Badge>
    if (available <= 2) return <Badge variant="warning">Limited</Badge>
    return <Badge variant="success">Available</Badge>
  }
  
  const utilizationPercent = (booked / capacity) * 100
  
  return (
    <div className={`p-4 rounded-lg border-2 ${getStatusColor()} transition-all hover:shadow-md`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#18264D]" />
          <span className="font-semibold text-[#18264D]">{time}</span>
        </div>
        {getStatusBadge()}
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-3 text-center">
        <div>
          <p className="text-xs text-gray-600">Capacity</p>
          <p className="text-sm font-bold text-[#18264D]">{capacity}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Booked</p>
          <p className="text-sm font-bold text-[#F0444C]">{booked}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Available</p>
          <p className="text-sm font-bold text-[#2E7D32]">{available}</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-all"
          style={{ width: `${utilizationPercent}%` }}
        ></div>
      </div>
      
      <Button 
        size="sm" 
        variant="outline" 
        className="w-full"
        disabled={available === 0}
      >
        {available === 0 ? 'Fully Booked' : 'Manage Slot'}
      </Button>
    </div>
  )
}

export default SlotsPage
