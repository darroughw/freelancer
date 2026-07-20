import { create } from "zustand";

interface SectionStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  activeSection: "work",
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
