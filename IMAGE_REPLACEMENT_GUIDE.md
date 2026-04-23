# 📸 Image Replacement Guide

Halaman ini sudah siap untuk diisi dengan gambar-gambar Grab yang asli. Berikut panduan lengkap untuk replace semua placeholder.

---

## 🖼️ Image Locations & Dimensions

### 1. Hero Image - components/Hero.tsx
**Lokasi di halaman**: Top section (large banner)
**Ukuran**: 1400 x 560 px
**Rekomendasi**: 
- Grab app screenshot atau driver/ride ilustration
- High quality product photography
- Lifestyle image dengan Grab app in hand

**Edit file**:
```tsx
<motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  className="relative w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
>
  {/* Replace ini dengan Next.js Image component */}
</motion.div>
```

### 2. Service Cards Images - components/ImageGallery.tsx

#### Gallery Item 1: Main Hero
**Size**: 1400 x 560 px
**Content**: 
- GrabRides in action
- Happy customers
- Drivers/vehicles

#### Gallery Item 2 & 3: Half-width
**Size**: 600 x 400 px each
**Content**:
- Food delivery montage
- Express/logistics

#### Gallery Item 4 & 5: Half-width
**Size**: 600 x 400 px each  
**Content**:
- GrabPay digital wallet
- Customer stories/testimonials

---

## 🛠️ How to Replace Images

### Option 1: Using Next.js Image Component (RECOMMENDED)

1. **Place your images in `/public` folder**
```
public/
├── hero.jpg
├── service-1.jpg
├── service-2.jpg
└── etc...
```

2. **Update Hero.tsx**
```tsx
import Image from 'next/image'

<motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden"
>
  <Image
    src="/hero.jpg"
    alt="Grab Rides Experience"
    fill
    priority
    quality={85}
    className="object-cover"
  />
</motion.div>
```

3. **Update ImageGallery.tsx**
```tsx
<div className="relative w-full h-96 bg-gradient-to-br rounded-2xl overflow-hidden">
  <Image
    src="/gallery-main.jpg"
    alt="Grab Services"
    fill
    quality={85}
    className="object-cover"
  />
</div>
```

### Option 2: Using Regular img Tag

```tsx
<div className="relative w-full h-96 rounded-2xl overflow-hidden">
  <img
    src="/hero.jpg"
    alt="Grab Rides"
    className="w-full h-full object-cover"
  />
</div>
```

---

## 📝 Recommended Images for Each Section

### Section 1: Hero
- Screenshot dari Grab app
- Foto driver dengan customer
- Lifestyle photo dengan Grab in hand
- City skyline with Grab vehicles

### Section 2: Services (Image Gallery)

**GrabRides**
- Passenger in car
- Driver smiling
- Traffic/city scene
- Ride details screen

**GrabFood**
- Food delivery rider
- Delicious food presentation
- Restaurant delivery
- Happy customer eating

**GrabExpress**
- Package being delivered
- Logistics hub
- Delivery in progress
- Customer receiving package

**GrabPay**
- Digital wallet interface
- Payment screen
- Secure transaction
- Money transfer

**GrabMart**
- Grocery/essentials display
- Quick delivery
- Shopping cart full
- Customer with groceries

**GrabCar Premium**
- Premium vehicle
- Comfortable interior
- Professional driver
- Luxury ride experience

### Section 3: Benefits/Why Choose
- Customer testimonial photo
- User with Grab app
- Satisfied customer
- Service quality moment

### Section 4: How It Works
- Step 1: Person downloading app
- Step 2: Choosing service
- Step 3: Booking/ordering
- Step 4: Real-time tracking
- Step 5: Payment completion

### Section 5: Testimonials
- Customer 1 portrait
- Customer 2 portrait
- Customer 3 portrait

---

## 🎨 Image Best Practices

### File Format
- ✅ Use **JPG** untuk photos (smaller file size)
- ✅ Use **PNG** untuk graphics/logos (supports transparency)
- ✅ Use **WebP** untuk modern browsers (best compression)

### Optimization
- Compress images before uploading
- Use tools like:
  - TinyPNG.com
  - ImageOptim
  - Squoosh.app
