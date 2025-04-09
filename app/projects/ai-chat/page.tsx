'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AIChatPage() {
  return (
    <article className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/project-images/ai-chat.jpg"
            alt="AI Chat Application"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              AI Chat Application
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
              A real-time chat application I developed with AI capabilities for natural language processing
              and automated responses. This project demonstrates my expertise in both frontend and
              backend development, as well as AI integration.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Real-time messaging with WebSocket</li>
              <li>AI-powered chatbot responses</li>
              <li>Natural language processing for intent recognition</li>
              <li>Multi-language support with automatic translation</li>
              <li>Voice input and text-to-speech output</li>
              <li>Message sentiment analysis</li>
            </ul>

            <h2>Technical Stack</h2>
            <ul>
              <li>Frontend: React, TypeScript, WebSocket</li>
              <li>Backend: Node.js, Express, Socket.io</li>
              <li>AI/ML: OpenAI GPT-3, TensorFlow.js</li>
              <li>Database: MongoDB</li>
              <li>Real-time: Redis for pub/sub</li>
              <li>APIs: OpenAI, Google Cloud Translation</li>
            </ul>

            <h2>AI Features</h2>
            <ul>
              <li>Context-aware conversation management</li>
              <li>Entity recognition and extraction</li>
              <li>Automated response generation</li>
              <li>Sentiment analysis for user feedback</li>
              <li>Language detection and translation</li>
              <li>Voice recognition and synthesis</li>
            </ul>

            <h2>Technical Challenges</h2>
            <p>
              Some of the key challenges faced and solved during development:
            </p>
            <ul>
              <li>Maintaining conversation context across multiple turns</li>
              <li>Optimizing real-time performance for large user bases</li>
              <li>Implementing fallback mechanisms for API failures</li>
              <li>Handling concurrent WebSocket connections efficiently</li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>Successfully handles 10,000+ concurrent users</li>
              <li>95% accuracy in intent recognition</li>
              <li>Support for 50+ languages</li>
              <li>Average response time under 100ms</li>
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
              href="https://github.com/gkal/ai-chat-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Source Code
            </a>
            <a
              href="https://ai-chat.gkal.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Try Live Demo
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
              href="/projects/security-scanner"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Previous Project
            </Link>
            <Link
              href="/projects/ecommerce"
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
