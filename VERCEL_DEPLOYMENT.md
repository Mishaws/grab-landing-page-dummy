# 🚀 Deploy ke Vercel - Step by Step

## ✅ Pre-Deployment Checklist

Sebelum deploy, pastikan:
- ✅ `npm install` sudah berhasil
- ✅ `npm run dev` jalan tanpa error
- ✅ Tidak ada console errors
- ✅ Build success: `npm run build`
- ✅ Git sudah initialized dan files committed

---

## 📋 Step 1: Prepare Local Files

### 1a. Build Project Locally
```powershell
npm run build
```

Jika ada error, fix dulu sebelum lanjut ke Vercel.

### 1b. Test Build
```powershell
npm start
```

Pastikan production build berjalan lancar di `http://localhost:3000`

---

## 📤 Step 2: Push ke GitHub

### 2a. Initialize Git (jika belum)
```powershell
git init
git add .
git commit -m "Initial commit: Grab landing page"
```

### 2b. Create GitHub Repository
1. Go to https://github.com/new
2. Create repo dengan nama: `grab-landing-page`
3. Follow instruksi GitHub untuk push local repo

```powershell
git remote add origin https://github.com/YOUR_USERNAME/grab-landing-page.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 3: Deploy ke Vercel

### Option A: Via Vercel Dashboard (EASIEST)

#### 3a. Go to Vercel
1. Visit https://vercel.com
2. Click "Sign Up" atau "Log In"
3. Choose "GitHub" untuk sign up/login

#### 3b. Import Project
1. Click "New Project"
2. Click "Import Git Repository"
3. Paste your GitHub repo URL
4. Click "Continue"

#### 3c. Configure Project
- **Project Name**: `grab-landing-page`
- **Framework Preset**: Select `Next.js`
- **Root Directory**: Leave as `.` (default)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)
- **Environment Variables**: Leave empty for now

#### 3d. Deploy
1. Click "Deploy"
2. Wait 2-5 minutes untuk deployment selesai
3. Anda akan dapat live URL seperti: `https://grab-landing-page.vercel.app`

✅ **SELESAI! Website sudah live!**

---

### Option B: Via Vercel CLI

#### 3a. Install Vercel CLI
```powershell
npm install -g vercel
```

#### 3b. Login ke Vercel
```powershell
vercel login
```

Follow prompt dan login dengan GitHub account Anda.

#### 3c. Deploy Project
```powershell
vercel
```

Follow prompts:
- Project name: `grab-landing-page`
- Set as production: `Y`
- Link existing project: `N` (first time)

#### 3d. Get Live URL
Vercel akan give you production URL setelah deployment selesai.

---

## 🎯 After Deployment

### 4a. Verify Deployment
1. Open URL yang diberikan Vercel
2. Test semua sections
3. Check animations smooth
4. Test responsiveness di mobile

### 4b. Custom Domain (Optional)
1. Go to Vercel Dashboard
2. Select project Anda
3. Go to Settings > Domains
4. Add custom domain
5. Update DNS records sesuai Vercel instructions

### 4c. Auto-Deploy on Push
Vercel automatically redeploy ketika Anda push ke GitHub:
```powershell
git add .
git commit -m "Update content"
git push
```

Vercel akan auto-deploy dalam 1-2 menit!

---

## 📊 Live Deployment Status

### Check Deployment Status
1. Go to Vercel Dashboard
2. Select project
3. View deployment history
4. Click specific deployment untuk details

---

## 🐛 Troubleshooting

### Issue: Build Fails
```
❌ Error: Cannot find module
```

**Solution:**
```powershell
# Delete node_modules dan reinstall
Remove-Item node_modules -Recurse -Force
npm install
npm run build
git add .
git commit -m "Fix dependencies"
git push
```

### Issue: Deployment Takes Too Long
- Normal build time: 2-5 minutes
- Check logs di Vercel dashboard untuk errors

### Issue: Page Not Loading
1. Check if DNS is propagated (wait 24 hours max)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Check console errors (F12)

---

## 🔗 Useful Links

- **Live URL**: https://grab-landing-page.vercel.app (after deployment)
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/YOUR_USERNAME/grab-landing-page
- **Project Settings**: https://vercel.com/dashboard/grab-landing-page/settings

---

## 📝 Environment Variables (Optional)

Jika project butuh environment variables di masa depan:

1. Go to Vercel Dashboard
2. Select project
3. Settings > Environment Variables
4. Add variable
5. Auto redeploy

---

## ✅ Deployment Checklist

```
Before Deployment:
□ npm install berhasil
□ npm run build berhasil
□ npm start berjalan lancar
□ Tidak ada console errors
□ Git initialized dan committed
□ GitHub repo created

During Deployment:
□ Pushed ke GitHub
□ Connected Vercel dengan GitHub
□ Project imported ke Vercel
□ Build settings correct
□ Deploy button clicked

After Deployment:
□ Live URL working
□ Semua sections loading
□ Animations smooth
□ Responsive pada mobile
□ No 404 errors
□ Performance good
```

---

## 🎉 Success!

Anda sekarang punya **live production website** yang:
- ✅ Accessible dari internet
- ✅ Auto-deploy dari GitHub
- ✅ HTTPS secured
- ✅ Global CDN
- ✅ Zero downtime deployment

**Setiap kali Anda push ke GitHub, website auto-update dalam 1-2 menit!**

---

## 💡 Pro Tips

1. **Staging Environment**
   ```powershell
   git checkout -b staging
   git push origin staging
   # Di Vercel, deploy dari branch ini untuk testing
   ```

2. **Preview Deployments**
   - Vercel auto-create preview untuk setiap pull request
   - Share preview URL dengan team untuk feedback

3. **Analytics**
   - Vercel dashboard shows real-time metrics
   - Monitor performance dan errors

4. **Rollback**
   - Jika ada masalah, rollback ke previous deployment
   - Go to Vercel dashboard > Deployments > Click previous > Promote to Production

---

**Happy Deploying! 🚀**
