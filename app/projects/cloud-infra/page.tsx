'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CloudInfraPage() {
  return (
    <article className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/project-images/cloud.jpg"
            alt="Cloud Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Cloud Infrastructure
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
              A comprehensive cloud infrastructure solution built with AWS and Terraform. This project
              demonstrates my expertise in cloud architecture, infrastructure as code, and DevOps practices.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Multi-region high availability setup</li>
              <li>Auto-scaling infrastructure with load balancing</li>
              <li>Containerized microservices architecture</li>
              <li>CI/CD pipeline with automated testing and deployment</li>
              <li>Comprehensive monitoring and alerting system</li>
              <li>Disaster recovery and backup solutions</li>
            </ul>

            <h2>Technical Stack</h2>
            <ul>
              <li>Cloud Provider: Amazon Web Services (AWS)</li>
              <li>Infrastructure as Code: Terraform</li>
              <li>Containerization: Docker, Kubernetes</li>
              <li>CI/CD: GitHub Actions, AWS CodePipeline</li>
              <li>Monitoring: Prometheus, Grafana</li>
              <li>Security: AWS WAF, AWS Shield, AWS GuardDuty</li>
            </ul>

            <h2>Architecture Highlights</h2>
            <ul>
              <li>Multi-AZ deployment for high availability</li>
              <li>VPC with public and private subnets</li>
              <li>Auto-scaling EKS cluster for container orchestration</li>
              <li>CloudFront CDN for global content delivery</li>
              <li>S3 buckets for static assets and backups</li>
              <li>RDS with read replicas for database scaling</li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>99.99% uptime achieved</li>
              <li>40% reduction in infrastructure costs</li>
              <li>75% faster deployment times</li>
              <li>Zero downtime deployments</li>
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
              href="https://github.com/yourusername/cloud-infra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Infrastructure Code
            </a>
            <a
              href="https://architecture.yourdomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              View Architecture Diagram
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
              href="/projects/ecommerce"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Previous Project
            </Link>
            <Link
              href="/projects/security-scanner"
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
