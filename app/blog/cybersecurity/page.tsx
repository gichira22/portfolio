'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: "Building Secure Web Applications",
    date: "April 5, 2025",
    excerpt: "A comprehensive guide to building secure web applications following OWASP security guidelines.",
    slug: "secure-web-applications"
  },
  {
    title: "Penetration Testing Basics",
    date: "March 28, 2025",
    excerpt: "Introduction to penetration testing techniques and tools for security professionals.",
    slug: "penetration-testing-basics"
  },
  {
    title: "Secure Coding Practices",
    date: "March 20, 2025",
    excerpt: "Best practices for writing secure code and preventing common vulnerabilities.",
    slug: "secure-coding-practices"
  },
  {
    title: "Cloud Security Best Practices",
    date: "March 12, 2025",
    excerpt: "Implementing security best practices in cloud environments and protecting cloud resources.",
    slug: "cloud-security-best-practices"
  },
  {
    title: "Building Security Dashboards",
    date: "March 5, 2025",
    excerpt: "Creating interactive security dashboards using ELK Stack and Grafana.",
    slug: "security-dashboards"
  },
  {
    title: "Security Automation with Python",
    date: "February 25, 2025",
    excerpt: "Automating security tasks using Python and popular security libraries.",
    slug: "security-automation-python"
  },
  {
    title: "Building Security Scanners",
    date: "February 18, 2025",
    excerpt: "Creating custom security scanners using Python and popular security libraries.",
    slug: "building-security-scanners"
  },
  {
    title: "Security Incident Response",
    date: "February 11, 2025",
    excerpt: "Best practices for handling security incidents and implementing incident response plans.",
    slug: "incident-response"
  },
  {
    title: "Building Security APIs",
    date: "February 4, 2025",
    excerpt: "Creating secure REST APIs with authentication, authorization, and rate limiting.",
    slug: "building-security-apis"
  },
  {
    title: "Security Testing Automation",
    date: "January 28, 2025",
    excerpt: "Automating security testing using tools like OWASP ZAP and Selenium.",
    slug: "security-testing-automation"
  }
]

export default function CybersecurityBlog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cybersecurity Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on cybersecurity, penetration testing, and security best practices.
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
                  href={`/blog/cybersecurity/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/cybersecurity/${post.slug}`}
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