- Target file size: 50-200 KB per image

### Quality
- Minimum: 1200px width
- Use high-quality source images
- Avoid stretched/pixelated images
- Professional photography recommended

### Consistency
- Maintain consistent color grading
- Use same aspect ratios where possible
- Align with Grab brand guidelines
- Professional/clean aesthetic

---

## 🚀 Implementation Steps

### Step 1: Gather Images
1. Download/screenshot Grab app images
2. Get official Grab assets (if available)
3. Take screenshots of services
4. Organize images in folder

### Step 2: Optimize Images
```bash
# Install ImageOptim
# Open TinyPNG.com
# Compress all images to 50-200 KB
```

### Step 3: Upload to Public Folder
```
grab-internship/
└── public/
    ├── hero.jpg
    ├── rides.jpg
    ├── food.jpg
    ├── express.jpg
    ├── pay.jpg
    ├── mart.jpg
    └── premium.jpg
```

### Step 4: Update Components
Edit each component to use images:
- `components/Hero.tsx`
- `components/ImageGallery.tsx`
- `components/Positions.tsx` (service icons)
- `components/Testimonials.tsx` (if needed)

### Step 5: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Check all images load correctly
```

### Step 6: Build & Deploy
```bash
npm run build
git add .
git commit -m "Add Grab images"
git push
# Vercel auto-deploys
```

---

## 💡 Example: Complete Image Replacement

### Before (with placeholder)
```tsx
<div className="relative w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl">
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-gray-500">[PLACEHOLDER]</p>
  </div>
</div>
```

### After (with image)
```tsx
import Image from 'next/image'

<div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
  <Image
    src="/hero-grab.jpg"
    alt="Grab Rides - Safe and Reliable Transport"
    fill
    quality={85}
    priority
    className="object-cover"
  />
</div>
```

---

## 🎯 Image Size Checklist

| Section | Dimensions | Format | Size |
|---------|-----------|--------|------|
| Hero | 1400x560 | JPG | 80-150 KB |
| Service 1 | 600x400 | JPG | 50-80 KB |
| Service 2 | 600x400 | JPG | 50-80 KB |
| Service 3 | 600x400 | JPG | 50-80 KB |
| Service 4 | 600x400 | JPG | 50-80 KB |
| Service 5 | 600x400 | JPG | 50-80 KB |
| Service 6 | 600x400 | JPG | 50-80 KB |
| Testimonial 1 | 300x300 | JPG | 30-50 KB |
| Testimonial 2 | 300x300 | JPG | 30-50 KB |
| Testimonial 3 | 300x300 | JPG | 30-50 KB |

---

## 🔍 Verification

After replacing images:

```bash
# Build locally
npm run build

# Check images load
npm start

# Open http://localhost:3000

# Verify in DevTools:
# - F12 > Network tab
# - Check image requests
# - Verify file sizes
# - Check load times
```

---

## 📌 Important Notes

1. **Image Rights**: Ensure you have rights to use images
2. **Brand Guidelines**: Follow Grab brand guidelines
3. **Optimization**: Always compress images
4. **Mobile**: Test on mobile devices
5. **Performance**: Monitor Core Web Vitals
6. **Accessibility**: Add meaningful alt text

---

## 🎓 Next.js Image Best Practices

```tsx
import Image from 'next/image'

// Good ✅
<Image
  src="/image.jpg"
  alt="Descriptive text"
  width={600}
  height={400}
  quality={85}
  priority={false}  // true only for above-fold
/>

// Bad ❌
<img src="/image.jpg" />  // No optimization
```

---

## 🚀 Deploy After Changes

```powershell
# Local test
npm run dev

# Build check
npm run build

# Git commit
git add .
git commit -m "Replace placeholder images with Grab assets"
git push

# Vercel auto-deploys in 1-2 minutes
```

---

**Ready to add your images? Let's go! 🎨**

For more help, check:
- Next.js Image Documentation: https://nextjs.org/docs/app/api-components/image
- Image Optimization Guide: https://web.dev/image-optimization/
