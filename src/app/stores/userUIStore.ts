import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  selectedCategory: string;
  themeMode: 'light' | 'dark';
  toggleSidebar: () => void;
  setSelectedCategory: (category: string) => void;
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  selectedCategory: 'All',
  themeMode: 'light',
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    })),
}));
