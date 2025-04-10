'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ContinueReadingProps {
  content: string
  excerptLength: number
}

export default function ContinueReading({ content, excerptLength = 300 }: ContinueReadingProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const excerpt = content.substring(0, excerptLength)
  const hasMore = content.length > excerptLength

  return (
    <div className="prose max-w-none">
      {isExpanded ? content : excerpt}
      {hasMore && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Continue Reading'}
          <svg
            className={`w-4 h-4 ml-2 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>
      )}
    </div>
  )
}
