// src/app/login/page.tsx
'use client';

import { Link } from 'react-router-dom';

export default function LoginPage() {
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

      {/* Main Content Login */}
      <main className="max-w-md w-full mx-auto p-4 my-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-6 text-center space-y-1">
            <h2 className="text-xl font-bold text-slate-900">
              Selamat Datang Kembali
            </h2>
            <p className="text-xs text-slate-500">
              Silakan masuk ke akun EduMate AI kamu
            </p>
          </div>

          <form action="/dashboard" method="GET" className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Email / Username <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="username"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Masukkan email atau username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                id="password"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Masukkan password"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-600 text-[11px]">Ingat saya</span>
              </label>

              <Link
                to="/login"
                className="text-blue-600 font-medium text-[11px] hover:underline"
              >
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-xs transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Masuk ke Dashboard</span> 🚀
            </button>
          </form>

          <div className="relative my-6 flex items-center justify-center">
            <div className="border-t border-slate-200 w-full"></div>
            <span className="bg-white px-3 text-[10px] text-slate-400 absolute">
              atau
            </span>
          </div>

          <Link
            to="/dashboard"
            className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>🔴</span> Masuk dengan Google
          </Link>

          <p className="text-center text-xs text-slate-500 mt-6">
            Belum punya akun?{' '}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Semantik */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-4 text-center border-t border-slate-800">
        <p>
          &copy; 2026 D3 Teknik Informatika Sekolah Vokasi UNS. Modul Praktikum
          Pemrograman Web Modern.
        </p>
      </footer>
    </div>
  );
}
