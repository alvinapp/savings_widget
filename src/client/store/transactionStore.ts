import create from "zustand";

import Transaction from "client/models/Goal";

const useTransactionStore = create((set) => ({
  transactions: [],
  filteredTransactions: [],
  loading: false,
  loaded: false,
  filterLoading: false,
  filterLoaded: false,
  init: (transactions: Transaction[]) => {
    return set((state: any) => {
      const results = {
        transactions: transactions,
      };

      return results;
    });
  },
  setTransactionLoading: (loading: boolean) => {
    return set((state: any) => {
      const results = {
        loading: loading,
      };

      return results;
    });
  },
  setTransactionLoaded: (loaded: boolean) => {
    return set((state: any) => {
      const results = {
        loaded: loaded,
      };

      return results;
    });
  },
  setFilteredTransactions: (transactions: Transaction[]) => {
    return set((state: any) => {
      const results = {
        filteredTransactions: transactions,
      };

      return results;
    });
  },
  setFilterLoading: (loading: boolean) => {
    return set((state: any) => {
      const results = {
        filterLoading: loading,
      };

      return results;
    });
  },
  setFilterLoaded: (loaded: boolean) => {
    return set((state: any) => {
      const results = {
        filterLoaded: loaded,
      };

      return results;
    });
  },
}));
export default useTransactionStore;
