'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-teal-700 pt-20"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 600%27%3E%3Crect fill=%27%23065f46%27 width=%271200%27 height=%27600%27/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.15, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6"
          >
            ✨ Southeast Asia's Leading On-Demand Platform
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Grab. Making every day better.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow"
          >
            From rides to food delivery, packages to payments - all in one app.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Download App
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Read About Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image/Illustration */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-gray-500 text-lg font-semibold mb-2">[HERO IMAGE PLACEHOLDER]</p>
              <p className="text-gray-400 text-sm">Replace dengan gambar hero dari Grab</p>
              <p className="text-gray-400 text-xs mt-2">Recommended: 1200x400px</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
