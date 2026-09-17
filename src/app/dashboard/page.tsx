// src/app/dashboard/page.tsx
'use client';

import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/dashboard" className="text-xl font-bold text-blue-600">
            EduMate AI
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm font-medium text-blue-600">
              Dashboard
            </Link>

            <Link
              to="/chat"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Chat AI
            </Link>

            <Link
              to="/history"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Riwayat
            </Link>

            <Link
              to="/upload"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Upload
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Selamat Datang di EduMate AI 👋
          </h1>

          <p className="mt-2 text-slate-600">
            AI Learning Companion untuk membantu proses belajar mahasiswa.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Chat AI */}
          <Link
            to="/chat"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              💬
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              Chat dengan AI
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ajukan pertanyaan seputar materi pembelajaran dan dapatkan jawaban
              dari AI.
            </p>

            <div className="mt-4 text-sm font-medium text-blue-600">
              Mulai Chat →
            </div>
          </Link>

          {/* Upload */}
          <Link
            to="/upload"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              📚
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              Materi Pembelajaran
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Kelola dan tambahkan sumber materi pembelajaran untuk digunakan
              oleh sistem AI.
            </p>

            <div className="mt-4 text-sm font-medium text-orange-600">
              Kelola Materi →
            </div>
          </Link>

          {/* History */}
          <Link
            to="/history"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              🕘
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              Riwayat Chat
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Lihat kembali percakapan dan pertanyaan yang pernah dilakukan
              sebelumnya.
            </p>

            <div className="mt-4 text-sm font-medium text-green-600">
              Lihat Riwayat →
            </div>
          </Link>
        </div>

        {/* Information */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Tentang EduMate AI
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            EduMate AI merupakan AI Learning Companion yang dirancang untuk
            membantu mahasiswa memahami materi pembelajaran dengan memanfaatkan
            teknologi Large Language Model (LLM), Retrieval Augmented Generation
            (RAG), dan Vector Database.
          </p>
        </div>
      </section>
    </main>
  );
}
