import create from "zustand";

const useCurrencyStore = create((set) => ({
  currency: "₦",
  setCurrency: (curr: any) => {
    return set(() => {
      const result = {
        currency: curr,
      };
      return result;
    });
  },
}));
export default useCurrencyStore;
