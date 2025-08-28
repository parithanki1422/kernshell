import { useEffect, useRef, useState } from 'react'
import { searchBooks } from '../lib/api'

export function useBooks(defaultQuery = 'javascript') {
  const [query, setQuery] = useState(defaultQuery)
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  useEffect(() => {
    // Debounce input by 400ms
    const handle = setTimeout(async () => {
      if (abortRef.current) {
        abortRef.current.abort()
      }
      const controller = new AbortController()
      abortRef.current = controller
      setLoading(true)
      setError(null)
      try {
        const results = await searchBooks(query.trim() || 'javascript', {
          signal: controller.signal,
        })
        setBooks(results)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch books')
          setBooks([])
        }
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(handle)
  }, [query])

  return { query, setQuery, books, loading, error }
}
