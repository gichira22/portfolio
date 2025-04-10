'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ReadingTimeProps {
  content: string
}

const wordsPerMinute = 200

export default function ReadingTime({ content }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    const words = content.split(' ').length
    const minutes = Math.ceil(words / wordsPerMinute)
    setReadingTime(minutes)
  }, [content])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-sm text-gray-600 dark:text-gray-400"
    >
      {readingTime} min read
    </motion.div>
  )
}
