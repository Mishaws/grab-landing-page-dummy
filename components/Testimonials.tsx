'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Regular User',
    company: 'Manila',
    image: '�‍💼',
    quote: 'Grab has made my daily commute so much easier and safer. The app is super convenient and the drivers are always professional.',
  },
  {
    name: 'Ravi Patel',
    role: 'Food Lover',
    company: 'Singapore',
    image: '�‍💼',
    quote: 'GrabFood delivers my favorite restaurants right to my door. The food quality is always perfect and delivery is incredibly fast.',
  },
  {
    name: 'Aisha Khan',
    role: 'Business Owner',
    company: 'Bangkok',
    image: '�‍💻',
    quote: 'I use Grab for everything - rides, deliveries, and payments. It\'s the most reliable and convenient app in Southeast Asia.',
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
  hidden: { y: 30, opacity: 0, rotateX: -30 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export function Testimonials() {
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
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join millions of satisfied users across Southeast Asia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 176, 80, 0.15)',
              }}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden group"
            >
              {/* Gradient background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                      className="text-yellow-400 text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="text-4xl"
                  >
                    {testimonial.image}
                  </motion.div>

                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-green-600 font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
