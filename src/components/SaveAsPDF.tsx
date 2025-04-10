'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import { DownloadIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

interface SaveAsPDFProps {
  title: string
  content: string
  author: string
  date: string
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  author: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 30,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
})

export default function SaveAsPDF({ title, content, author, date }: SaveAsPDFProps) {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    setLoading(true)

    try {
      // Create PDF document
      const doc = (
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.content}>{content}</Text>
            </View>
          </Page>
        </Document>
      )

      // Generate PDF
      const blob = await doc
      const url = window.URL.createObjectURL(blob)
      const filename = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`

      // Download PDF
      saveAs(url, filename)
      
      toast.success('PDF downloaded successfully!')
    } catch (error) {
      console.error('Failed to generate PDF:', error)
      toast.error('Failed to generate PDF')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      disabled={loading}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <DownloadIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </motion.button>
  )
}
