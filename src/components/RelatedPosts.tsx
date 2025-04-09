'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface RelatedPost {
  id: string
  title: string
  excerpt: string
  category: string
  slug: string
  featuredImage: string
  tags: string[]
}

interface RelatedPostsProps {
  currentPostId: string
  posts: RelatedPost[]
}

export default function RelatedPosts({ currentPostId, posts }: RelatedPostsProps) {
  const relatedPosts = posts.filter(post => post.id !== currentPostId)

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  href={`/blog/${post.category}/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    #{tag}
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
