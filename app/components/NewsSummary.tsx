"use client";
import { useEffect, useState } from "react";

export default function NewsSummary({ id }: { id: string }) {
    interface NewsItem {
        title: string;
        description?: string;
        link: string;
    }
    const [news, setNews] = useState<NewsItem[]>([]);
    const [summary, setSummary] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Fetch news headlines
    useEffect(() => {
        fetch(`/api/news/${id}`)
            .then((res) => res.json())
            .then((data) => setNews(data.results || []))
            .catch(() => setError("Failed to load news."));
    }, [id]);

    // Trigger summarization once news is loaded
    useEffect(() => {
        if (!news.length) return;

        const combined = news
            .slice(0, 5)
            .map((n) => `- ${n.description}`)
            .join("\n");

        console.log("🧠 Summary input:", combined);

        fetch("/api/summary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: combined }),
        })
            .then((res) => res.json())
            .then((data) => setSummary(data.summary || null))
            .catch(() => setSummary(null));
    }, [news]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!news.length) return <p className="text-gray-500">No recent news.</p>;

    return (
        <div className="mt-10">
            {summary && (
                <div className="mb-6 p-4 bg-slate-800 border border-blue-600 rounded shadow-sm">
                    <h3 className="font-semibold text-sm text-slate-200 mb-1">AI Summary</h3>
                    <p className="text-sm text-slate-300">{summary}</p>
                </div>
            )}

            <h2 className="text-lg font-semibold text-slate-100 mb-2">Recent News</h2>
            <ul className="space-y-2 text-sm">
                {news.slice(0, 5).map((item, i) => (
                    <li key={i}>
                        <a
                            href={item.link}
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
