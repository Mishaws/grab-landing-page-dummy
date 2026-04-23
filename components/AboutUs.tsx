'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const contributions = [
  {
    id: 1,
    title: "Grab's Economic Impact in Singapore",
    description: "Grab's ride-hailing and delivery services have created over 60,000 earning opportunities, generating $82.5 billion in economic activity since 2023.",
    image: '🏙️',
  },
  {
    id: 2,
    title: "Grab Launches AI Centre of Excellence (CoE)",
    description: "Strategic AI innovation hub to accelerate digital solutions that improve productivity and growth, contributing to smarter nation-building across Southeast Asia.",
    image: '🤖',
  },
  {
    id: 3,
    title: "Grab Singapore Achieves IMDA Data Protection Trustmark (DPTM)",
    description: "Recognition reflects Grab's continuous, high-level commitment to strengthening digital trust and data protection for all platforms.",
    image: '🔒',
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
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="w-full py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          Grab's Contribution to Singapore
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-lg mb-12 max-w-3xl"
        >
          From essential services to earning opportunities. We're an all-in-one platform driving positive change.
        </motion.p>

        {/* Contribution Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contributions.map((contribution) => (
            <motion.div
              key={contribution.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{contribution.image}</div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                {contribution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {contribution.description}
              </p>
              <motion.button
                whileHover={{ x: 4 }}
                className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
