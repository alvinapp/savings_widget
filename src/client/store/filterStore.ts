import create from 'zustand';
const useFilterStore = create((set) => ({
  itemIndex: '',
  setItemIndex: (index: any) => {
    return set((state: any) => {
      const result = {
        itemIndex: index,
      };
      return result;
    });
  },
}));
export default useFilterStore;
