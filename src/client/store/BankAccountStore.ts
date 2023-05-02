import create from "zustand";

import Account from "client/models/Account";

const useBankAccountStore = create((set) => ({
  accounts: [],
  account: {},
  accountBottomSheet: false,
  updateAccountBottomSheet: false,
  openAccountBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        accountBottomSheet: open,
      };
      return results;
    });
  },
  openUpdateAccountBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        updateAccountBottomSheet: open,
      };
      return results;
    });
  },
  setAccount: (details: any) => {
    return set(() => {
      const results = {
        account: details,
      };
      return results;
    });
  },
  setAccounts: (list: any) => {
    return set(() => {
      const results = {
        accounts: list,
      };
      return results;
    });
  },
}));

export default useBankAccountStore;
