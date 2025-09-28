"use client";

import React, { useState } from "react";

export default function DashboardPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // ❗ Throwing during render will be caught by error.tsx
    throw new Error("Dashboard failed to load data!");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700">Dashboard Page</h1>
      <button
        onClick={() => setShouldError(true)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Trigger Error
      </button>
    </div>
  );
}
