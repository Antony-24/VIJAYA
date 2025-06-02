import React from "react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-10">
      <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
        <button
          className="px-3 py-1 border border-gray-300 bg-white text-gray-500 rounded-l hover:bg-gray-100"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 ${
              currentPage === i + 1 ? "font-semibold" : "hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border border-gray-300 bg-white text-gray-500 rounded-r hover:bg-gray-100"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </nav>
    </div>
  );
}
