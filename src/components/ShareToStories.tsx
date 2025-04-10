'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShareIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

interface ShareToStoriesProps {
  title: string
  url: string
  image: string
}

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: 'instagram' },
  { id: 'facebook', name: 'Facebook', icon: 'facebook' },
  { id: 'twitter', name: 'Twitter', icon: 'twitter' },
]

export default function ShareToStories({ title, url, image }: ShareToStoriesProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleShare = async (platform: string) => {
    setLoading(true)

    try {
      // TODO: Implement actual stories sharing API
      const shareUrl = `${platform === 'instagram' ? 'https://www.instagram.com' : platform === 'facebook' ? 'https://www.facebook.com' : 'https://www.twitter.com'}/stories?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&image=${encodeURIComponent(image)}`
      
      // Open in new tab
      window.open(shareUrl, '_blank')
      
      toast.success(`Sharing to ${platform} Stories...`)
    } catch (error) {
      console.error('Failed to share:', error)
      toast.error('Failed to share to stories')
    } finally {
      setLoading(false)
      setShowMenu(false)
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <ShareIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </motion.button>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl z-50"
        >
          <h3 className="text-xl font-semibold mb-4">Share to Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handleShare(platform.id)}
                disabled={loading}
                className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                <span className="text-primary-600">{platform.icon}</span>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
