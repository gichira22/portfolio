'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface SavedPost {
  id: string
  title: string
  category: string
  slug: string
  excerpt: string
  date: string
  image: string
}

export default function ReadingList() {
  const [savedPosts, setSavedPosts] = useState<SavedPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const response = await fetch('/api/saved-posts')
        if (!response.ok) {
          throw new Error('Failed to fetch saved posts')
        }
        const data = await response.json()
        setSavedPosts(data)
      } catch (error) {
        console.error('Error fetching saved posts:', error)
        toast.error('Failed to load saved posts')
      } finally {
        setLoading(false)
      }
    }

    fetchSavedPosts()
  }, [])

  const handleRemove = async (postId: string) => {
    try {
      const response = await fetch(`/api/saved-posts/${postId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to remove post')
      }

      setSavedPosts((prev) => prev.filter((post) => post.id !== postId))
      toast.success('Post removed from reading list')
    } catch (error) {
      console.error('Error removing post:', error)
      toast.error('Failed to remove post')
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your reading list...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Reading List</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Keep track of your favorite articles and posts you want to read later
        </p>
      </motion.div>

      {savedPosts.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your reading list is empty. Start saving posts you want to read later!
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Browse Posts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: post.id.length * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  <Link
                    href={`/blog/${post.category}/${post.slug}`}
                    className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button
                    onClick={() => handleRemove(post.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
