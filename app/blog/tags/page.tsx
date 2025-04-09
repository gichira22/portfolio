'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tags = [
  {
    name: 'nextjs',
    count: 15,
    posts: [
      {
        title: 'Building Scalable Web Applications with Next.js',
        slug: 'building-scalable-web-applications',
        category: 'software-dev',
        date: 'April 5, 2025'
      },
      // Add more posts for this tag
    ]
  },
  {
    name: 'aws',
    count: 12,
    posts: [
      {
        title: 'Building Serverless Applications with AWS Lambda',
        slug: 'serverless-aws-lambda',
        category: 'aws',
        date: 'April 5, 2025'
      },
      // Add more posts for this tag
    ]
  },
  // Add more tags
]

export default function TagsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tags</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore articles by topic and technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tags.map((tag) => (
          <motion.div
            key={tag.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <Link
                  href={`/blog/tags/${tag.name}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  #{tag.name}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tag.count} articles
              </p>
              <div className="flex flex-wrap gap-2">
                {tag.posts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.category}/${post.slug}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
