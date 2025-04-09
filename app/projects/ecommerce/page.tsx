'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function EcommercePage() {
  return (
    <article className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/project-images/ecommerce.jpg"
            alt="E-Commerce Platform"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              E-Commerce Platform
            </h1>
          </div>
        </div>

        {/* Project Info */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2>Overview</h2>
            <p>
              A full-stack e-commerce platform I built using Next.js and Django. This project showcases
              my expertise in building scalable web applications with complex business logic and
              secure payment processing.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Responsive product catalog with filtering and search</li>
              <li>User authentication and profile management</li>
              <li>Shopping cart and wishlist functionality</li>
              <li>Secure payment processing with Stripe</li>
              <li>Order management system</li>
              <li>Admin dashboard for inventory</li>
            </ul>

            <h2>Technical Stack</h2>
            <ul>
              <li>Frontend: Next.js, TypeScript, Tailwind CSS</li>
              <li>Backend: Django, Django REST Framework</li>
              <li>Database: PostgreSQL</li>
              <li>Payment: Stripe API</li>
              <li>State: Redux Toolkit</li>
              <li>Testing: Jest, React Testing Library</li>
            </ul>

            <h2>Challenges & Solutions</h2>
            <p>
              One of the main challenges was implementing real-time inventory management to prevent
              overselling. I solved this by:
            </p>
            <ul>
              <li>Implementing optimistic UI updates with fallback mechanisms</li>
              <li>Using WebSocket connections for real-time stock updates</li>
              <li>Implementing a queuing system for high-traffic scenarios</li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>99.9% uptime with robust error handling</li>
              <li>50% faster page load times</li>
              <li>30% increase in mobile conversion rate</li>
              <li>Successful processing of 1000+ concurrent users</li>
            </ul>
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://github.com/gkal/ecommerce-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Source Code
            </a>
            <a
              href="https://ecommerce-platform.gkal.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Live Demo
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between"
          >
            <Link
              href="/projects/ai-chat"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Previous Project
            </Link>
            <Link
              href="/projects/cloud-infra"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Next Project →
            </Link>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
