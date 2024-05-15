import { create } from "zustand";

export type NoteType = {
  title: string;
  content: string;
};

type notesTypes = {
  notes: NoteType[];
  title: string;
  content: string;
  secondsOnline: number;
  setNotes: (notes: NoteType) => void;
  setTitle: (user: string) => void;
  setContent: (user: string) => void;
  setSecondsOnline: () => void;
};

export const userStore = create<notesTypes>()((set) => ({
  notes: [],
  title: '',
  content: '',
  secondsOnline: 0,
  setNotes: (note: NoteType) => set((state) => ({ notes: [...state.notes, note] })),
  setTitle: (title: string) => set({ title }),
  setContent: (content: string) => set({ content }),
  setSecondsOnline: () => set((state) => ({ secondsOnline: state.secondsOnline + 1 })),
}));
