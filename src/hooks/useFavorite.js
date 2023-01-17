import { create } from 'zustand'

const useFavorite = create((set) => ({
  count: 0,
  increaseFavCount: () => set((state) => ({ count: state.count + 1 }))
}));

export default useFavorite;  