import { Outlet, Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  MapPin, 
  Calendar, 
  Users, 
  FileText,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-[#F7F8FB]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                VAS
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-[#18264D] text-lg leading-tight">Admin Dashboard</div>
                <div className="text-xs text-gray-500">VAS Global Management</div>
              </div>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm">
              Back to Site
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-64 bg-white border-r border-gray-200 
          transition-transform duration-300 z-30
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <nav className="p-4 space-y-2">
            <SidebarLink 
              to="/dashboard" 
              icon={<LayoutDashboard className="w-5 h-5" />}
              label="Overview"
            />
            <SidebarLink 
              to="/dashboard/centres" 
              icon={<MapPin className="w-5 h-5" />}
              label="Centres"
            />
            <SidebarLink 
              to="/dashboard/slots" 
              icon={<Calendar className="w-5 h-5" />}
              label="Slots Management"
            />
            <SidebarLink 
              to="/dashboard/bookings" 
              icon={<Users className="w-5 h-5" />}
              label="Bookings"
            />
            <SidebarLink 
              to="/dashboard/applications" 
              icon={<FileText className="w-5 h-5" />}
              label="Applications"
            />
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <SidebarLink 
                to="/dashboard/settings" 
                icon={<Settings className="w-5 h-5" />}
                label="Settings"
              />
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

interface SidebarLinkProps {
  to: string
  icon: React.ReactNode
  label: string
}

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
        isActive 
          ? 'bg-[#18264D] text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

export default DashboardLayout
