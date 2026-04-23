'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'GrabRides',
    description: 'Safe and reliable ride-hailing service for your daily commute',
    icon: '🚗',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'GrabFood',
    description: 'Food delivery from your favorite restaurants to your doorstep',
    icon: '🍔',
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'GrabExpress',
    description: 'Fast and convenient package delivery service',
    icon: '�',
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'GrabPay',
    description: 'Digital wallet and payment solutions for all your needs',
    icon: '💳',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'GrabMart',
    description: 'Shop essentials and groceries online with quick delivery',
    icon: '�',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'GrabCar Premium',
    description: 'Premium transportation for a comfortable journey',
    icon: '✨',
    color: 'from-cyan-400 to-cyan-600',
  },
]

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export function Positions() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need, all in one app. From rides to food delivery to payments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              className="group relative bg-white border border-gray-100 rounded-xl p-6 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 gap-2 transition-all`}
                >
                  Learn More
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
