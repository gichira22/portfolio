'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A motivated and results-driven Software Engineer with comprehensive expertise in Full-stack development,
            cloud computing, and cyber security. I specialize in building scalable, responsive, and high-performance
            applications using modern technologies.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            My passion lies in creating intuitive user experiences and leveraging cutting-edge technologies to solve
            complex problems. With a strong foundation in both frontend and backend development, I bring a holistic
            approach to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating responsive and intuitive user interfaces with React and Next.js
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building robust APIs and services with Python and Django
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cloud & Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implementing secure and scalable cloud solutions with AWS
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
