'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'c' || e.key === 'C' || e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Replace the src with your actual resume PDF URL */}
          <iframe
            src="https://docs.google.com/document/d/YOUR_DOCUMENT_ID/preview"
            className="w-full h-[calc(100vh-8rem)] pointer-events-none"
            title="Resume"
          />
        </div>
        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          This document is protected. You can view it but cannot copy, download, or print.
        </div>
      </div>
    </div>
  )
}
