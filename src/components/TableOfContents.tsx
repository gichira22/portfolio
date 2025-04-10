'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headingElements = doc.querySelectorAll('h1, h2, h3')

    const headingsData = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1)),
    }))

    setHeadings(headingsData)
  }, [content])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-24 w-64 hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
    >
      <h3 className="text-sm font-semibold mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors pl-2"
            style={{
              paddingLeft: `${(heading.level - 1) * 8}px`,
            }}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}
