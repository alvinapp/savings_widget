import create from "zustand";

import Account from "client/models/Account";

const useBankAccountStore = create((set) => ({
  accounts: [],
  savingAccounts: [],
  checkingAccounts: [],
  savingAccount: {},
  account: {},
  accountBottomSheet: false,
  savingsAccountBottomSheet: false,
  updateAccountBottomSheet: false,
  openSavingsAccountBottomSheet: (open: boolean) => {
    return set(() => {
      const results = {
        savingsAccountBottomSheet: open,
      };
      return results;
    });
  },
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
  setCheckingAccounts: (list: any) => {
    return set(() => {
      const results = {
        checkingAccounts: list,
      };
      return results;
    });
  },
  setSavingsAccounts: (list: any) => {
    return set(() => {
      const results = {
        savingAccounts: list,
      };
      return results;
    });
  },
  setSavingAccount: (detail: any) => {
    return set(() => {
      const results = {
        savingAccount: detail,
      };
      return results;
    });
  },
}));

export default useBankAccountStore;
