import React from 'react'

function formatAuthors(arr) {
  if (!arr || arr.length === 0) return 'Unknown author'
  if (arr.length === 1) return arr[0]
  if (arr.length === 2) return arr.join(' & ')
  return arr.slice(0, 3).join(', ') + (arr.length > 3 ? '…' : '')
}

export function BookCard({ book, onClick }) {
  const title = book.title ?? 'Untitled'
  const authors = formatAuthors(book.author_name)
  const year = book.first_publish_year ?? '—'

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150?text=No+Cover"; // fallback image

  return (
    <button
      className="text-left bg-white rounded-2xl border border-gray-200 p-4 hover:shadow transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label={`Open details for ${title}`}
    >
      <div className="aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-3 grid place-items-center text-gray-500 text-sm">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
      </div>
      <h3 className="font-semibold leading-snug line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-1">{authors}</p>
      <p className="text-xs text-gray-500 mt-1">First published: {year}</p>
    </button>
  )
}
