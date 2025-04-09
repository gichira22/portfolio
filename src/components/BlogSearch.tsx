'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Post {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
}

const allPosts: Post[] = [
  // Software Development posts
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build scalable web applications using Next.js, TypeScript, and best practices for performance optimization.',
    date: 'April 5, 2025',
    slug: 'building-scalable-web-applications',
    category: 'software-dev'
  },
  // Add all other posts here
]

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    )

    setFilteredPosts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search articles..."
            className="w-full px-4 py-2 pr-10 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-colors"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {searchQuery && filteredPosts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Search Results ({filteredPosts.length})</h3>
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    <a
                      href={`/blog/${post.category}/${post.slug}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {!searchQuery && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Start typing to search through all articles
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
