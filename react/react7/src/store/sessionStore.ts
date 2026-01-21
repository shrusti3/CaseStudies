import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SessionState {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: "admin" | "user";

  setSession: (
    userId: string,
    token: string,
    expiresAt: number
  ) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      userId: null,
      token: null,
      expiresAt: null,
      role: "user",

      setSession: (userId, token, expiresAt) =>
        set({ userId, token, expiresAt }),

      clearSession: () =>
        set({ userId: null, token: null, expiresAt: null }),
    }),
    {
      name: "collabnotes-session",
      storage: createJSONStorage(() => localStorage),

      // persist only safe data
      partialize: (state) => ({
        userId: state.userId,
        token: state.token,
        role: state.role,
      }),

      version: 2,
      migrate: (persisted: any, version) => {
        if (version < 2) {
          return { ...persisted, role: "user" };
        }
        return persisted;
      },
    }
  )
);
