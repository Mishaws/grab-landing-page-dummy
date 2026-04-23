# Grab Internship Landing Page

A modern, professional landing page for Grab's internship program built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Hero Section** - Eye-catching hero with animated background elements
- **Job Positions** - Grid of 6 different internship positions with hover effects
- **Benefits Section** - Display of company benefits with smooth animations
- **Hiring Process** - 5-step timeline showing the recruitment process
- **Testimonials** - Section featuring past intern experiences
- **Call-to-Action** - Newsletter signup and statistics display
- **Responsive Design** - Mobile-friendly layout for all devices
- **Smooth Animations** - Framer Motion animations throughout
- **Professional Navbar** - Fixed navbar with scroll effects
- **Footer** - Complete footer with links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd grab-internship
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
grab-internship/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Positions.tsx       # Job positions grid
│   ├── Benefits.tsx        # Benefits section
│   ├── Process.tsx         # Hiring process timeline
│   ├── Testimonials.tsx    # Testimonials section
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   └── index.ts            # Component exports
├── public/                 # Static assets
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Viewport detection

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  grab: {
    500: '#00b050',  // Primary green
    600: '#00a84f',
    700: '#009640',
  }
}
```

### Content
Update component content by editing files in the `components/` directory.

### Animations
Adjust animation settings in individual component files using Framer Motion props.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✅ Best Practices

- All animations use Framer Motion for smooth 60fps performance
- Intersection Observer ensures animations only trigger when visible
- Tailwind CSS provides optimized, production-ready styling
- TypeScript ensures type safety throughout the codebase
- Mobile-first responsive design approach

## 📄 License

This project is created for educational purposes.

## 👤 Author

Created for Grab Internship Program 2024-2025

---

**Happy coding! 🚀**
