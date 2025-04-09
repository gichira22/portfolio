'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface BlogPost {
  title: string
  content: string
  excerpt: string
  category: string
  tags: string[]
  featuredImage: string
}

export default function BlogEditor() {
  const [post, setPost] = useState<BlogPost>({
    title: '',
    content: '',
    excerpt: '',
    category: 'software-dev',
    tags: [],
    featuredImage: ''
  })

  const [isPublishing, setIsPublishing] = useState(false)

  const categories = [
    { value: 'software-dev', label: 'Software Development' },
    { value: 'aws', label: 'AWS' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'seo', label: 'SEO' },
    { value: 'ai-ml', label: 'AI/ML' }
  ]

  const handlePublish = async () => {
    setIsPublishing(true)
    try {
      // TODO: Implement actual API call to publish the post
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Post published successfully!')
      // Reset form after successful publish
      setPost({
        title: '',
        content: '',
        excerpt: '',
        category: 'software-dev',
        tags: [],
        featuredImage: ''
      })
    } catch (error) {
      toast.error('Failed to publish post')
    } finally {
      setIsPublishing(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Write a New Post</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Excerpt
            </label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              placeholder="Enter post excerpt"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Content
            </label>
            <textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              placeholder="Enter post content"
              rows={12}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tags
              </label>
              <input
                type="text"
                value={post.tags.join(', ')}
                onChange={(e) => {
                  const tags = e.target.value.split(',').map(tag => tag.trim())
                  setPost({ ...post, tags })
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Enter tags (comma separated)"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Featured Image URL
            </label>
            <input
              type="text"
              value={post.featuredImage}
              onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handlePublish}
              disabled={isPublishing}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPublishing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                'Publish Post'
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
