import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            Full Stack Developer specializing in modern web technologies
          </p>
          
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link 
              href="/about"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
            >
              About Me
            </Link>
            <Link 
              href="/projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
            >
              Projects
            </Link>
            <Link 
              href="/skills"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
            >
              Skills
            </Link>
            <Link 
              href="/blog"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-center"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
