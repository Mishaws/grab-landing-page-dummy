# 🚀 Grab Internship Landing Page - Setup Guide

## 📋 Persyaratan

- **Node.js** v18 atau lebih tinggi
- **npm** atau **yarn** package manager
- Windows PowerShell atau terminal lainnya

## ⚡ Quick Start (Cepat)

Ikuti langkah-langkah ini untuk menjalankan aplikasi:

### 1️⃣ Buka Terminal di Folder Project

```powershell
cd "c:\Users\Mike\Documents\Semester4\SBD\Praktikum\CS\CS9_SBD\grab-internship"
```

### 2️⃣ Install Dependencies

```powershell
npm install
```

Ini akan menginstall semua library yang diperlukan (React, Next.js, Framer Motion, Tailwind CSS, dll).

### 3️⃣ Jalankan Development Server

```powershell
npm run dev
```

### 4️⃣ Buka di Browser

Buka browser favorit Anda dan kunjungi:
```
http://localhost:3000
```

Voila! 🎉 Landing page Grab internship sudah berjalan!

---

## 📁 Struktur File

```
grab-internship/
├── app/
│   ├── layout.tsx         # Tata letak root
│   ├── page.tsx           # Halaman utama
│   └── globals.css        # CSS global
├── components/
│   ├── Navbar.tsx         # Navigasi bar
│   ├── Hero.tsx           # Hero section dengan animasi
│   ├── Positions.tsx      # Grid posisi kerja
│   ├── Benefits.tsx       # Manfaat bekerja di Grab
│   ├── Process.tsx        # Timeline proses hiring
│   ├── Testimonials.tsx   # Testimoni dari intern sebelumnya
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # Footer
│   └── index.ts           # Export semua komponen
├── public/                # Asset statis
├── package.json           # Dependency list
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
└── README.md              # Dokumentasi lengkap
```

---

## 🎨 Fitur Utama

### ✨ Animasi Menarik
- **Framer Motion** untuk smooth animations
- Trigger animations saat scroll dengan Intersection Observer
- Hover effects yang interaktif pada semua elemen

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Navbar yang adaptif

### 🎯 Sections Included

1. **Hero Section** - Perkenalan dengan animasi background
2. **Open Positions** - 6 posisi internship dengan card yang cantik
3. **Why Join** - 6 benefit utama bekerja di Grab
4. **Hiring Process** - Timeline 5 langkah hiring
5. **Testimonials** - Quote dari intern sebelumnya
6. **Call-to-Action** - Newsletter signup section
7. **Footer** - Link penting dan social media

---

## 🛠️ Commands Tersedia

```bash
npm run dev       # Jalankan development server (Port 3000)
npm run build     # Build untuk production
npm start         # Jalankan production server
npm run lint      # Check code quality dengan ESLint
```

---

## 📦 Dependencies

| Package | Version | Fungsi |
|---------|---------|--------|
| **next** | ^14.0.0 | React framework |
| **react** | ^18.2.0 | UI library |
| **framer-motion** | ^10.16.4 | Animasi smooth |
| **react-intersection-observer** | ^9.5.3 | Viewport detection |
| **tailwindcss** | ^3.3.0 | CSS framework |
| **typescript** | ^5.0.0 | Type safety |

---

## 🎨 Customization Tips

### Mengubah Warna Grab

Edit `tailwind.config.js`:

```javascript
colors: {
  grab: {
    500: '#00b050',  // Primary green - ubah di sini
    600: '#00a84f',
    700: '#009640',
  }
}
```

### Mengubah Konten

Edit file di `components/` folder:
- **Hero.tsx** - Ubah judul dan deskripsi
- **Positions.tsx** - Tambah/hapus posisi kerja
- **Benefits.tsx** - Ubah benefit list
- **Testimonials.tsx** - Update testimoni

### Menambah Section Baru

1. Buat file di `components/NewSection.tsx`
2. Export di `components/index.ts`
3. Import dan gunakan di `app/page.tsx`

---

## ⚡ Performance Tips

- Semua animasi menggunakan `framer-motion` (60fps)
- Intersection Observer mencegah animasi unnecessary
- Tailwind CSS mengoptimasi CSS output
- Image lazy loading untuk performa lebih baik

---

## 🚀 Deploy ke Production

### Deploy dengan Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build Manual untuk Production

```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

### Port 3000 sudah digunakan?

```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Error "Cannot find module"?

```bash
# Hapus node_modules dan install ulang
Remove-Item node_modules -Recurse -Force
npm install
```

### Animasi tidak smooth?

- Check browser support (modern browsers only)
- Disable browser extensions yang bisa block animations
- Check GPU acceleration di browser settings

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## ✅ Checklist Sebelum Submit

- [ ] Semua dependencies sudah diinstall
- [ ] Development server berjalan tanpa error
- [ ] Semua page bisa diakses dengan smooth
- [ ] Animasi berjalan dengan baik
- [ ] Responsive di mobile, tablet, dan desktop
- [ ] Loading time optimal
- [ ] Tidak ada console errors
- [ ] GitHub repo sudah di-push (jika perlu)

---

## 💡 Pro Tips

1. **Hot Reload** - Ubah file dan lihat perubahan instant di browser
2. **React DevTools** - Install extension untuk debug lebih mudah
3. **Lighthouse** - Check performance score di DevTools
4. **Mobile Testing** - Gunakan DevTools device emulation

---

**Happy Coding! 🎉**

Jika ada pertanyaan, tanyakan saja!
