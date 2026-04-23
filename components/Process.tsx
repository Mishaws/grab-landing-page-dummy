'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const requirements = [
  {
    step: '01',
    title: 'Download the App',
    description: 'Get Grab from App Store or Google Play and sign up with your phone number or email.',
  },
  {
    step: '02',
    title: 'Choose Your Service',
    description: 'Select from Rides, Food Delivery, Express, or any of our other services.',
  },
  {
    step: '03',
    title: 'Book or Order',
    description: 'Enter your destination or select what you want delivered in just a few taps.',
  },
  {
    step: '04',
    title: 'Track in Real-Time',
    description: 'Follow your ride or delivery with live tracking and receive updates instantly.',
  },
  {
    step: '05',
    title: 'Rate & Enjoy Rewards',
    description: 'Rate your experience and earn Grab points for discounts on future transactions.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Process() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in 5 simple steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 md:gap-8"
            >
              {/* Timeline dot and line */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0, backgroundColor: 'rgba(0, 176, 80, 0.1)' }}
                  animate={inView ? { scale: 1, backgroundColor: 'rgba(0, 176, 80, 0.3)' } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center border-3 border-green-500 bg-green-50 relative z-10"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
                    className="text-2xl font-bold text-green-600"
                  >
                    {req.step}
                  </motion.span>
                </motion.div>

                {index < requirements.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: 120 } : { height: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    className="w-1 bg-gradient-to-b from-green-500 to-transparent mt-4"
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="pb-8 pt-2 flex-1 cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {req.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  {req.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
