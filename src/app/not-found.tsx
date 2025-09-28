 

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium shadow hover:bg-blue-700 transition-colors"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </p>
    </div>
  );
}
