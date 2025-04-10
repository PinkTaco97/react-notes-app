import { create } from 'zustand';

export const useModalStore = create((set) => ({
    showDeleteModal: false,
    showEditModal: false,
    showNewNoteModal: false,
    setShowDeleteModal: (showDeleteModal) => set({ showDeleteModal }),  
    setShowEditModal: (showEditModal) => set({ showEditModal }),
    setShowNewNoteModal: (showNewNoteModal) => set({ showNewNoteModal }),
}))