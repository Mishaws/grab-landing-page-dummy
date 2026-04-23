'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-2">
              🚗 Grab
            </h3>
            <p className="text-gray-400 text-sm">
              Southeast Asia's leading platform for mobility and deliveries.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  GrabRides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  GrabFood
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  GrabExpress
                </a>
              </li>
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  About Grab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  News & Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                  title={social}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          >
            <p>© {currentYear} Grab. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
