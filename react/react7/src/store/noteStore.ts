import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


//Types


export interface Note {
  id: string;
  text: string;
}

export interface HistoryEntry {
  noteId: string;
  action: "add" | "update" | "delete";
  timestamp: number;
}

export interface NoteState {
  notes: Note[];
  history: HistoryEntry[];

  addNote: (note: Note) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;

  addHistoryEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
}

//Logging Middleware (typed)


const logMiddleware =
  <T extends object>(
    config: (
      set: (fn: (state: T) => void) => void,
      get: () => T
    ) => T
  ) =>
  (set: any, get: any) =>
    config(
      (fn) => {
        console.log("Before:", get());
        set(fn);
        console.log("After:", get());
      },
      get
    );

//Store


export const useNoteStore = create<NoteState>()(
  devtools(
    immer(
      logMiddleware<NoteState>((set) => ({
        notes: [],
        history: [],

        addNote: (note: Note) =>
          set((state: NoteState) => {
            state.notes.push(note);
            state.history.push({
              noteId: note.id,
              action: "add",
              timestamp: Date.now(),
            });
          }),

        updateNote: (id: string, text: string) =>
          set((state: NoteState) => {
            const note = state.notes.find((n) => n.id === id);
            if (note) {
              note.text = text;
              state.history.push({
                noteId: id,
                action: "update",
                timestamp: Date.now(),
              });
            }
          }),

        deleteNote: (id: string) =>
          set((state: NoteState) => {
            state.notes = state.notes.filter((n) => n.id !== id);
            state.history.push({
              noteId: id,
              action: "delete",
              timestamp: Date.now(),
            });
          }),

        addHistoryEntry: (entry: HistoryEntry) =>
          set((state: NoteState) => {
            state.history.push(entry);
          }),

        clearHistory: () =>
          set((state: NoteState) => {
            state.history = [];
          }),
      }))
    )
  )
);
