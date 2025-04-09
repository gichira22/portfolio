'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: "Advanced SEO Techniques",
    date: "April 5, 2025",
    excerpt: "Exploring advanced SEO techniques for ranking higher in search engine results.",
    slug: "advanced-seo-techniques"
  },
  {
    title: "Technical SEO Best Practices",
    date: "March 28, 2025",
    excerpt: "Best practices for technical SEO, including site speed, mobile optimization, and structured data.",
    slug: "technical-seo-best-practices"
  },
  {
    title: "Content Optimization",
    date: "March 20, 2025",
    excerpt: "Strategies for optimizing content for search engines and user engagement.",
    slug: "content-optimization"
  },
  {
    title: "Local SEO Strategies",
    date: "March 12, 2025",
    excerpt: "Best practices for optimizing websites for local search and business listings.",
    slug: "local-seo-strategies"
  },
  {
    title: "Building SEO-Friendly Websites",
    date: "March 5, 2025",
    excerpt: "Creating websites that are optimized for search engines from the ground up.",
    slug: "seo-friendly-websites"
  },
  {
    title: "SEO Analytics",
    date: "February 25, 2025",
    excerpt: "Using analytics tools to track and improve SEO performance.",
    slug: "seo-analytics"
  },
  {
    title: "Mobile SEO Optimization",
    date: "February 18, 2025",
    excerpt: "Best practices for optimizing websites for mobile search and user experience.",
    slug: "mobile-seo-optimization"
  },
  {
    title: "Voice Search SEO",
    date: "February 11, 2025",
    excerpt: "Optimizing content for voice search and smart speakers.",
    slug: "voice-search-seo"
  },
  {
    title: "SEO for E-commerce",
    date: "February 4, 2025",
    excerpt: "Best practices for optimizing e-commerce websites for search engines.",
    slug: "seo-for-ecommerce"
  },
  {
    title: "SEO Audit Checklist",
    date: "January 28, 2025",
    excerpt: "Comprehensive checklist for performing SEO audits and identifying optimization opportunities.",
    slug: "seo-audit-checklist"
  }
]

export default function SeoBlog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">SEO Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on SEO strategies, optimization techniques, and best practices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <Link
                  href={`/blog/seo/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/seo/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
