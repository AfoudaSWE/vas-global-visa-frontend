// Service Types
export const SERVICE_TYPES = [
  { id: 'uae-tourist-visa', label: 'UAE Tourist Visa', description: '14, 30, or 90-day tourist visa' },
  { id: 'document-attestation', label: 'Document Attestation', description: 'Educational & personal documents' },
  { id: 'visa-consultation', label: 'Visa Consultation', description: 'Expert guidance for your application' },
  { id: 'other-services', label: 'Other Services', description: 'Additional visa services' },
] as const

// Centres
export const CENTRES = [
  {
    id: 'dubai-szr',
    name: 'Dubai - Sheikh Zayed Road',
    city: 'Dubai',
    address: '123 Sheikh Zayed Road, Dubai',
    phone: '+971 4 XXX XXXX',
  },
  {
    id: 'abudhabi-corniche',
    name: 'Abu Dhabi - Corniche',
    city: 'Abu Dhabi',
    address: '456 Corniche Road, Abu Dhabi',
    phone: '+971 2 XXX XXXX',
  },
  {
    id: 'sharjah-kf',
    name: 'Sharjah - King Faisal',
    city: 'Sharjah',
    address: '789 King Faisal Street, Sharjah',
    phone: '+971 6 XXX XXXX',
  },
  {
    id: 'dubai-deira',
    name: 'Dubai - Deira',
    city: 'Dubai',
    address: '321 Deira Street, Dubai',
    phone: '+971 4 YYY YYYY',
  },
] as const

// Time Slots
export const TIME_SLOTS = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
] as const

// Countries
export const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
  'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
  'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
  'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
  'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
  'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
  'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
  'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
  'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa',
  'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
  'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
  'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen',
  'Zambia', 'Zimbabwe',
] as const

// Application Statuses
export const APPLICATION_STATUSES = {
  RECEIVED: 'received',
  VERIFIED: 'verified',
  PROCESSING: 'processing',
  READY: 'ready',
  COMPLETED: 'completed',
} as const

// Booking Statuses
export const BOOKING_STATUSES = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

// Contact Info
export const CONTACT_INFO = {
  email: 'info@vasglobal.com',
  phone: '+971 4 XXX XXXX',
  address: '123 Business District, Dubai, UAE',
  workingHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
} as const

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/vasglobal',
  twitter: 'https://twitter.com/vasglobal',
  linkedin: 'https://linkedin.com/company/vasglobal',
  instagram: 'https://instagram.com/vasglobal',
} as const
