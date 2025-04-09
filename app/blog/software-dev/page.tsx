'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    date: "April 5, 2025",
    excerpt: "Learn how to build scalable web applications using Next.js, TypeScript, and best practices for performance optimization.",
    slug: "building-scalable-web-applications"
  },
  {
    title: "Advanced State Management in React",
    date: "March 28, 2025",
    excerpt: "A comprehensive guide to managing state in React applications using Redux Toolkit, Zustand, and React Query.",
    slug: "advanced-state-management"
  },
  {
    title: "TypeScript for Enterprise Applications",
    date: "March 20, 2025",
    excerpt: "Best practices for using TypeScript in large-scale enterprise applications, including type safety and code organization.",
    slug: "typescript-enterprise-apps"
  },
  {
    title: "React Performance Optimization",
    date: "March 12, 2025",
    excerpt: "Techniques for optimizing React application performance, including code splitting, memoization, and virtualization.",
    slug: "react-performance-optimization"
  },
  {
    title: "Building Microservices with Node.js",
    date: "March 5, 2025",
    excerpt: "A practical guide to building microservices architecture using Node.js, Express, and Docker.",
    slug: "building-microservices"
  },
  {
    title: "CI/CD Best Practices",
    date: "February 25, 2025",
    excerpt: "Implementing continuous integration and deployment workflows using GitHub Actions and Docker.",
    slug: "ci-cd-best-practices"
  },
  {
    title: "Monorepo Architecture",
    date: "February 18, 2025",
    excerpt: "Managing multiple packages in a single repository using Lerna and pnpm workspaces.",
    slug: "monorepo-architecture"
  },
  {
    title: "TypeScript Advanced Features",
    date: "February 11, 2025",
    excerpt: "Exploring advanced TypeScript features like discriminated unions, type inference, and conditional types.",
    slug: "typescript-advanced-features"
  },
  {
    title: "Building Enterprise Dashboards",
    date: "February 4, 2025",
    excerpt: "Creating interactive dashboards using React, Recharts, and Material-UI.",
    slug: "building-enterprise-dashboards"
  },
  {
    title: "Testing React Applications",
    date: "January 28, 2025",
    excerpt: "Comprehensive guide to testing React applications using Jest, React Testing Library, and Cypress.",
    slug: "testing-react-applications"
  }
]

export default function SoftwareDevBlog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Development Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on modern software development practices, tools, and best practices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <Link
                  href={`/blog/software-dev/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/software-dev/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
