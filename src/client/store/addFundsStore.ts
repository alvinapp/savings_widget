import create from "zustand";

import Account from "client/models/Account";

const useAddFundsStore = create((set) => ({
  bottomSheet: false,
  openAddFundBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        bottomSheet: open,
      };
      return results;
    });
  },
}));

export default useAddFundsStore;
