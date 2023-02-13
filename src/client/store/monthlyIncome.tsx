import create from "zustand";
const useMonthlyIncomeStore = create((set) => ({
  currencySymbol: "₦",
  monthlyIncome: "",
  setMonthlyIncome: (amount: any) => {
    return set((state: any) => {
      const result = {
        monthlyIncome: amount,
      };
      return result;
    });
  },
}));
export default useMonthlyIncomeStore;
