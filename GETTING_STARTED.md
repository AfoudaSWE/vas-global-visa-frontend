# VAS Global - Getting Started Guide

## 🚀 Quick Start

Get your VAS Global application up and running in minutes!

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** (optional) - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### Check Your Versions
```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be v9.0.0 or higher
```

---

## 📦 Installation

### Step 1: Clone or Download
If you have the project files, navigate to the project directory:
```bash
cd vas-global
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- Zod
- React Hook Form
- Lucide React
- And more...

**Installation time:** ~1-2 minutes

---

## 🏃 Running the Application

### Development Mode
Start the development server:
```bash
npm run dev
```

The application will open at:
```
http://localhost:5173
```

Features:
- ✅ Hot Module Replacement (HMR)
- ✅ Fast refresh
- ✅ TypeScript checking
- ✅ Tailwind CSS compilation

### Production Build
Build for production:
```bash
npm run build
```

Output:
- **Location:** `dist/` folder
- **Size:** ~450 kB (131 kB gzipped)
- **Format:** Single optimized HTML file

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

---

## 🗂️ Project Structure

```
vas-global/
├── src/                        # Source code
│   ├── app/                    # App configuration
│   │   └── router.tsx          # Route definitions
│   ├── components/             # Reusable components
│   │   ├── layout/             # Layout components
│   │   ├── shared/             # Shared components
│   │   └── ui/                 # UI components
│   ├── features/               # Feature modules
│   │   ├── home/               # Home page
│   │   ├── services/           # Services page
│   │   ├── appointments/       # Booking page
│   │   ├── tracking/           # Tracking page
│   │   └── dashboard/          # Admin dashboard
│   ├── lib/                    # Utilities & config
│   │   ├── api.ts              # API service
│   │   ├── constants.ts        # Constants
│   │   ├── query-client.tsx    # React Query
│   │   ├── utils.ts            # Utilities
│   │   └── validations.ts      # Zod schemas
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── dist/                       # Build output
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
├── README.md                   # Main documentation
├── FEATURES.md                 # Features guide
├── DEPLOYMENT.md               # Deployment guide
├── PROJECT_SUMMARY.md          # Project overview
└── GETTING_STARTED.md          # This file
```

---

## 🎯 Available Routes

### Public Routes
Navigate to these URLs when the app is running:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, features, services |
| `/services` | Services | Detailed service information |
| `/book-appointment` | Book Appointment | 5-step booking wizard |
| `/track-application` | Track Application | Application status tracking |

### Admin Routes
Requires authentication (not yet implemented):

| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Dashboard | Overview with stats |
| `/dashboard/centres` | Centres | Centre management |
| `/dashboard/slots` | Slots | Slot management |
| `/dashboard/bookings` | Bookings | Booking management |

---

## 🎨 Customization

### 1. Update Colors
Edit `src/index.css`:
```css
:root {
  --primary-navy: #18264D;    /* Your primary color */
  --accent-red: #F0444C;      /* Your accent color */
  --success-green: #2E7D32;   /* Success color */
  /* ... more colors */
}
```

### 2. Update Logo
Replace the VAS logo in `src/components/layout/Navbar.tsx`:
```tsx
<div className="w-12 h-12 bg-gradient-primary rounded-lg">
  {/* Your logo image here */}
  <img src="/your-logo.png" alt="Logo" />
</div>
```

### 3. Update Content
Edit the content in respective page files:
- Home content: `src/features/home/HomePage.tsx`
- Services: `src/features/services/ServicesPage.tsx`
- Footer links: `src/components/layout/Footer.tsx`

### 4. Update Constants
Edit `src/lib/constants.ts`:
```typescript
export const CONTACT_INFO = {
  email: 'your@email.com',
  phone: '+123 456 7890',
  address: 'Your Address',
  workingHours: 'Mon-Fri: 9AM - 5PM',
}
```

---

## 🔌 API Integration

### 1. Set Environment Variables
Create `.env.local` file:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 2. Update API Service
The API service is already configured in `src/lib/api.ts`.

Example usage:
```typescript
import { appointmentService } from '@/lib/api'

// Create appointment
const appointment = await appointmentService.create({
  serviceType: 'uae-tourist-visa',
  centreId: 'dubai-szr',
  // ... more fields
})
```

### 3. Use with TanStack Query
```typescript
import { useQuery } from '@tanstack/react-query'
import { centreService } from '@/lib/api'

