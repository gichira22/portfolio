'use client'

import { useEffect } from 'react'

export default function GTag() {
  useEffect(() => {
    const gtagScript = document.createElement('script')
    gtagScript.async = true
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID'
    document.head.appendChild(gtagScript)

    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', 'YOUR_GA_ID')

    return () => {
      document.head.removeChild(gtagScript)
    }
  }, [])

  return null
}
