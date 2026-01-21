import { create } from "zustand";

interface Collaborator {
  id: string;
  name: string;
}

interface CollaboratorState {
  collaborators: Collaborator[];
  setCollaborators: (c: Collaborator[]) => void;
}

export const useCollaboratorStore = create<CollaboratorState>((set) => ({
  collaborators: [],
  setCollaborators: (collaborators) => set({ collaborators }),
}));
