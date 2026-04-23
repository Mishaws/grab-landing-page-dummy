'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    title: 'Always Reliable',
    description: 'Available 24/7 with consistent service quality you can depend on',
    icon: '⭐',
  },
  {
    title: 'Easy to Use',
    description: 'Simple interface designed for everyone to navigate easily',
    icon: '�',
  },
  {
    title: 'Safe & Secure',
    description: 'Your safety and security is our top priority with advanced features',
    icon: '🔒',
  },
  {
    title: 'Great Rewards',
    description: 'Earn points and get exclusive rewards with every transaction',
    icon: '🎁',
  },
  {
    title: 'Wide Selection',
    description: 'Choose from thousands of restaurants, merchants, and drivers',
    icon: '�',
  },
  {
    title: 'Always Connected',
    description: 'Real-time updates and support whenever you need assistance',
    icon: '🔗',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Benefits() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Grab?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by millions of users across Southeast Asia for reliability and convenience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group"
            >
              <motion.div
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-5xl mb-4 inline-block"
              >
                {benefit.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-green-500 to-blue-600 mt-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
