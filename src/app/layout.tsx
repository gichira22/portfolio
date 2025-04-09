import { Inter, Roboto_Mono } from 'next/font/google'
import { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Your Name - Full Stack Developer',
    template: '%s | Your Name',
  },
  description: 'Full Stack Developer specializing in modern web technologies.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'Django Developer',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
