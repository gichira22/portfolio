import { Inter, Roboto_Mono, Montserrat } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GTag from './gtag'
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A modern portfolio website showcasing my projects and skills",
  keywords: 'portfolio, developer, projects, skills, technology',
  openGraph: {
    title: 'My Portfolio',
    description: 'A modern portfolio website showcasing my projects and skills',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'My Portfolio', // updated property name
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Portfolio',
    description: 'A modern portfolio website showcasing my projects and skills',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-montserrat">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <GTag />
            <main className="flex-grow mt-16 mb-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
