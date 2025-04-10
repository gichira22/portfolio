'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MailIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

interface ShareToEmailProps {
  title: string
  url: string
  excerpt: string
}

export default function ShareToEmail({ title, url, excerpt }: ShareToEmailProps) {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implement actual email sharing API
      const subject = `Check out this article: ${title}`
      const body = `
        ${excerpt}
        
        Read more: ${url}
      `

      // Open email client
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      toast.success('Email client opened!')
    } catch (error) {
      console.error('Failed to share:', error)
      toast.error('Failed to share to email')
    } finally {
      setLoading(false)
      setShowForm(false)
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowForm(!showForm)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <MailIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </motion.button>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl z-50"
        >
          <form onSubmit={handleShare} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  )
}
