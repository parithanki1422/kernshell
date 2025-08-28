import React, { useState } from 'react'
import { useBooks } from './hooks/useBooks'
import { SearchBar } from './components/SearchBar'
import { BookCard } from './components/BookCard'
import { BookModal } from './components/BookModal'
import { Spinner } from './components/Spinner'

export default function App() {
  const { query, setQuery, books, loading, error } = useBooks('javascript')
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-600">
              📚 Book Explorer
            </h1>
            <p className="text-sm text-gray-500">Discover books via Open Library API</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="flex justify-center mb-10">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20" role="status" aria-live="polite">
            <Spinner />
            <p className="mt-4 text-gray-600 font-medium animate-pulse">Fetching books…</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-6 my-10 shadow-md">
            <p className="font-semibold text-lg">⚠️ Something went wrong</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && books.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No results found. Try another search 🔍</p>
          </div>
        )}

        {/* Books Grid */}
        {!loading && !error && books.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((b, idx) => (
              <BookCard
                key={b.key ?? idx}
                book={b}
                onClick={() => setSelected(b)}
              />
            ))}
          </section>
        )}
      </main>

      {/* Book Modal */}
      <BookModal book={selected} onClose={() => setSelected(null)} />

      {/* Footer */}
      <footer className="mt-12 py-6 bg-white border-t shadow-inner">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          Made with ❤️ using React 18 + Vite + Tailwind
        </div>
      </footer>
    </div>
  )
}
