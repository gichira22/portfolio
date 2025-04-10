'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Metadata } from 'next'
import EnhancedSocialShare from '@/components/EnhancedSocialShare'
import ReadingTime from '@/components/ReadingTime'
import TableOfContents from '@/components/TableOfContents'
import ContinueReading from '@/components/ContinueReading'
import CopyLink from '@/components/CopyLink'
import SaveForLater from '@/components/SaveForLater'
import PrintButton from '@/components/PrintButton'
import PrintStyles from '@/components/PrintStyles'
import LikeButton from '@/components/LikeButton'
import Comments from '@/components/Comments'
import Newsletter from '@/components/Newsletter'
import RelatedPosts from '@/components/RelatedPosts'
import { useEffect } from 'react'

interface BlogPost {
  title: string
  content: string
  excerpt: string
  category: string
  slug: string
  date: string
  author: string
  image: string
  tags: string[]
  readingTime: number
  id: string
  likes: number
  isLiked: boolean
  comments: any[]
}

const posts = {
  'software-dev': {
    'building-scalable-web-applications': {
      title: 'Building Scalable Web Applications with Next.js',
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
      excerpt: 'Learn how to build scalable web applications using Next.js, TypeScript, and modern web development techniques.',
      category: 'software-dev',
      slug: 'building-scalable-web-applications',
      date: 'April 5, 2025',
      author: 'Your Name',
      image: 'https://yourdomain.com/images/nextjs-scalability.jpg',
      tags: ['nextjs', 'scalability', 'web-development'],
      readingTime: 10,
      id: 'building-scalable-web-applications',
      likes: 0,
      isLiked: false,
      comments: []
    }
  },
  'aws': {
    'serverless-aws-lambda': {
      title: 'Building Serverless Applications with AWS Lambda',
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
      excerpt: 'Learn how to build serverless applications using AWS Lambda, API Gateway, and DynamoDB.',
      category: 'aws',
      slug: 'serverless-aws-lambda',
      date: 'April 5, 2025',
      author: 'Your Name',
      image: 'https://yourdomain.com/images/aws-lambda.jpg',
      tags: ['aws', 'serverless', 'lambda'],
      readingTime: 10,
      id: 'serverless-aws-lambda',
      likes: 0,
      isLiked: false,
      comments: []
    }
  },
  // Add other categories and posts as needed
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}): Promise<Metadata> {
  const post = posts[params.category]?.[params.slug]
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const post = posts[params.category]?.[params.slug]
  if (!post) {
    return <div>Post not found</div>
  }

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      window.gtag('config', 'YOUR_GA_ID', {
        page_path: `/blog/${params.category}/${params.slug}`,
      })
    }
  }, [params.category, params.slug])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Print Styles */}
      <PrintStyles />

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.author}</span>
          <span>•</span>
          <ReadingTime content={post.content} />
        </div>
        <div className="flex items-center space-x-4">
          <EnhancedSocialShare
            title={post.title}
            url={`https://your-website.com/blog/${post.category}/${post.slug}`}
            description={post.excerpt}
            image={post.image}
          />
          <CopyLink url={`https://your-website.com/blog/${post.category}/${post.slug}`} />
          <SaveForLater postId={post.id} />
          <PrintButton />
          <LikeButton postId={post.id} initialLikes={post.likes} initialIsLiked={post.isLiked} />
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents content={post.content} />

      {/* Post Content */}
      <div className="prose max-w-none">
        <ContinueReading content={post.content} />
      </div>

      {/* Tags */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
        <RelatedPosts currentPostId={post.id} posts={posts[post.category]} />
      </div>

      {/* Comments */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Comments</h3>
        <Comments postId={post.id} initialComments={post.comments || []} />
      </div>

      {/* Newsletter */}
      <div className="mt-16">
        <Newsletter />
      </div>
    </motion.div>
  )
}
