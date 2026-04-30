import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Plus, Search, Edit, Trash2 } from 'lucide-react'

const CentresPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const centres = [
    {
      id: '1',
      name: 'Dubai - Sheikh Zayed Road',
      city: 'Dubai',
      address: '123 Sheikh Zayed Road, Dubai',
      phone: '+971 4 XXX XXXX',
      capacity: 60,
      availableSlots: 45,
      isActive: true,
    },
    {
      id: '2',
      name: 'Abu Dhabi - Corniche',
      city: 'Abu Dhabi',
      address: '456 Corniche Road, Abu Dhabi',
      phone: '+971 2 XXX XXXX',
      capacity: 50,
      availableSlots: 38,
      isActive: true,
    },
    {
      id: '3',
      name: 'Sharjah - King Faisal',
      city: 'Sharjah',
      address: '789 King Faisal Street, Sharjah',
      phone: '+971 6 XXX XXXX',
      capacity: 40,
      availableSlots: 28,
      isActive: true,
    },
    {
      id: '4',
      name: 'Dubai - Deira',
      city: 'Dubai',
      address: '321 Deira Street, Dubai',
      phone: '+971 4 YYY YYYY',
      capacity: 50,
      availableSlots: 33,
      isActive: false,
    },
  ]
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#18264D] mb-2">Centres Management</h1>
          <p className="text-gray-600">Manage application centres and their capacity</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add New Centre
        </Button>
      </div>
      
      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search centres by name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Centres Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {centres.map((centre) => (
          <Card key={centre.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{centre.name}</CardTitle>
                    <Badge variant={centre.isActive ? 'success' : 'secondary'}>
                      {centre.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <CardDescription>{centre.city}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{centre.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-700">{centre.phone}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-xs text-gray-500">Total Capacity</Label>
                    <p className="text-2xl font-bold text-[#18264D]">{centre.capacity}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500">Available Slots</Label>
                    <p className="text-2xl font-bold text-[#2E7D32]">{centre.availableSlots}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Utilization</span>
                    <span className="font-semibold text-[#18264D]">
                      {Math.round(((centre.capacity - centre.availableSlots) / centre.capacity) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all"
                      style={{ 
                        width: `${((centre.capacity - centre.availableSlots) / centre.capacity) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CentresPage
