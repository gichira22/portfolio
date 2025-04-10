'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PrinterIcon } from '@heroicons/react/24/outline'

export default function PrintButton() {
  const [printing, setPrinting] = useState(false)

  const handlePrint = () => {
    setPrinting(true)
    window.print()
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handlePrint}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <PrinterIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
    </motion.button>
  )
}
