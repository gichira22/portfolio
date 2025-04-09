'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SocialShareProps {
  title: string
  url: string
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title)} ${encodeURIComponent(url)}`
  }

  return (
    <div className="mt-8 flex gap-4">
      {Object.entries(shareLinks).map(([platform, link]) => (
        <motion.a
          key={platform}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {platform === 'twitter' && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              />
            )}
            {platform === 'linkedin' && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
            )}
            {platform === 'facebook' && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3.72 13a2.25 2.25 0 01-.78-4.44A2.25 2.25 0 013 8.25V6a2.25 2.25 0 012.25-2.25h1.59a2.25 2.25 0 011.67.66V8.25a.75.75 0 00.75.75 3.75 3.75 0 003.06 0 .75.75 0 00.75-.75V6a.75.75 0 01.75-.75h1.5a2.25 2.25 0 012.25 2.25v1.59a2.25 2.25 0 01-1.67.66A2.25 2.25 0 0113.5 9h-1.5a2.25 2.25 0 01-2.25-2.25V6a.75.75 0 00-.75-.75A3.75 3.75 0 0011.25 6h-1.09a2.25 2.25 0 00-1.59 0H9a2.25 2.25 0 00-2.25 2.25v1.59a2.25 2.25 0 001.67.66A2.25 2.25 0 019 9h1.5a.75.75 0 01.75.75 3.75 3.75 0 013.06 0 .75.75 0 01.75-.75V6a.75.75 0 00-.75-.75A3.75 3.75 0 0011.25 6H9a1.5 1.5 0 00-1.5 1.5v1.59a1.5 1.5 0 001.22 1.41A1.5 1.5 0 019 13.5h1.09a1.5 1.5 0 011.17.44l1.12 1.12a1.5 1.5 0 01.38 1.22V21a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-.61a1.5 1.5 0 00-.38-1.22 1.5 1.5 0 01-1.17-.44H9z"
              />
            )}
            {platform === 'whatsapp' && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 21l-4.243-4.243a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l4.243 4.243a1 1 0 010 1.414z"
              />
            )}
          </svg>
        </motion.a>
      ))}
    </div>
  )
}
