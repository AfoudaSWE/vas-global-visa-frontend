import axios from 'axios'

// API Base URL - Update this with your actual API endpoint
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.vasglobal.com/v1'

// Create axios instance with default config
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API Service Types
export interface Appointment {
  id: string
  referenceNumber: string
  serviceType: string
  centreId: string
  centreName: string
  date: string
  timeSlot: string
  applicantName: string
  email: string
  phone: string
  passportNumber: string
  nationality: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

export interface Centre {
  id: string
  name: string
  city: string
  address: string
  phone: string
  capacity: number
  availableSlots: number
  isActive: boolean
}

export interface TimeSlot {
  id: string
  time: string
  available: boolean
  capacity: number
  booked: number
}

export interface Application {
  id: string
  referenceNumber: string
  serviceType: string
  applicantName: string
  email: string
  status: 'received' | 'verified' | 'processing' | 'ready' | 'completed'
  submittedAt: string
  expectedCompletionDate: string
  timeline: ApplicationTimeline[]
}

export interface ApplicationTimeline {
  id: string
  status: string
  title: string
  description: string
  timestamp: string
}

// API Services
export const appointmentService = {
  create: async (data: Partial<Appointment>) => {
    const response = await api.post<Appointment>('/appointments', data)
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get<Appointment>(`/appointments/${id}`)
    return response.data
  },
  
  getAll: async () => {
    const response = await api.get<Appointment[]>('/appointments')
    return response.data
  },
  
  update: async (id: string, data: Partial<Appointment>) => {
    const response = await api.put<Appointment>(`/appointments/${id}`, data)
    return response.data
  },
  
  cancel: async (id: string) => {
    const response = await api.delete(`/appointments/${id}`)
    return response.data
  },
}

export const centreService = {
  getAll: async () => {
    const response = await api.get<Centre[]>('/centres')
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get<Centre>(`/centres/${id}`)
    return response.data
  },
  
  getAvailableSlots: async (centreId: string, date: string) => {
    const response = await api.get<TimeSlot[]>(`/centres/${centreId}/slots`, {
      params: { date },
    })
    return response.data
  },
}

export const applicationService = {
  track: async (referenceNumber: string) => {
    const response = await api.get<Application>(`/applications/track/${referenceNumber}`)
    return response.data
  },
  
  getAll: async () => {
    const response = await api.get<Application[]>('/applications')
    return response.data
  },
}

export const dashboardService = {
  getStats: async () => {
    const response = await api.get('/dashboard/stats')
    return response.data
  },
  
  getRecentBookings: async (limit = 10) => {
    const response = await api.get<Appointment[]>('/dashboard/recent-bookings', {
      params: { limit },
    })
    return response.data
  },
}
