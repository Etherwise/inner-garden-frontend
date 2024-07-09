import { create } from 'zustand';

const useHeaderFilters = create((set) => ({
  activeFilter: {id: 0, name: "Gardens"},
  setActiveFilter: (id, name) => set((state) => ({ activeFilter: {id, name} })),
}));

export default useHeaderFilters;