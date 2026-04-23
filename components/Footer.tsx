'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">Grab</h3>
            <p className="text-gray-400 text-sm mb-4">
              Forward Together
            </p>
            <p className="text-gray-500 text-xs mb-4">
              3 Media Close, Singapore 138498
            </p>
            <div className="flex gap-3">
              {['f', 't', 'i', 'y', 'l', 't'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors text-xs"
                >
                  {social}
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
            <h4 className="font-bold mb-4 text-sm">About</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {['About Us', 'Inside Grab', 'Investor Relations', 'Locations', 'Sustainability', 'Newsroom', 'Grab Financial Group', 'Careers', 'GrabForGood Fund'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-500 transition-colors">
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
            <h4 className="font-bold mb-4 text-sm">Consumer</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {['Airport Guides', 'Rides', 'GrabFood', 'GrabMart', 'GrabExpress', 'GrabCoins', 'GrabGifts', 'Financial services', 'Grab For Family', "What's New"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-500 transition-colors">
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
            <h4 className="font-bold mb-4 text-sm">Driver</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {['Help Centre', "What's New", 'Drive with us', 'Deliver with us', 'Financial services', 'Driver Centre', 'GrabAcademy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-500 transition-colors">
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
            <h4 className="font-bold mb-4 text-sm">Merchant</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {['Help Centre', "What's New", 'Partner with us', 'Financial resources', 'GrabExpress', 'Grab Dine Out', 'Payment Solutions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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
    </section>
  )
}
