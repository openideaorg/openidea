'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend service
    setSubmitted(true);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto" aria-label="Send us feedback">
      <textarea
        className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
        rows={5}
        value={message}
        placeholder="Share your thoughts..."
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition"
        >
          Submit
        </button>
      </div>
      {submitted && (
        <p className="mt-4 text-emerald-500">Thank you for your feedback!</p>
      )}
    </form>
  );
}
