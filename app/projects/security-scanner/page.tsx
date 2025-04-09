'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function SecurityScannerPage() {
  return (
    <article className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/project-images/security.jpg"
            alt="Security Scanner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Security Scanner
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
              An automated web application security scanner that identifies vulnerabilities and generates
              detailed reports. This project showcases my expertise in cybersecurity and automation.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Automated vulnerability scanning</li>
              <li>OWASP Top 10 vulnerability detection</li>
              <li>API security testing</li>
              <li>Custom security rule creation</li>
              <li>Detailed reporting with remediation steps</li>
              <li>Integration with CI/CD pipelines</li>
            </ul>

            <h2>Technical Stack</h2>
            <ul>
              <li>Language: Python</li>
              <li>Testing Framework: OWASP ZAP API</li>
              <li>API Testing: Postman, Newman</li>
              <li>Reporting: PDF, HTML, JSON formats</li>
              <li>CI/CD Integration: Jenkins, GitHub Actions</li>
              <li>Container Support: Docker</li>
            </ul>

            <h2>Security Checks</h2>
            <ul>
              <li>SQL Injection vulnerabilities</li>
              <li>Cross-Site Scripting (XSS)</li>
              <li>Cross-Site Request Forgery (CSRF)</li>
              <li>Authentication bypass attempts</li>
              <li>API endpoint security</li>
              <li>SSL/TLS configuration</li>
            </ul>

            <h2>My Cybersecurity Experience</h2>
            <p>
              I actively participate in various cybersecurity platforms to enhance my skills:
            </p>
            <ul>
              <li>
                <a href="https://tryhackme.com/p/yourusername" target="_blank" rel="noopener noreferrer">
                  TryHackMe Profile
                </a>
                 - Completed various rooms and challenges
              </li>
              <li>
                <a href="https://overthewire.org" target="_blank" rel="noopener noreferrer">
                  OverTheWire
                </a>
                 - Completed Bandit and Natas wargames
              </li>
              <li>
                <a href="https://flwa.cloud" target="_blank" rel="noopener noreferrer">
                  FLWA.cloud
                </a>
                 - Active participant in cloud security challenges
              </li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>Identified 50+ critical vulnerabilities in production systems</li>
              <li>Reduced manual security testing time by 80%</li>
              <li>Integrated with 10+ CI/CD pipelines</li>
              <li>Zero false positives in production environment</li>
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
              href="https://github.com/yourusername/security-scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Source Code
            </a>
            <a
              href="https://docs.yourdomain.com/security-scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Documentation
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
              href="/projects/cloud-infra"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Previous Project
            </Link>
            <Link
              href="/projects/ai-chat"
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
