import create from "zustand";

import Account from "client/models/Account";

const useSavingsTriggerStore = create((set) => ({
  percentage: 1,
  merchant_name: "All merchants",
  goal_id: 0,
  merchants_dataset: [
    "All merchants",
    "Groceries",
    "Shopping",
    "Eating out",
    "Transportation",
    "Utilities",
    "Health care",
    "Entertainment",
    "Travel",
    "Bills & Fees",
    "Personal care",
    "Home improvement",
    "Charity",
    "Cash withdrawals",
    "Restaurants",
    "Fast food",
  ],
  allSavingsTriggers: [],
  setAllSavingsTriggers: (triggers: any) => {
    return set(() => {
      const results = {
        allSavingsTriggers: triggers,
      };
      return results;
    });
  },
  setPercentage: (value: number) => {
    return set(() => {
      const results = {
        percentage: value,
      };
      return results;
    });
  },
  setMerchantName: (name: string) => {
    return set(() => {
      const results = {
        merchant_name: name,
      };
      return results;
    });
  },
  setGoalId: (id: number) => {
    return set(() => {
      const results = {
        goal_id: id,
      };
      return results;
    });
  },
}));

export default useSavingsTriggerStore;
