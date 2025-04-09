'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'GraphQL'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Figma', 'Jira', 'Agile', 'REST APIs', 'TDD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <motion.li
                      key={skill}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
            >
              <span className="text-lg font-semibold">View Resume</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
