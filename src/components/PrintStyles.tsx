'use client'

import { useEffect } from 'react'

export default function PrintStyles() {
  useEffect(() => {
    const printStyles = `
      @media print {
        body {
          background: white !important;
          color: black !important;
        }
        
        .dark {
          background: white !important;
          color: black !important;
        }

        .dark * {
          background: white !important;
          color: black !important;
        }

        .prose {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .dark .prose {
          background: white !important;
          color: black !important;
        }

        .dark .prose * {
          background: white !important;
          color: black !important;
        }

        .container {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .fixed {
          display: none !important;
        }

        .hidden-print {
          display: none !important;
        }

        .print-only {
          display: block !important;
        }

        .print-only-inline {
          display: inline !important;
        }

        .print-only-inline-block {
          display: inline-block !important;
        }

        .print-only-flex {
          display: flex !important;
        }

        .print-only-grid {
          display: grid !important;
        }

        .print-only-table {
          display: table !important;
        }

        .print-only-table-row {
          display: table-row !important;
        }

        .print-only-table-cell {
          display: table-cell !important;
        }

        .print-only-block {
          display: block !important;
        }

        .print-only-inline {
          display: inline !important;
        }

        .print-only-none {
          display: none !important;
        }

        .print-only-flex {
          display: flex !important;
        }

        .print-only-grid {
          display: grid !important;
        }

        .print-only-table {
          display: table !important;
        }

        .print-only-table-row {
          display: table-row !important;
        }

        .print-only-table-cell {
          display: table-cell !important;
        }

        .print-only-block {
          display: block !important;
        }

        .print-only-inline {
          display: inline !important;
        }

        .print-only-none {
          display: none !important;
        }

        .print-only-flex {
          display: flex !important;
        }

        .print-only-grid {
          display: grid !important;
        }

        .print-only-table {
          display: table !important;
        }

        .print-only-table-row {
          display: table-row !important;
        }

        .print-only-table-cell {
          display: table-cell !important;
        }

        .print-only-block {
          display: block !important;
        }

        .print-only-inline {
          display: inline !important;
        }

        .print-only-none {
          display: none !important;
        }
      }
    `

    const style = document.createElement('style')
    style.textContent = printStyles
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
