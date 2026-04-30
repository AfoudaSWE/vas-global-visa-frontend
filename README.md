# VAS Global - Visa Application Services

A modern, premium React web application for visa application services built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router** - Navigation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TanStack Query** - Data fetching
- **Axios** - HTTP client
- **Lucide React** - Icons
- **class-variance-authority** - Component variants

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

- **Premium Government Service Look**: Professional navy and red color scheme
- **Floating Navbar**: White rounded navigation bar with centered links
- **Hero Section**: Full-width hero with dark city background overlay
- **Gradient Buttons**: Navy-to-red gradient primary buttons
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Modern UI Components**: Cards, badges, forms with shadcn/ui styling
- **Smooth Animations**: Hover effects and transitions

## 🎨 Color Palette

- Primary Navy: `#18264D`
- Accent Red: `#F0444C`
- Dark Overlay: `rgba(20, 14, 10, 0.65)`
- White: `#FFFFFF`
- Light Background: `#F7F8FB`
- Muted Text: `#667085`
- Border: `#E5E7EB`
- Success Green: `#2E7D32`

## 📄 Pages

1. **Home Page** (`/`)
   - Hero section with call-to-action buttons
   - Feature highlights
   - Service cards
   - Benefits section
   - CTA section

2. **Services Page** (`/services`)
   - Detailed service cards
   - UAE Tourist Visa
   - Appointment Booking
   - Document Attestation
   - Application Tracking

3. **Book Appointment** (`/book-appointment`)
   - Multi-step form (5 steps)
   - Service selection
   - Location/centre selection
   - Date and time slot picker
   - Applicant details form
   - Confirmation summary

4. **Track Application** (`/track-application`)
   - Reference number input
   - Application status display
   - Timeline visualization
   - Real-time tracking

5. **Admin Dashboard** (`/dashboard`)
   - Overview with stats cards
   - Recent bookings list
   - Centre performance metrics
   - Quick actions
   - Sidebar navigation

## 📁 Project Structure

```
src/
├── app/
│   └── router.tsx              # React Router configuration
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Floating navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   └── Layout.tsx          # Main layout wrapper
│   └── ui/
│       ├── button.tsx          # Button component
│       ├── card.tsx            # Card component
│       ├── badge.tsx           # Badge component
│       ├── input.tsx           # Input component
│       └── label.tsx           # Label component
├── features/
│   ├── home/
│   │   └── HomePage.tsx        # Home page with hero
│   ├── services/
│   │   └── ServicesPage.tsx    # Services listing
│   ├── appointments/
│   │   └── BookAppointmentPage.tsx  # Multi-step booking form
│   ├── tracking/
│   │   └── TrackApplicationPage.tsx # Application tracking
│   └── dashboard/
│       ├── DashboardLayout.tsx # Dashboard layout with sidebar
│       └── DashboardPage.tsx   # Dashboard overview
├── lib/
│   └── utils.ts                # Utility functions
├── styles/
│   └── index.css               # Global styles and Tailwind
├── App.tsx                     # Root app component
└── main.tsx                    # Entry point
```

## 🎯 Key Features

### Navbar
- Floating white rounded design
- VAS logo on the left
- Center-aligned navigation links
- Right side: Open status badge, country selector, language selector, dashboard button
- Responsive mobile menu

### Hero Section
- Full-width background with Dubai skyline image
- Dark gradient overlay
- "Official ICP Partner" badge
- Large title and description
- Primary and secondary CTA buttons
- Quick appointment booking link

### Multi-Step Appointment Form
- 5-step wizard with progress indicator
- Service type selection
- Centre/location picker
- Date and time slot booking
- Applicant details form
- Confirmation summary

### Application Tracking
- Reference number search
- Real-time status display
- Visual timeline with icons
- Color-coded progress states
- Support contact section

### Admin Dashboard
- Sidebar navigation
- Stats cards with metrics
- Recent bookings list
- Centre performance visualization
- Quick action cards

## 🎨 Styling Approach

- Tailwind CSS utility classes
- Custom gradient utilities
- Consistent spacing and typography
- Responsive breakpoints
- Hover and focus states
- Smooth transitions

## 🔧 Customization

All components are built with flexibility in mind:
- Colors can be adjusted in `src/index.css`
- Component variants using `class-variance-authority`
- Reusable UI components in `src/components/ui/`
- Easy to extend with new pages and features

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All pages are fully responsive with mobile-first approach.

## 🚀 Deployment

The project is configured for production builds:

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment to any static hosting service.

## 📝 License

This project is for demonstration purposes.
