import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

// Validasi Zod (Modul 5.4 & 7.5)
export const DocumentSchema = z.object({
  title: z.string().min(3, 'Judul tugas minimal 3 karakter'),
  course: z.string().min(2, 'Mata kuliah wajib diisi'),
  priority: z.enum(['low', 'medium', 'high']),
});

export type DocumentInput = z.infer<typeof DocumentSchema>;

const mockDocuments = [
  {
    id: '1',
    title: 'Modul 1 Praktikum Web Modern',
    course: 'Pemrograman Web',
    status: 'Terverifikasi',
  },
  {
    id: '2',
    title: 'RPS Pemrograman Web Modern',
    course: 'Pemrograman Web',
    status: 'Terverifikasi',
  },
  {
    id: '3',
    title: 'Materi Kecerdasan Buatan',
    course: 'AI RAG',
    status: 'Terverifikasi',
  },
];

export const useDocumentsQuery = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: async () => mockDocuments,
    staleTime: 1000 * 60 * 5,
  });
};
