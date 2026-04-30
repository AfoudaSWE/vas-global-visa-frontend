import { z } from 'zod'

// Appointment Booking Validation Schema
export const appointmentSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service type'),
  centreId: z.string().min(1, 'Please select a centre'),
  date: z.string().min(1, 'Please select a date'),
  timeSlot: z.string().min(1, 'Please select a time slot'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  passportNumber: z.string().min(5, 'Please enter a valid passport number'),
  nationality: z.string().min(2, 'Please select your nationality'),
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

// Application Tracking Validation Schema
export const trackingSchema = z.object({
  referenceNumber: z.string().min(5, 'Please enter a valid reference number'),
})

export type TrackingFormData = z.infer<typeof trackingSchema>

// Centre Management Validation Schema
export const centreSchema = z.object({
  name: z.string().min(3, 'Centre name must be at least 3 characters'),
  city: z.string().min(2, 'Please enter a city'),
  address: z.string().min(10, 'Please enter a complete address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  capacity: z.number().min(1, 'Capacity must be at least 1').max(200, 'Capacity cannot exceed 200'),
  isActive: z.boolean(),
})

export type CentreFormData = z.infer<typeof centreSchema>

// Contact Form Validation Schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
