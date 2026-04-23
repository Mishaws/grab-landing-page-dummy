'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const contributions = [
  {
    id: 1,
    title: "Grab's Economic Impact in Singapore",
    description: "Grab's ride-hailing and delivery services contributed S$5.2 billion to Singapore's economy in 2023. The impact supported 11,000 earning opportunities, and generated S$2.5 billion in household income through in-app purchases and the economic activity it supports among the local supply chains in the wider Singapore economy.",
    image: '/images/grab-PahYZA1hx2M-unsplash-2048x1363.jpg',
    isImg: true,
  },
  {
    id: 2,
    title: "Grab Launches AI Centre of Excellence (CoE) to Power SEAs Digital Future",
    description: "Grab officially launched its first Artificial Intelligence Centre of Excellence (AI CoE), with support from Digital Industry Singapore (DISG). This strategic AI innovation hub aims to accelerate AI-driven solutions that improve digital accessibility, boost productivity and growth, and contribute to smart nation-building across Southeast Asia.",
    image: '/images/KZ9_3311-2-Ed-V2-scaled.jpg',
    isImg: true,
  },
  {
    id: 3,
    title: "Grab Singapore Achieves IMDA Data Protection Trustmark (DPTM) Accreditation",
    description: "Grab Singapore has been officially accredited with the Infocomm Media Development Authority (IMDA) Data Protection Trustmark (DPTM). This recognition reflects Grab's continuous, top-level commitment to strengthening digital trust and ensuring personal data remains safe and secure for all platform users.",
    image: '/images/1754294083505.jpg',
    isImg: true,
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

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? contributions.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === contributions.length - 1 ? 0 : prev + 1))
  }

  const current = contributions[currentIndex]

  return (
    <section ref={ref} className="w-full py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          Grab's Contribution to Singapore
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mb-12 max-w-3xl"
        >
          From essential services to earning opportunities. We're an all-in-one platform driving positive change.
        </motion.p>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section - Larger */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            key={`content-${current.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {current.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {current.description}
              </p>
              <motion.button
                whileHover={{ x: 4 }}
                className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2"
              >
                Learn More →
              </motion.button>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-green-600 hover:text-green-600 flex items-center justify-center text-xl transition-colors"
              >
                ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-green-600 hover:text-green-600 flex items-center justify-center text-xl transition-colors"
              >
                →
              </motion.button>
            </div>

            {/* Indicator Dots */}
            <div className="flex gap-2 mt-6">
              {contributions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-green-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}