'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShareIcon, CheckIcon } from '@heroicons/react/24/outline'
import copy from 'clipboard-copy'

interface CopyLinkProps {
  url: string
}

export default function CopyLink({ url }: CopyLinkProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await copy(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {copied ? (
        <CheckIcon className="w-5 h-5 text-green-500" />
      ) : (
        <ShareIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </motion.button>
  )
}
