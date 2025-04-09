'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: "Building AI Chatbots",
    date: "April 5, 2025",
    excerpt: "A comprehensive guide to building AI-powered chatbots using modern frameworks.",
    slug: "building-ai-chatbots"
  },
  {
    title: "Machine Learning with Python",
    date: "March 28, 2025",
    excerpt: "Introduction to machine learning using Python and popular libraries like scikit-learn and TensorFlow.",
    slug: "machine-learning-python"
  },
  {
    title: "Natural Language Processing",
    date: "March 20, 2025",
    excerpt: "Exploring natural language processing techniques and building text analysis applications.",
    slug: "natural-language-processing"
  },
  {
    title: "Computer Vision Basics",
    date: "March 12, 2025",
    excerpt: "Introduction to computer vision and building image processing applications.",
    slug: "computer-vision-basics"
  },
  {
    title: "Building Recommendation Systems",
    date: "March 5, 2025",
    excerpt: "Creating personalized recommendation systems using collaborative filtering and matrix factorization.",
    slug: "recommendation-systems"
  },
  {
    title: "Deep Learning with TensorFlow",
    date: "February 25, 2025",
    excerpt: "Building deep learning models using TensorFlow and Keras.",
    slug: "deep-learning-tensorflow"
  },
  {
    title: "AI Ethics and Bias",
    date: "February 18, 2025",
    excerpt: "Exploring ethical considerations in AI and preventing bias in machine learning models.",
    slug: "ai-ethics-bias"
  },
  {
    title: "Building AI APIs",
    date: "February 11, 2025",
    excerpt: "Creating REST APIs for AI models and deploying them to production.",
    slug: "building-ai-apis"
  },
  {
    title: "AI Model Optimization",
    date: "February 4, 2025",
    excerpt: "Techniques for optimizing AI models for performance and resource efficiency.",
    slug: "ai-model-optimization"
  },
  {
    title: "AI Project Management",
    date: "January 28, 2025",
    excerpt: "Best practices for managing AI projects and implementing machine learning in organizations.",
    slug: "ai-project-management"
  }
]

export default function AiMlBlog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI/ML Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on artificial intelligence, machine learning, and deep learning.
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
                  href={`/blog/ai-ml/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/ai-ml/${post.slug}`}
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
