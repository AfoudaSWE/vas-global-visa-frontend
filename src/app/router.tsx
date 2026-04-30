import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/features/home/HomePage'
import ServicesPage from '@/features/services/ServicesPage'
import BookAppointmentPage from '@/features/appointments/BookAppointmentPage'
import TrackApplicationPage from '@/features/tracking/TrackApplicationPage'
import DashboardLayout from '@/features/dashboard/DashboardLayout'
import DashboardPage from '@/features/dashboard/DashboardPage'
import CentresPage from '@/features/dashboard/centres/CentresPage'
import SlotsPage from '@/features/dashboard/slots/SlotsPage'
import BookingsPage from '@/features/dashboard/bookings/BookingsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'book-appointment',
        element: <BookAppointmentPage />,
      },
      {
        path: 'track-application',
        element: <TrackApplicationPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'centres',
        element: <CentresPage />,
      },
      {
        path: 'slots',
        element: <SlotsPage />,
      },
      {
        path: 'bookings',
        element: <BookingsPage />,
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
