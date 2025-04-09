'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SocialShare from '@/components/SocialShare'

const posts = {
  'software-dev': {
    'building-scalable-web-applications': {
      title: 'Building Scalable Web Applications with Next.js',
      date: 'April 5, 2025',
      content: `
        <article className="prose dark:prose-invert max-w-none">
          <p>
            Building scalable web applications requires careful planning and implementation of best practices.
            In this article, we'll explore how to build scalable applications using Next.js, TypeScript,
            and modern web development techniques.
          </p>

          <h2>Key Concepts</h2>
          <ul>
            <li>Server-side rendering vs Static generation</li>
            <li>API routing and data fetching</li>
            <li>State management strategies</li>
            <li>Performance optimization</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            We'll walk through implementing a real-world application that demonstrates these concepts.
            The application will include features like:</p>

          <ul>
            <li>Dynamic routing</li>
            <li>API integration</li>
            <li>State management</li>
            <li>Performance optimization</li>
          </ul>

          <h2>Best Practices</h2>
          <p>
            Throughout the article, we'll discuss best practices for:</p>

          <ul>
            <li>Code organization</li>
            <li>Performance optimization</li>
            <li>Security</li>
            <li>Testing</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            By following these guidelines, you can build scalable web applications that perform well
            and are maintainable in the long term.
          </p>
        </article>
      `,
      tags: ['nextjs', 'scalability', 'web-development']
    }
  },
  'aws': {
    'serverless-aws-lambda': {
      title: 'Building Serverless Applications with AWS Lambda',
      date: 'April 5, 2025',
      content: `
        <article className="prose dark:prose-invert max-w-none">
          <p>
            Serverless computing has revolutionized the way we build applications. In this article,
            we'll explore how to build serverless applications using AWS Lambda.
          </p>

          <h2>Key Concepts</h2>
          <ul>
            <li>Serverless architecture</li>
            <li>AWS Lambda basics</li>
            <li>API Gateway integration</li>
            <li>DynamoDB integration</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            We'll walk through implementing a real-world application that demonstrates these concepts.
            The application will include features like:</p>

          <ul>
            <li>Serverless functions</li>
            <li>API endpoints</li>
            <li>Data storage</li>
            <li>Event-driven architecture</li>
          </ul>

          <h2>Best Practices</h2>
          <p>
            Throughout the article, we'll discuss best practices for:</p>

          <ul>
            <li>Cost optimization</li>
            <li>Performance optimization</li>
            <li>Security</li>
            <li>Monitoring and logging</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            By following these guidelines, you can build efficient and scalable serverless applications
            using AWS Lambda.
          </p>
        </article>
      `,
      tags: ['aws', 'serverless', 'lambda']
    }
  },
  // Add other categories and posts as needed
}

export default function BlogPost({
  params: { category, slug }
}) {
  const post = posts[category]?.[slug]
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <Link
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-2 inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{post.date}</p>
          </div>
          <SocialShare title={post.title} url={`https://yourdomain.com/blog/${category}/${slug}`} />
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-xl font-bold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
