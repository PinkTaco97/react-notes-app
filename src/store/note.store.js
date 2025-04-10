import { create } from 'zustand';

export const useNoteStore = create((set) => ({
    currentNote: null,
    loading: true,
    error: null,
    notes: [],
    setCurrentNote: (currentNote) => set({ currentNote }),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ loading }),
    setNotes: (notes) => set({ notes }),
}))