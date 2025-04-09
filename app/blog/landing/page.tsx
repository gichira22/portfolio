'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    title: 'Software Development',
    description: 'Modern web development practices, best practices, and technical insights',
    slug: 'software-dev',
    icon: '💻'
  },
  {
    title: 'AWS',
    description: 'Cloud computing, infrastructure, and DevOps best practices',
    slug: 'aws',
    icon: '☁️'
  },
  {
    title: 'Cybersecurity',
    description: 'Security best practices, penetration testing, and threat analysis',
    slug: '🔒',
    icon: '🔒'
  },
  {
    title: 'SEO',
    description: 'Search engine optimization, content strategy, and analytics',
    slug: '🔍',
    icon: '🔍'
  },
  {
    title: 'AI/ML',
    description: 'Artificial intelligence, machine learning, and data science',
    slug: '🤖',
    icon: '🤖'
  }
]

export default function BlogLanding() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on modern software development, cloud computing, cybersecurity, and more.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link
              href={`/blog/${category.slug}`}
              className="block"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{category.posts.length} articles</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