function MyCentres() {
  const { data, isLoading } = useQuery({
    queryKey: ['centres'],
    queryFn: centreService.getAll,
  })
  
  // Use data...
}
```

---

## 🧪 Testing (Setup)

### Install Testing Libraries
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

### Create Test File
Example: `src/components/ui/button.test.tsx`
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

---

## 🐛 Troubleshooting

### Issue: Port Already in Use
**Error:** `Port 5173 is already in use`

**Solution:**
```bash
# Kill the process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Issue: Module Not Found
**Error:** `Cannot find module '@/components/...'`

**Solution:**
1. Check `tsconfig.json` has path mapping:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
2. Restart VS Code or your editor
3. Run `npm install` again

### Issue: Build Fails
**Error:** Various build errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Styles Not Working
**Error:** Tailwind classes not applying

**Solution:**
1. Check `src/index.css` imports Tailwind:
```css
@import "tailwindcss";
```
2. Restart dev server:
```bash
npm run dev
```

---

## 📱 Mobile Testing

### Using Browser DevTools
1. Open the app in Chrome/Firefox
2. Press `F12` to open DevTools
3. Click the device toggle icon (or press `Ctrl+Shift+M`)
4. Select a device preset or custom dimensions
5. Test all pages and interactions

### Using Real Devices
1. Find your local IP:
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

2. Update Vite config for network access:
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
})
```

3. Access from mobile:
```
http://YOUR_LOCAL_IP:5173
```

---

## 🔒 Environment Variables

### Development (.env.local)
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_ENV=development
```

### Production (.env.production)
```env
VITE_API_BASE_URL=https://api.vasglobal.com/v1
VITE_APP_ENV=production
```

**Note:** All environment variables must start with `VITE_` to be accessible in the app.

---

## 📚 Documentation Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Zod Documentation](https://zod.dev/)

---

## 🎓 Learning Path

### For Beginners
1. Start with the **Home Page** (`src/features/home/HomePage.tsx`)
2. Understand component structure
3. Learn about props and state
4. Explore the UI components (`src/components/ui/`)
5. Study the routing (`src/app/router.tsx`)

### For Intermediate
1. Dive into the API service (`src/lib/api.ts`)
2. Learn TanStack Query integration
3. Explore form validation with Zod
4. Study the dashboard layout
5. Understand TypeScript types

### For Advanced
1. Optimize performance
2. Implement advanced features
3. Add testing
4. Set up CI/CD
5. Deploy to production

---

## 💡 Tips & Best Practices

### Development Tips
- ✅ Use TypeScript for type safety
- ✅ Keep components small and focused
- ✅ Use custom hooks for logic reuse
- ✅ Follow the folder structure
- ✅ Write meaningful commit messages

### Code Style
- ✅ Use functional components
- ✅ Prefer `const` over `let`
- ✅ Use destructuring
- ✅ Keep JSX readable
- ✅ Add comments for complex logic

### Performance
- ✅ Use React.memo for expensive components
- ✅ Lazy load routes
- ✅ Optimize images
- ✅ Use TanStack Query caching
- ✅ Minimize re-renders

---

## 🚀 Next Steps

1. **Explore the App**
   - Navigate through all pages
   - Test on different screen sizes
   - Try all interactive elements

2. **Customize Content**
   - Update text content
   - Add your branding
   - Configure contact info

3. **Connect Backend**
   - Set up your API
   - Update environment variables
   - Test API integration

4. **Deploy**
   - Choose a hosting platform
   - Follow DEPLOYMENT.md guide
   - Set up custom domain

5. **Enhance**
   - Add more features
   - Implement authentication
   - Add payment integration

---

## 📞 Support

### Resources
- 📖 **Documentation:** Check all .md files in root
- 🐛 **Issues:** Report bugs or request features
- 💬 **Community:** Join discussions

### Getting Help
1. Check the documentation first
2. Search existing issues
3. Ask in community forums
4. Contact support team

---

## ✅ Checklist

Before you start development:

- [ ] Node.js v18+ installed
- [ ] npm packages installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] All pages accessible
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Documentation reviewed

---

**You're all set! Start building amazing features! 🎉**

For detailed feature documentation, see [FEATURES.md](./FEATURES.md)  
For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)  
For project overview, see [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

