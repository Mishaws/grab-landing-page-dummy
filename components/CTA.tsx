'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-blue-600" />
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8, rotate: -45 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Get Started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg sm:text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Download the Grab app today and experience the convenience of having everything you need in one place.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded-lg bg-white bg-opacity-95 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={submitted}
            className="px-8 py-4 bg-white font-bold text-green-600 rounded-lg hover:bg-green-50 transition-all duration-300 disabled:opacity-75"
          >
            {submitted ? '✓ Sent!' : 'Notify Me'}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 text-white"
        >
          <div>
            <p className="text-3xl font-bold">300M+</p>
            <p className="text-green-100">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">8</p>
            <p className="text-green-100">Countries</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-green-100">Partners</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
