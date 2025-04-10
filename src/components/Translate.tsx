'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

interface TranslateProps {
  content: string
}

const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
]

export default function Translate({ content }: TranslateProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [translatedContent, setTranslatedContent] = useState(content)
  const [loading, setLoading] = useState(false)

  const handleTranslate = async (targetLanguage: string) => {
    if (targetLanguage === selectedLanguage) return

    setLoading(true)
    
    try {
      // TODO: Implement actual translation API
      // This is a mock implementation
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          sourceLanguage: selectedLanguage,
          targetLanguage,
        }),
      })

      if (!response.ok) {
        throw new Error('Translation failed')
      }

      const data = await response.json()
      setTranslatedContent(data.translatedContent)
      setSelectedLanguage(targetLanguage)
      
      toast.success('Translation successful!')
    } catch (error) {
      console.error('Translation error:', error)
      toast.error('Failed to translate')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <GlobeAltIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
          >
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleTranslate(lang.code)}
                disabled={loading || lang.code === selectedLanguage}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 ${
                  lang.code === selectedLanguage ? 'font-bold' : ''
                }`}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </motion.button>

      {translatedContent !== content && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Translation ({supportedLanguages.find((l) => l.code === selectedLanguage)?.name || 'Unknown'}):
          </p>
          <div className="prose max-w-none text-gray-900 dark:text-gray-100">
            {translatedContent}
          </div>
        </motion.div>
      )}
    </>
  )
}
