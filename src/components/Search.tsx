'use client'

import { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { Search } from '@algolia/autocomplete-js'
import { SearchBox } from '@algolia/autocomplete-theme-classic'

interface SearchProps {
  placeholder?: string
  className?: string
}

export default function Search({ placeholder = 'Search articles...', className = '' }: SearchProps) {
  const [searchClient] = useState(() =>
    algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_ONLY_API_KEY')
  )

  const [search, setSearch] = useState('')

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error('Search failed')
      }

      const results = await response.json()
      setSearch(results)
    } catch (error) {
      console.error('Search error:', error)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <SearchBox
        searchClient={searchClient}
        indexName="posts"
        placeholder={placeholder}
        className="w-full"
        onSearch={handleSearch}
      />
      {search.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 max-h-96 overflow-y-auto">
          {search.map((result: any) => (
            <Link
              key={result.objectID}
              href={`/blog/${result.category}/${result.slug}`}
              className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">{result.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {result.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
