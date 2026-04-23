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
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <span className={`font-bold ${isScrolled ? 'text-green-600' : 'text-white'}`}>
              ☰ Grab
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Consumer', 'Driver', 'Merchant', 'Enterprise'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:block px-6 py-2 font-bold rounded-lg transition-all ${
              isScrolled 
                ? 'bg-green-600 text-white hover:shadow-lg'
                : 'bg-white text-green-600 hover:shadow-lg'
            }`}
          >
            Sign In
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
