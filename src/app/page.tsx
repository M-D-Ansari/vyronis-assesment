"use client";

import { useState } from "react";

export default function VYRONIS() {
  const [tab, setTab] = useState<"summarize" | "translate" | "compare" | "analyze">("summarize");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [lang, setLang] = useState("English");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const callAPI = async (endpoint: string, body: any) => {
    setLoading(true);
    setResult("");
    const res = await fetch(`http://localhost:5000/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setResult(data.summary || data.translation || data.comparison || data.analysis || "No result.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e3e3e3] text-[#0f0f0f] px-6 py-12 font-sans tracking-wide">
      <div className="max-w-4xl mx-auto transition-all duration-300">
        <h1 className="text-5xl font-semibold mb-12 text-center leading-tight text-[#111]">
          VYRONIS
          <span className="block text-lg font-light mt-2 tracking-normal text-neutral-500">
            AI Companion for Space Research Teams
          </span>
        </h1>

        {/* Elite Tab Menu */}
        <div className="flex justify-center gap-3 mb-10">
          {["summarize", "translate", "compare", "analyze"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 tracking-wide text-sm backdrop-blur ${
                tab === t
                  ? "bg-black text-white shadow-xl"
                  : "bg-white/60 hover:bg-white text-gray-800 border"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Action Panels */}
        <div className="bg-white/60 border backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-all duration-300 space-y-4">
          {tab === "summarize" && (
            <>
              <textarea
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Paste your mission document here..."
                className="w-full p-5 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none min-h-[200px] transition"
              />
              <button
                onClick={() => callAPI("summarize", { text: input1 })}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-black text-white text-center font-medium hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                {loading ? "Summarizing..." : "Summarize Document"}
              </button>
            </>
          )}

          {tab === "translate" && (
            <>
              <textarea
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Enter technical content to translate"
                className="w-full p-5 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none min-h-[200px] transition"
              />
              <input
                type="text"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none"
                placeholder="Translate to (e.g., French, Hindi)"
              />
              <button
                onClick={() => callAPI("translate", { text: input1, language: lang })}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-black text-white text-center font-medium hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                {loading ? "Translating..." : "Translate Document"}
              </button>
            </>
          )}

          {tab === "compare" && (
            <>
              <textarea
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Paste Document A (e.g., Chandrayaan-3 specs)"
                className="w-full p-4 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none"
                rows={6}
              />
              <textarea
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Paste Document B (e.g., Artemis specs)"
                className="w-full p-4 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none"
                rows={6}
              />
              <button
                onClick={() => callAPI("compare", { doc1: input1, doc2: input2 })}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-black text-white text-center font-medium hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                {loading ? "Comparing..." : "Compare Documents"}
              </button>
            </>
          )}

          {tab === "analyze" && (
            <>
              <textarea
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Paste mission report or data-heavy text to analyze"
                className="w-full p-5 rounded-xl border border-gray-300 bg-white/70 focus:ring-2 focus:ring-black outline-none min-h-[200px] transition"
              />
              <button
                onClick={() => callAPI("analyze", { text: input1 })}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-black text-white text-center font-medium hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                {loading ? "Analyzing..." : "Analyze Content"}
              </button>
            </>
          )}
        </div>

        {/* Result Card */}
        {result && (
          <div className="mt-10 bg-white/80 rounded-xl border backdrop-blur-md shadow-lg p-6 text-sm text-gray-800 whitespace-pre-wrap leading-relaxed transition-all duration-300">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
