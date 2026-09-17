// src/app/upload/page.tsx
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'RPS',
    course: '',
    file: null as File | null,
  });

  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const [uploadedList, setUploadedList] = useState([
    {
      id: 1,
      title: 'Modul 1 SDLC Waterfall 2026',
      type: 'Modul',
      course: 'Manpro TI',
      status: 'Indexed',
    },
    {
      id: 2,
      title: 'RPS Pemrograman Web Modern',
      type: 'RPS',
      course: 'Praktikum Web',
      status: 'Indexed',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.course.trim()) {
      setStatusMessage({
        text: 'Gagal! Harap isi seluruh kolom formulir wajib.',
        type: 'error',
      });
      return;
    }

    // Simulasi penambahan dokumen ke Vector Database
    const newDoc = {
      id: Date.now(),
      title: formData.title,
      type: formData.type,
      course: formData.course,
      status: 'Indexed',
    };

    setUploadedList([newDoc, ...uploadedList]);
    setStatusMessage({
      text: 'Berhasil! Dokumen telah diekstraksi dan dikonversi ke Vector Embeddings.',
      type: 'success',
    });

    // Reset Form Input
    setFormData({
      title: '',
      type: 'RPS',
      course: '',
      file: null,
    });
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
                Portal Pengelolaan Dokumen Dosen
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
                  className="text-blue-400 font-semibold"
                  aria-current="page"
                >
                  Unggah RPS/Modul
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className="text-slate-300 hover:text-white transition"
                >
                  Riwayat Chat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Form Utama Unggah Dokumen */}
      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        <section
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
          aria-labelledby="upload-heading"
        >
          <h2
            id="upload-heading"
            className="text-lg font-bold text-slate-900 mb-2 border-b pb-2"
          >
            Unggah Sumber Pembelajaran Baru
          </h2>

          <p className="text-xs text-slate-500 mb-6">
            Dokumen yang diunggah akan diekstraksi teksnya dan dikonversi
            menjadi Vector Embeddings untuk basis pengetahuan RAG.
          </p>

          <form id="upload-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="doc-title"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Judul Dokumen <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="doc-title"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm focus:outline-none"
                placeholder="Misal: Modul 1 SDLC Waterfall 2026"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="doc-type"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Jenis Dokumen
                </label>

                <select
                  id="doc-type"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm focus:outline-none"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option value="RPS">
                    RPS (Rencana Pembelajaran Semester)
                  </option>
                  <option value="Modul">Modul Praktikum</option>
                  <option value="Jurnal">Jurnal / Artikel Ilmiah</option>
                  <option value="Buku">Buku Teks Utama</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="doc-course"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Mata Kuliah
                </label>

                <input
                  type="text"
                  id="doc-course"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm focus:outline-none"
                  placeholder="Misal: Manpro TI / Praktikum Web"
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="doc-file"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Pilih Berkas File (PDF/DOCX)
              </label>

              <input
                type="file"
                id="doc-file"
                accept=".pdf,.docx,.txt"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    file: e.target.files?.[0] || null,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition cursor-pointer"
            >
              Mulai Indexing ke Vector Database ⚡
            </button>
          </form>

          {statusMessage && (
            <div
              className={`mt-4 p-3 rounded-lg text-xs ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
              role="status"
              aria-live="polite"
            >
              {statusMessage.text}
            </div>
          )}
        </section>

        {/* Daftar Dokumen Ter-index */}
        <section className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4">
            Dokumen yang Telah Di-Index dalam Vector DB
          </h3>

          <div id="uploaded-list" className="space-y-2">
            {uploadedList.map((doc) => (
              <div
                key={doc.id}
                className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center text-xs"
              >
                <div>
                  <p className="font-semibold text-slate-900">{doc.title}</p>
                  <p className="text-slate-500 text-[11px]">
                    Mata Kuliah: {doc.course} • Status: {doc.status}
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-blue-200">
                  {doc.type}
                </span>
              </div>
            ))}
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
