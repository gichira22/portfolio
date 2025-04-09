'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: "Building Serverless Applications with AWS Lambda",
    date: "April 5, 2025",
    excerpt: "A comprehensive guide to building serverless applications using AWS Lambda, API Gateway, and DynamoDB.",
    slug: "serverless-aws-lambda"
  },
  {
    title: "AWS Cost Optimization Strategies",
    date: "March 28, 2025",
    excerpt: "Best practices for optimizing AWS costs while maintaining high availability and performance.",
    slug: "aws-cost-optimization"
  },
  {
    title: "Building CI/CD Pipelines with AWS CodePipeline",
    date: "March 20, 2025",
    excerpt: "Automating deployment workflows using AWS CodePipeline, CodeBuild, and CodeDeploy.",
    slug: "aws-codepipeline"
  },
  {
    title: "AWS Security Best Practices",
    date: "March 12, 2025",
    excerpt: "Implementing security best practices in AWS, including IAM, VPC, and security groups.",
    slug: "aws-security-best-practices"
  },
  {
    title: "Building Microservices with AWS ECS",
    date: "March 5, 2025",
    excerpt: "Deploying containerized microservices using AWS ECS and Docker.",
    slug: "aws-ecs-microservices"
  },
  {
    title: "AWS CloudFormation Best Practices",
    date: "February 25, 2025",
    excerpt: "Managing infrastructure as code using AWS CloudFormation templates and best practices.",
    slug: "cloudformation-best-practices"
  },
  {
    title: "AWS Lambda Performance Optimization",
    date: "February 18, 2025",
    excerpt: "Techniques for optimizing AWS Lambda function performance and reducing cold starts.",
    slug: "lambda-performance-optimization"
  },
  {
    title: "Building Serverless Databases with DynamoDB",
    date: "February 11, 2025",
    excerpt: "Designing scalable NoSQL databases using AWS DynamoDB and best practices.",
    slug: "dynamodb-serverless"
  },
  {
    title: "AWS S3 Security Best Practices",
    date: "February 4, 2025",
    excerpt: "Securing S3 buckets and implementing best practices for data storage.",
    slug: "s3-security-best-practices"
  },
  {
    title: "AWS VPC Design Patterns",
    date: "January 28, 2025",
    excerpt: "Designing secure and scalable VPC architectures for AWS deployments.",
    slug: "vpc-design-patterns"
  }
]

export default function AwsBlog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AWS Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my insights on AWS cloud services, architecture, and best practices.
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
                  href={`/blog/aws/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/aws/${post.slug}`}
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
