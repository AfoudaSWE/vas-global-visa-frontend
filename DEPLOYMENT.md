# VAS Global - Deployment Guide

## 🚀 Production Deployment

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git repository
- Hosting platform account

---

## 📦 Build for Production

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.production` file:

```env
VITE_API_BASE_URL=https://api.vasglobal.com/v1
VITE_APP_ENV=production
```

### 3. Build the Project
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

**Build Output:**
- Single HTML file: `dist/index.html` (436 kB)
- Gzipped size: 129 kB
- All CSS and JS inlined (vite-plugin-singlefile)

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
vercel --prod
```

#### Settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### Environment Variables:
Add in Vercel Dashboard:
- `VITE_API_BASE_URL`

---

### Option 2: Netlify

#### Step 1: Create `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Step 2: Deploy via CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or connect your Git repository in Netlify Dashboard.

---

### Option 3: AWS S3 + CloudFront

#### Step 1: Build
```bash
npm run build
```

#### Step 2: Upload to S3
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### Step 3: Create CloudFront Distribution
- Origin: S3 bucket
- Default Root Object: `index.html`
- Error Pages: 404 → /index.html (200)

#### Step 4: Invalidate Cache
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### Option 4: Docker

#### Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Create `nginx.conf`:
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name _;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    }
}
```

#### Build and Run:
```bash
docker build -t vas-global .
docker run -p 80:80 vas-global
```

---

### Option 5: GitHub Pages

#### Step 1: Update `vite.config.ts`
```typescript
export default defineConfig({
  base: '/vas-global/', // Your repo name
  // ... rest of config
})
```

#### Step 2: Add to `package.json`
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### Step 3: Install gh-pages
```bash
npm install -D gh-pages
```

#### Step 4: Deploy
```bash
npm run deploy
```

---

## 🔧 Post-Deployment Configuration

### 1. DNS Setup
Point your domain to the hosting platform:
```
A Record: @ → Your hosting IP
CNAME: www → your-app.vercel.app
```

### 2. SSL Certificate
Most platforms provide automatic SSL:
- Vercel: Automatic
- Netlify: Automatic
- AWS: Use ACM (AWS Certificate Manager)

### 3. Environment Variables
Set in your hosting platform:
- `VITE_API_BASE_URL`: Your backend API URL
- `VITE_APP_ENV`: production

### 4. Analytics (Optional)
Add Google Analytics or similar:
```html
<!-- In index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔍 Performance Optimization

### 1. CDN Configuration
Enable CDN caching:
- Cache static assets for 1 year
- Cache HTML for 1 hour
- Enable Brotli compression

### 2. Image Optimization
Use image CDN services:
- Cloudinary
- Imgix
- AWS CloudFront with image optimization

### 3. Lazy Loading
Already configured with React Router code splitting.

### 4. Service Worker (PWA)
Add `vite-plugin-pwa`:
```bash
npm install -D vite-plugin-pwa
```

Update `vite.config.ts`:
```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'VAS Global',
        short_name: 'VAS',
        theme_color: '#18264D',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🐛 Troubleshooting

### Issue: 404 on Page Refresh
**Solution:** Configure server redirects to `index.html`

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify:** Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Issue: Environment Variables Not Working
**Solution:** Ensure variables start with `VITE_` prefix and rebuild.

### Issue: Large Bundle Size
**Solution:** 
- Enable code splitting
- Remove unused dependencies
- Use dynamic imports
- Enable tree shaking

---

## 📊 Monitoring

### 1. Error Tracking
Add Sentry:
```bash
npm install @sentry/react
```

Initialize in `main.tsx`:
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

### 2. Performance Monitoring
- Google Lighthouse
- Web Vitals
- Vercel Analytics
- Cloudflare Analytics

### 3. Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      env:
        VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
        
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## ✅ Deployment Checklist

- [ ] Environment variables configured
- [ ] Build successful locally
- [ ] All routes tested
- [ ] Mobile responsive verified
- [ ] Browser compatibility checked
- [ ] SSL certificate active
- [ ] DNS records configured
- [ ] Analytics integrated
- [ ] Error tracking setup
- [ ] Performance tested
- [ ] SEO meta tags added
- [ ] Social media preview images
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Security headers set
- [ ] CORS configured (if needed)

---

## 🎯 Production URLs

After deployment, your app will be available at:
- Primary: `https://vasglobal.com`
- Subdomain: `https://app.vasglobal.com`
- Staging: `https://staging.vasglobal.com`

---

**Your VAS Global application is ready for production! 🚀**
