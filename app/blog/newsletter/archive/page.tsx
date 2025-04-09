'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const newsletters = [
  {
    id: 1,
    title: 'Monthly Newsletter #1 - April 2025',
    date: 'April 1, 2025',
    excerpt: 'Welcome to our first monthly newsletter! This month we cover the latest in web development, cloud computing, and cybersecurity.',
    topics: ['Web Development', 'Cloud Computing', 'Cybersecurity'],
  },
  // Add more newsletters
]

export default function NewsletterArchive() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletter Archive</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore past newsletters and stay updated with the latest in technology and development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsletters.map((newsletter) => (
          <motion.div
            key={newsletter.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <Link
                  href={`/blog/newsletter/${newsletter.id}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {newsletter.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {newsletter.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {newsletter.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {newsletter.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
