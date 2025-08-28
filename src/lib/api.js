export async function searchBooks(query, { signal } = {}) {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=24`
  const res = await fetch(url, { signal })
  if (!res.ok) {
    throw new Error(`Open Library responded with ${res.status}`)
  }
  const data = await res.json()
  return data.docs ?? []
}
