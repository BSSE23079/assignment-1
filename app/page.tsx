"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { quotes, Quote } from "./quotes";

export default function Home() {
  // State to store the user's topic input
  const [topic, setTopic] = useState("");
  // State to store the filtered quotes
  const [results, setResults] = useState<Quote[]>([]);
  // State to track if the form has been submitted at least once
  const [touched, setTouched] = useState(false);

  // Handle form submission: filter quotes by topic and update results
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setTouched(true); // Mark that the user has submitted the form
    // Filter quotes by topic (case-insensitive, partial match)
    const filtered = quotes.filter((q) =>
      q.topic.toLowerCase().includes(topic.toLowerCase())
    );
    // Only show up to 3 quotes
    setResults(filtered.slice(0, 3));
  };

  // Main UI rendering
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      {/* Main card container for the app */}
      <div className="w-full max-w-lg bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-slate-200 dark:border-slate-800">
        {/* App title with gradient text */}
        <h1 className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Quote Generator
        </h1>
        {/* Subtitle */}
        <p className="mb-8 text-slate-600 dark:text-slate-300 text-center">
          Enter a topic to get inspired by 3 beautiful quotes!
        </p>
        {/* Topic input form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="relative w-full">
            <Input
              placeholder="Type business, coding, or fail..."
              value={topic}
              onChange={e => setTopic(e.target.value)}
              className="rounded-xl border-2 border-pink-400 focus:border-blue-500 focus:ring-2 focus:ring-pink-200 dark:border-pink-800 dark:focus:border-blue-400 dark:focus:ring-blue-900 transition pl-12 text-lg shadow-md bg-white/90 dark:bg-slate-900/80"
              autoFocus
            />
            {/* Icon inside input */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 dark:text-pink-300 text-xl pointer-events-none">
              💡
            </span>
          </div>
          <Button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-pink-600 transition-all py-2 text-lg"
          >
            Get Quotes
          </Button>
        </form>
        {/* Display results or a message if no quotes found */}
        <div className="mt-10 w-full flex flex-col gap-6">
          {results.length > 0
            ? // Render each quote in a beautiful card
              results.map((quote, idx) => (
                <Card
                  key={idx}
                  className="rounded-xl shadow-lg border-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
                >
                  <CardContent className="p-6 flex flex-col gap-2">
                    <p className="text-xl italic text-slate-700 dark:text-slate-200">
                      “{quote.text}”
                    </p>
                    <p className="text-right mt-2 font-bold text-blue-600 dark:text-blue-300">
                      - {quote.author}
                    </p>
                  </CardContent>
                </Card>
              ))
            : // Show a message only after the user has tried searching
              touched && (
                <p className="text-center text-slate-400 dark:text-slate-500">
                  No quotes found. Try another topic!
                </p>
              )}
        </div>
      </div>
      {/* Footer with copyright */}
      <footer className="mt-10 text-slate-400 dark:text-slate-600 text-xs text-center">
        &copy; {new Date().getFullYear()} Quote Generator. Powered by Next.js &
        ShadCN UI.
      </footer>
    </div>
  );
}
