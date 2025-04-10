'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface NewsletterConfirmProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function NewsletterConfirm({ searchParams }: NewsletterConfirmProps) {
  const email = Array.isArray(searchParams.email)
    ? searchParams.email[0]
    : searchParams.email || ''

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You've successfully subscribed to our newsletter! You'll receive updates about new articles, tutorials, and insights directly in your inbox.
        </p>

        {email && (
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We'll send you a welcome email shortly to {email}. If you don't see it, please check your spam folder.
          </p>
        )}

        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Blog
          </Link>

          <Link
            href="/blog/newsletter/archive"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            View Newsletter Archive
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
