import React from "react";

export function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          id="search"
          type="text"
          className="w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     shadow-sm transition duration-200 text-gray-700 placeholder-gray-400"
          placeholder="🔍 Search books by title, author, or subject…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
