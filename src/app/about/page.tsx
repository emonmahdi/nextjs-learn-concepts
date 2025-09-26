"use client";

import { useState, useMemo } from "react";
import { products } from "../data/products";

export default function AboutPage() {
  // 🔎 Search State
  const [searchTerm, setSearchTerm] = useState("");
  
  // 📄 Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // প্রতি পেজে ৫টি প্রোডাক্ট দেখাবো

  // 🔎 Filter করা ডাটা
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // 🔢 Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // ⏭️ Next / Prev ফাংশন
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🔎 Search & Pagination</h1>

      {/* 🔎 Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="প্রোডাক্ট সার্চ করুন..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // নতুন সার্চে পেজ রিসেট
          }}
          className="w-full max-w-md rounded-lg border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* 🟩 Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.length > 0 ? (
          currentItems.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border bg-white p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            ⚠️ কোন প্রোডাক্ট পাওয়া যায়নি!
          </p>
        )}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="rounded-lg border bg-white px-4 py-2 shadow hover:bg-gray-100 disabled:opacity-50"
          >
            ⬅️ Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`rounded-lg px-4 py-2 shadow ${
                currentPage === idx + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="rounded-lg border bg-white px-4 py-2 shadow hover:bg-gray-100 disabled:opacity-50"
          >
            Next ➡️
          </button>
        </div>
      )}
    </div>
  );
}
