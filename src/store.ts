import { create } from "zustand";
import { Movie, TVShow } from "./types/types";

interface Lists {
  lists: (Movie | TVShow)[];
  setLists: (lists: any) => void;
}

export const useListsStore = create<Lists>()((set) => ({
  lists: [],
  setLists: (lists) => set({ lists }),
}));
