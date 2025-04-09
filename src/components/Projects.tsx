'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js and Django',
    image: '/images/project-images/ecommerce.jpg',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'Stripe'],
    link: '/projects/ecommerce',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Automated cloud infrastructure deployment using Terraform and AWS',
    image: '/images/project-images/cloud.jpg',
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    link: '/projects/cloud-infra',
  },
  {
    title: 'Security Scanner',
    description: 'Web application vulnerability scanner with automated reporting',
    image: '/images/project-images/security.jpg',
    tags: ['Python', 'OWASP', 'API Security', 'Automation'],
    link: '/projects/security-scanner',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered features',
    image: '/images/project-images/ai-chat.jpg',
    tags: ['React', 'Node.js', 'WebSocket', 'OpenAI'],
    link: '/projects/ai-chat',
  },
]

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work in full-stack development, cloud computing, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.link} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-48 sm:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
