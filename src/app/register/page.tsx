// src/app/register/page.tsx
'use client';

import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      {/* Header Semantik */}
      <header className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl tracking-wider">
              EM
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">EduMate AI</h1>
              <p className="text-xs text-slate-400">
                AI Learning Companion RAG - SV UNS
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="text-xs text-slate-300 hover:text-white transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Main Content Register */}
      <main className="max-w-md w-full mx-auto p-4 my-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-6 text-center space-y-1">
            <h2 className="text-xl font-bold text-slate-900">Buat Akun Baru</h2>
            <p className="text-xs text-slate-500">
              Bergabung untuk mengakses asisten pembelajaran RAG
            </p>
          </div>

          <form action="/login" method="GET" className="space-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="fullname"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Contoh: Zam Zam Zahrina"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Email Mahasiswa <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="nama@student.uns.ac.id"
              />
            </div>

            <div>
              <label
                htmlFor="reg-password"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                id="reg-password"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Minimal 8 karakter"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Konfirmasi Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                id="confirm-password"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ulangi password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-xs transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Daftar Akun</span> ➔
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            Sudah punya akun?{' '}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Semantik */}
      <footer
        className="bg-slate-900 text-slate-400 text-xs py-4 text-center border-t border-slate-800"
        role="contentinfo"
      >
        <p>
          &copy; 2026 D3 Teknik Informatika Sekolah Vokasi UNS. Modul Praktikum
          Pemrograman Web Modern.
        </p>
      </footer>
    </div>
  );
}
