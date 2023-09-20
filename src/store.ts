import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreID: (genreID) =>
    set((currentState) => ({
      gameQuery: { ...currentState.gameQuery, genreID },
    })),
  setPlatformID: (platformID) =>
    set((currentState) => ({
      gameQuery: { ...currentState.gameQuery, platformID },
    })),
  setSortOrder: (sortOrder) =>
    set((currentState) => ({
      gameQuery: { ...currentState.gameQuery, sortOrder },
    })),
}));

export default useGameQueryStore;
