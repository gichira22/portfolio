import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Your Name - Full Stack Developer',
  description: 'Welcome to my portfolio. I specialize in building modern web applications using React, Next.js, Python, and Django.',
}

export default function Home() {
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
        <div />
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center sm:text-left">
            Full Stack Developer
          </h1>
          <p className="text-lg/8 text-black/60 dark:text-white/50 text-center sm:text-left">
            Building modern web applications with React, Next.js, Python, and Django.
          </p>
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono">
            <li>Cloud Computing</li>
            <li>Cybersecurity</li>
            <li>
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
                AI/ML Integration
              </code>
            </li>
          </ol>
        </div>
        <div />
      </div>
    </main>
  )
}
