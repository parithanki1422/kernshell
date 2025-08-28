import React, { useEffect } from "react";

function Row({ label, children }) {
  return (
    <div className="flex gap-3 py-1">
      <div className="w-36 shrink-0 text-sm font-medium text-gray-600">{label}</div>
      <div className="text-sm text-gray-800">{children}</div>
    </div>
  );
}

export function BookModal({ book, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (book) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [book, onClose]);

  if (!book) return null;

  const title = book.title ?? "Untitled";
  const authors = book.author_name?.join(", ") || "Unknown";
  const year = book.first_publish_year ?? "—";
  const publishers = book.publisher?.slice(0, 5).join(", ") || "—";
  const editions = book.edition_count ?? "—";
  const subjects = book.subject?.slice(0, 6).join(", ") || "—";
  const languages = book.language?.join(", ") || "—";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/300x400?text=No+Cover";

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-indigo-600">{title}</h2>
          <button
            className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={onClose}
            aria-label="Close details"
            title="Close"
          >
            X 
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col md:flex-row gap-6 max-h-[80vh] overflow-y-auto">
          {/* Book Cover */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={coverUrl}
              alt={title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="flex-1">
            <Row label="Author(s)">{authors}</Row>
            <Row label="First publish year">{year}</Row>
            <Row label="Publisher(s)">{publishers}</Row>
            <Row label="Editions">{editions}</Row>
            <Row label="Subjects">{subjects}</Row>
            <Row label="Languages">{languages}</Row>
          </div>
        </div>
      </div>
    </div>
  );
}
