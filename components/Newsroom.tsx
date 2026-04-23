'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const newsItems = [
  {
    id: 1,
    date: '08/13/25',
    title: 'Grab Unveils T3 AI-Powered Experiences at Grab 2025 as Southeast Asia Industry',
    category: 'NEWS',
    image: '/images/GrabX-2026-4-scaled.jpg',
    isImg: true,
  },
  {
    id: 2,
    date: '07/10/25',
    title: 'Grab in partnership with ViralBot officially launch Singapore first autonomous built...',
    category: 'FEATURE',
    image: '/images/WhatsApp-Image-2026-03-30-at-9.56.39-AM.jpeg',
    isImg: true,
  },
  {
    id: 3,
    date: '06/25/25',
    title: 'Grab Singapore launches #MorePowerCan with industry-first recognition reflects Grab',
    category: 'FEATURE',
    image: '/images/Grab-Partner-Benefits-Updated-with-Women-Benefits.jpg',
    isImg: true,
  },
  {
    id: 4,
    date: '05/15/25',
    title: 'UN Global Compact Network Singapore-Kantor and Grab Launch Landmark Study...',
    category: 'FEATURE',
    image: '/images/PR-scaled.jpg',
    isImg: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
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

export function Newsroom() {
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
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
        >
          Newsroom
        </motion.h2>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {newsItems.map((news) => (
            <motion.div
              key={news.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative bg-gray-100 rounded-lg h-48 lg:h-56 mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                {news.isImg ? (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-4xl">
                    📰
                  </div>
                )}
              </div>

              {/* Date */}
              <motion.span
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                {news.date}
              </motion.span>

              {/* Category */}
              <motion.p
                className="text-gray-500 text-xs font-medium mt-2 mb-3"
              >
                {news.category}
              </motion.p>

              {/* Title */}
              <motion.h3
                className="text-lg font-bold text-gray-900 leading-snug group-hover:text-green-600 transition-colors line-clamp-3"
              >
                {news.title}
              </motion.h3>

              {/* Read More Link */}
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="text-green-600 font-semibold text-sm mt-4 inline-flex items-center gap-2 hover:text-green-700"
              >
                Read More →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* More News Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-green-600 hover:text-green-600 transition-colors"
          >
            More News Releases
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}