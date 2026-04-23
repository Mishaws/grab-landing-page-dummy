'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [selectedCountry, setSelectedCountry] = useState('Singapore')

  const countries = ['Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Myanmar', 'Cambodia']

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            {/* Logo */}
            <img
              src="/images/Grab_Logo.svg.png"
              alt="Grab Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-green-600 text-sm font-semibold mb-4">
              Forward Together
            </p>
            <p className="text-gray-600 text-xs mb-6">
              3 Media Close,<br />
              Singapore 138498
            </p>
            <p className="text-gray-600 text-xs mb-4">Follow us and keep updated!</p>
            <div className="flex gap-3">
              {[
                { label: 'f', url: '#' },
                { label: 't', url: '#' },
                { label: 'i', url: '#' },
                { label: 'y', url: '#' },
                { label: 'l', url: '#' },
                { label: 't', url: '#' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.2, backgroundColor: '#00b050', color: 'white' }}
                  className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:text-black transition-colors text-xs font-bold text-gray-700"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-sm text-gray-800">About</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              {['About Us', 'Inside Grab', 'Investor Relations', 'Locations', 'Sustainability', 'Newsroom', 'Grab Financial Group', 'Careers', 'GrabForGood Fund'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Consumer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-sm text-gray-800">Consumer</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              {['Airport Guides', 'Rides', 'GrabFood', 'GrabMart', 'GrabExpress', 'GrabCoins', 'GrabGifts', 'Financial services', 'Grab For Family', "What's New"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Driver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-sm text-gray-800">Driver</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              {['Help Centre', "What's New", 'Drive with us', 'Deliver with us', 'Financial services', 'Driver Centre', 'GrabAcademy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Merchant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-sm text-gray-800">Merchant</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              {['Help Centre', "What's New", 'Partner with us', 'Financial resources', 'GrabExpress', 'Grab Dine Out', 'Payment Solutions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-xs text-gray-600"
          >
            {/* Left: Copyright & Links */}
            <div className="flex flex-col gap-4">
              <p>© {currentYear} Grab. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Terms and Policies
                </a>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right: Country Dropdown */}
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:border-green-600 transition-colors text-sm focus:outline-none focus:border-green-600 appearance-none pr-8"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
                ▼
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
