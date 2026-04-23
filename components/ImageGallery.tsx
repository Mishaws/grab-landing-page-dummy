'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const gallery = [
  {
    title: 'GrabRides Experience',
    size: 'full',
    placeholder: 'Hero image - Your premium ride-hailing service',
  },
  {
    title: 'GrabFood Delivery',
    size: 'half',
    placeholder: 'Show diverse food options and quick delivery',
  },
  {
    title: 'GrabExpress Logistics',
    size: 'half',
    placeholder: 'Display fast package delivery network',
  },
  {
    title: 'GrabPay Digital Wallet',
    size: 'half',
    placeholder: 'Showcase secure payment solutions',
  },
  {
    title: 'Customer Stories',
    size: 'half',
    placeholder: 'Real user testimonials and success stories',
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
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export function ImageGallery() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the services that connect millions of people daily
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {/* Full width image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="w-full"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <div className="text-center">
                  <p className="text-white text-2xl font-bold mb-2">[MAIN HERO IMAGE PLACEHOLDER]</p>
                  <p className="text-gray-100 text-sm">{gallery[0].placeholder}</p>
                  <p className="text-gray-200 text-xs mt-2">Recommended: 1400x560px</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.slice(1).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                    <div className="text-center">
                      <p className="text-white text-lg font-bold mb-2">[{item.title.toUpperCase()} PLACEHOLDER]</p>
                      <p className="text-gray-100 text-sm">{item.placeholder}</p>
                      <p className="text-gray-200 text-xs mt-2">Recommended: 600x400px</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-200"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-3">📸 Image Placeholders Guide</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>✓ Replace all gray placeholder boxes with your Grab images</li>
            <li>✓ Use high-quality, professional images from official Grab resources</li>
            <li>✓ Follow the recommended dimensions for optimal display</li>
            <li>✓ Edit image paths in this component file</li>
            <li>✓ Upload images to the /public folder for easy reference</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
