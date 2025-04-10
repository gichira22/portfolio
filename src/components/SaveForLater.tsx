'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookmarkIcon, CheckIcon } from '@heroicons/react/24/outline'

interface SaveForLaterProps {
  postId: string
}

export default function SaveForLater({ postId }: SaveForLaterProps) {
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    try {
      const response = await fetch('/api/save-later', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      })

      if (!response.ok) {
        throw new Error('Failed to save post')
      }

      setSaved(true)
    } catch (error) {
      console.error('Save failed:', error)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSave}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {saved ? (
        <CheckIcon className="w-5 h-5 text-green-500" />
      ) : (
        <BookmarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </motion.button>
  )
}
