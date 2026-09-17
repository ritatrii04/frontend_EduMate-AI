// src/app/history/page.tsx
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HistoryPage() {
  const [historyItems, setHistoryItems] = useState([
    {
      id: 1,
      topic: 'HTML5 Semantik & Tag Utama',
      date: '15 September 2026',
      match: '95%',
      source: 'Modul 1 Praktikum Front-End UNS',
      question: 'Apa itu HTML5 Semantik dan contoh tag-nya?',
    },
    {
      id: 2,
      topic: 'Penerapan Zustand State Management',
      date: '14 September 2026',
      match: '98%',
      source: 'Laporan Modul 7 EduMate AI',
      question: 'Bagaimana cara memisahkan UI state dengan Zustand?',
    },
  ]);

  const handleClearHistory = () => {
    if (
      confirm('Apakah Anda yakin ingin menghapus seluruh riwayat percakapan?')
    ) {
      setHistoryItems([]);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      {/* Header Semantik */}
      <header className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              EM
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">EduMate AI</h1>
              <p className="text-xs text-slate-400">
                Riwayat & Log Hasil Pembelajaran
              </p>
            </div>
          </div>

          <nav aria-label="Navigasi Utama">
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <Link
                  to="/chat"
                  className="text-slate-300 hover:text-white transition"
                >
                  Tanya-Jawab AI
                </Link>
              </li>

              <li>
                <Link
                  to="/upload"
                  className="text-slate-300 hover:text-white transition"
                >
                  Unggah RPS/Modul
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className="text-blue-400 font-semibold"
                  aria-current="page"
                >
                  Riwayat Chat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 flex-1 w-full">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              Riwayat Percakapan Mahasiswa
            </h2>

            <button
              type="button"
              id="btn-clear-history"
              onClick={handleClearHistory}
              className="text-xs bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-lg cursor-pointer transition"
            >
              🗑️ Hapus Riwayat
            </button>
          </div>

          <div id="history-container" className="space-y-4">
            {historyItems.length > 0 ? (
              historyItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 hover:border-blue-300 transition"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-blue-600">
                      {item.topic}
                    </span>

                    <span className="text-slate-400">{item.date}</span>
                  </div>

                  <p className="text-sm font-medium text-slate-800">
                    "{item.question}"
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    <span>Sumber: {item.source}</span>

                    <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                      Match: {item.match}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400 text-xs">
                Belum ada riwayat percakapan tersimpan.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer Semantik */}
      <footer
        className="bg-slate-900 text-slate-400 text-xs py-4 text-center border-t border-slate-800"
        role="contentinfo"
      >
        <p>
          &copy; 2026 EduMate AI - SKPL Version 1.0. Program Studi D3 Teknik
          Informatika SV UNS Madiun.
        </p>
      </footer>
    </div>
  );
}
