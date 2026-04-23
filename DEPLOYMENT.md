# 🚀 Deployment Guide - Grab Internship Landing Page

## Deploy Options

Ada beberapa cara untuk deploy landing page ini. Pilih salah satu:

---

## 1️⃣ **Vercel (RECOMMENDED)** ⭐ Paling Mudah

Vercel adalah platform yang dibuat oleh creator Next.js, jadi kompatibilitas 100%.

### Setup Vercel:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login ke Vercel
vercel login

# 3. Deploy project
vercel
```

**Keuntungan:**
- ✅ Instant deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview URLs
- ✅ Environment variables
- ✅ Free tier generous
- ✅ Custom domain support

---

## 2️⃣ **Netlify**

Alternative populer untuk deploy static sites dan Next.js apps.

### Setup Netlify:

```bash
# 1. Connect GitHub repo (recommended)
# Visit https://netlify.com

# 2. Click "New site from Git"
# 3. Select your repository
# 4. Configure build settings:
#    Build command: npm run build
#    Publish directory: .next
```

**Keuntungan:**
- ✅ Easy GitHub integration
- ✅ Automatic builds on push
- ✅ Split testing
- ✅ Form handling built-in

---

## 3️⃣ **GitHub Pages**

Build static export dan deploy ke GitHub Pages gratis.

### Setup:

```bash
# 1. Update next.config.js untuk static export
# output: 'export'

# 2. Build static version
npm run build

# 3. GitHub Pages akan auto-deploy dari /out folder
```

---

## 4️⃣ **Self-Hosted (VPS)**

Jika ingin kontrol penuh, host di server sendiri.

### Setup:

```bash
# 1. Build untuk production
npm run build

# 2. Upload ke server
# Gunakan SCP atau SFTP

# 3. Install Node.js di server
# 4. Run production server
npm install --production
npm start
```

**Popular VPS Providers:**
- DigitalOcean
- Linode  
- AWS EC2
- Google Cloud
- Azure

---

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:

```
□ Semua dependencies sudah di-install
□ Local development berjalan sempurna
□ Tidak ada console errors/warnings
□ Tidak ada TypeScript errors
□ Responsive design sudah tested di mobile
□ Animasi berjalan smooth
□ Loading speed optimal (check dengan Lighthouse)
□ All links bekerja dengan baik
□ Form submissions bekerja (jika ada)
□ Meta tags dan SEO sudah optimal
□ Environment variables sudah di-set (jika ada)
□ Code sudah di-commit ke Git
```

---

## 🌐 Domain Configuration

### Untuk Vercel:
```
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records sesuai instruksi
4. Wait 24-48 hours untuk propagation
```

### Untuk Netlify:
```
1. Site settings > Domain management
2. Add custom domain
3. Configure DNS
4. SSL auto-generated
```

---

## 🔒 Environment Variables

Jika project memerlukan API keys atau config:

```bash
# 1. Create .env.local file
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=xxx

# 2. Di Vercel/Netlify dashboard, add Environment Variables
# 3. Deploy akan automatic detect
```

---

## 🚨 Common Issues & Solutions

### Issue: Build fails
```bash
# Solution:
npm install
npm run build

# Check logs untuk error specifics
```

### Issue: Slow loading
```bash
# Solution:
# - Enable image optimization
# - Use next/image component
# - Reduce bundle size
# - Check Lighthouse scores
```

### Issue: Animations tidak smooth
```bash
# Solution:
# - Check browser compatibility
# - Reduce animation complexity
# - Test di different devices
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional):

```bash
npm install @next/third-parties

# Edit app/layout.tsx:
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* content */}
        <GoogleAnalytics gaId="G-XXXXXXXX" />
      </body>
    </html>
  )
}
```

### Monitor Performance:
- Vercel Analytics
- Netlify Analytics
- Google PageSpeed Insights
- Lighthouse in Chrome DevTools

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions (Optional):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🎯 Performance Optimization

Sebelum production, optimize:

### 1. Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/grab-logo.png"
  alt="Grab Logo"
  width={200}
  height={200}
  priority // untuk above-fold images
/>
```

### 2. Code Splitting
Next.js handles automatic code splitting ✅

### 3. Caching Headers
Vercel/Netlify handles caching automatically ✅

### 4. Minification
Build process handles minification ✅

---

## 📈 Performance Targets

Aim untuk:
- ✅ Lighthouse Score: 90+
- ✅ First Contentful Paint: < 1.5s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Cumulative Layout Shift: < 0.1
- ✅ Time to Interactive: < 3.5s

Check dengan:
```bash
# Local lighthouse check
# 1. Build project: npm run build
# 2. Start server: npm start
# 3. Open Chrome DevTools > Lighthouse
# 4. Run audit
```

---

## 🔐 Security Headers

Vercel dan Netlify handles security headers automatically:
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

---

## 🎓 Next Steps

1. **Setup Vercel Account**
   - https://vercel.com

2. **Connect GitHub Repository**
   - Pilih repo project ini

3. **Click Deploy**
   - Auto-deploy mulai

4. **Get Custom Domain** (Optional)
   - Point ke Vercel

5. **Monitor Analytics**
   - Track visitor metrics

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com

---

## ✅ Deployment Checklist

```
Pre-Deployment:
□ npm run build successful
□ npm run lint passed
□ No TypeScript errors
□ Responsive tested
□ Performance score 90+

Post-Deployment:
□ Visit live URL
□ Test all links
□ Test forms
□ Test on mobile device
□ Check Lighthouse score
□ Setup monitoring
□ Setup analytics
□ Test animations
```

---

**🎉 Ready to go live!**

Pilih salah satu platform di atas dan deploy dalam 5 menit! 🚀
