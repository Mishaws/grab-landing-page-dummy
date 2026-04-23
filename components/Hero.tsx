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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Everything</span> App
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Ride, food delivery, package delivery, and financial services - all in one app. Experience Southeast Asia's most convenient platform.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 176, 80, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get Grab App
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300"
            >
              Learn More
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
