import { create } from "zustand";

export type NoteType = {
  title: string;
  content: string;
};

type NotesTypes = {
  notes: NoteType[];
  setNotes: (notes: NoteType) => void;
  setNotesArray: (notes: NoteType[]) => void;
  title: string;
  setTitle: (user: string) => void;
  content: string;
  setContent: (user: string) => void;
  secondsOnline: number;
  setSecondsOnline: () => void;
};

export const userStore = create<NotesTypes>()((set) => ({
  notes: [],
  setNotes: (note: NoteType) => set((state) => ({ notes: [...state.notes, note] })),
  setNotesArray: (notes: NoteType[]) => set({ notes }),
  title: '',
  setTitle: (title: string) => set({ title }),
  content: '',
  setContent: (content: string) => set({ content }),
  secondsOnline: 0,
  setSecondsOnline: () => set((state) => ({ secondsOnline: state.secondsOnline + 1 })),
}));
