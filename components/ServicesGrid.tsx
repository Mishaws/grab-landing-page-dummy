'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    id: 1,
    category: 'Deliveries',
    items: [
      {
        title: 'Food',
        description: 'Have all your cravings delivered to your doorstep.',
        icon: '🍔',
      },
      {
        title: 'Mart',
        description: 'Find everything you need—groceries and more.',
        icon: '🛒',
      },
      {
        title: 'Express',
        description: 'Send packages, documents, and beyond.',
        icon: '📦',
      },
    ],
  },
  {
    id: 2,
    category: 'Mobility',
    items: [
      {
        title: 'Rides',
        description: 'Choose from a variety of vehicles to take you from A to B safely.',
        icon: '🚗',
      },
    ],
  },
  {
    id: 3,
    category: 'Financial Services',
    items: [
      {
        title: 'Pay',
        description: 'Secure and seamless cashless payments, online and in-store.',
        icon: '💳',
      },
      {
        title: 'Insurance',
        description: 'Get everyday protection with accessible insurance.',
        icon: '🛡️',
      },
    ],
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function ServicesGrid() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="w-full py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {services.map((serviceGroup, index) => (
          <motion.div key={serviceGroup.id} variants={itemVariants} className="mb-16">
            {/* Category Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            >
              {serviceGroup.category}
            </motion.h2>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceGroup.items.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-green-500 mt-4 origin-left"
                  />
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            {index < services.length - 1 && (
              <motion.div 
                variants={itemVariants}
                className="h-px bg-gray-200 my-12" 
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
