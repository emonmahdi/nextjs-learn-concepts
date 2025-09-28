"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught by error.tsx:", error);
  }, [error]);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ color: "red" }}>⚠️ Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: 20,
          padding: "8px 16px",
          background: "blue",
          color: "white",
          borderRadius: 8,
        }}
      >
        🔄 Try Again
      </button>
    </div>
  );
}
