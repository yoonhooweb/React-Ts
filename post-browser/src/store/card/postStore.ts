import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type PostStore = {
    currentPage: number
    limit: number
    getTotalPages: () => number
    setCurrentPages: (page: number) => void
    setLimit: (amount: number) => void
}
export const UsePostStore = create<PostStore>()(
    immer((set, get) => ({
        currentPage: 1,
        limit: 10,
        getTotalPages: () => Math.ceil(100 / get().limit),
        setCurrentPages: (page: number) => set((state) => { state.currentPage = page }),
        setLimit: (amount: number) => set((state) => { state.limit = amount })
    }))
);