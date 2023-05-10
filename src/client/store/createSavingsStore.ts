import create from "zustand";

import Account from "client/models/Account";

const useCreateSavingsAccountStore = create((set) => ({
  savingsTypeBottomSheet: false,
  selectedAccountBottomSheet: false,
  successBottomSheet: false,
  openSavingsTypeBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        savingsTypeBottomSheet: open,
      };
      return results;
    });
  },
  openSelectedAccountBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        selectedAccountBottomSheet: open,
      };
      return results;
    });
  },
  openSuccessBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        successBottomSheet: open,
      };
      return results;
    });
  },
}));

export default useCreateSavingsAccountStore;
