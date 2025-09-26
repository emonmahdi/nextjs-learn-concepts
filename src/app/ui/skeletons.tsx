// app/ui/skeletons.tsx
import React from "react";

export default function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="h-8 w-1/3 rounded bg-gray-200" />

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-4"
          >
            <div className="h-4 w-1/2 rounded bg-gray-200" />
            <div className="h-6 w-3/4 rounded bg-gray-200" />
            <div className="h-6 w-1/3 rounded bg-gray-200" />
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="h-10 w-full rounded-t bg-gray-100" />
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4 p-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-2/3 rounded bg-gray-200" />
                <div className="h-4 w-1/3 rounded bg-gray-200" />
              </div>
              <div className="h-6 w-16 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
