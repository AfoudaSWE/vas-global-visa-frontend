import { Link, useLocation } from 'react-router-dom'
import { Globe, ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              VAS
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#18264D] text-lg leading-tight">VAS Global</div>
              <div className="text-xs text-gray-500">Visa Application Services</div>
            </div>
          </Link>
          
          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/book-appointment" active={isActive('/book-appointment')}>Book Appointment</NavLink>
            <NavLink to="/track-application" active={isActive('/track-application')}>Track Application</NavLink>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Open Status Badge */}
            <Badge variant="success" className="hidden md:flex gap-1.5 items-center px-3 py-1.5">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-xs">Open Now</span>
            </Badge>
            
            {/* Country Selector */}
            <button className="hidden md:flex items-center gap-1.5 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">UAE</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>
            
            {/* Language Selector */}
            <button className="hidden md:flex items-center gap-1.5 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-sm font-medium text-gray-700">EN</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>
            
            {/* Mobile Menu */}
            <Link to="/dashboard" className="lg:hidden">
              <Button size="sm" variant="secondary">
                Dashboard
              </Button>
            </Link>
            
            {/* Desktop Dashboard */}
            <Link to="/dashboard" className="hidden lg:block">
              <Button size="sm" variant="secondary">
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavLinkProps {
  to: string
  active: boolean
  children: React.ReactNode
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'bg-[#18264D] text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar
