'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Skill {
  name: string
  level: number
  category: string
  color: string
}

const skills: Skill[] = [
  {
    name: 'Next.js',
    level: 90,
    category: 'Frontend',
    color: '#000000',
  },
  {
    name: 'React',
    level: 95,
    category: 'Frontend',
    color: '#61DAFB',
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'Programming',
    color: '#3178C6',
  },
  {
    name: 'Python',
    level: 90,
    category: 'Programming',
    color: '#3776AB',
  },
  {
    name: 'Django',
    level: 85,
    category: 'Backend',
    color: '#092E20',
  },
  {
    name: 'AWS',
    level: 80,
    category: 'Cloud',
    color: '#232F3E',
  },
  {
    name: 'Cybersecurity',
    level: 85,
    category: 'Security',
    color: '#0073CF',
  },
  {
    name: 'Machine Learning',
    level: 75,
    category: 'AI/ML',
    color: '#FF6F00',
  },
]

const categories = Array.from(new Set(skills.map((s) => s.category)))

export default function Skills() {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const chartData = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        data: skills.map((s) => s.level),
        backgroundColor: skills.map((s) => s.color),
        borderColor: skills.map((s) => s.color),
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skill Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Skill Overview</h3>
          <div className="h-[400px]">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Skill Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Skill Categories</h3>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-2">
                  {category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skill.name.length * 0.1 }}
                        className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <h5 className="font-medium mb-1">{skill.name}</h5>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              skill.level > 80
                                ? 'bg-green-500'
                                : skill.level > 60
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {skill.level}%
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
