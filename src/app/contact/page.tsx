"use client";

import { useActionState } from "react"; 
import { submitContactForm } from "../actions";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    message: "",
    success: false,
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        যোগাযোগ ফর্ম
      </h1>

      <form action={formAction} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="নাম"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="ইমেইল"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 rounded text-white font-semibold ${
            isPending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isPending ? "⏳ সাবমিট হচ্ছে..." : "সাবমিট"}
        </button>
      </form>

      {state.message && (
        <p
          className={`mt-4 text-center font-medium ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
