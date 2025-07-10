'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, input.trim()]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      {open ? (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-72 flex flex-col h-80">
          <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="font-semibold">Chat</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-red-500">
              &times;
            </button>
          </div>
          <div className="flex-grow p-2 overflow-y-auto space-y-2">
            {messages.length === 0 && (
              <p className="text-gray-500">How can we help?</p>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className="self-end max-w-full">
                <div className="bg-emerald-500 text-white p-2 rounded-md break-words">
                  {msg}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-2 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="p-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 shadow-lg hover:scale-105 transition"
        >
          Chat
        </button>
      )}
    </div>
  );
}
