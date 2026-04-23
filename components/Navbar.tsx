'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              🚗 Grab
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Features', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-green-500' : 'text-gray-700 hover:text-green-500'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            Download App
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5"
          >
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
