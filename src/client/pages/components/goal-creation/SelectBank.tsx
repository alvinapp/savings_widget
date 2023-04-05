import React from "react";
import { BankAccountCard } from "../BankAccountCard";
import useBankAccountStore from "client/store/BankAccountStore";
import { useQuery } from "react-query";
import { linkBankAccount } from "client/api/accounts";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
export type SelectBankProps = {
  accountList: Array<any>;
};
export const SelectBank = ({ accountList }: SelectBankProps) => {
  const accountStore = useBankAccountStore((state: any) => state);
  const goalStore = useGoalStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  // const { isFetching: linkingAccount, refetch: linkAccount } = useQuery(
  //   "link-bank-account",
  //   () =>
  //     linkBankAccount({
  //       configuration: configuration,
  //       data: {
  //         goal_id: goalStore.selectedGoal.id,
  //         bank_account_id: 0,
  //       },
  //     }),
  //   { refetchOnWindowFocus: false, enabled: false }
  // );
  return (
    <div className="flex flex-col items-start mx-3.5 mb-5">
      <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-3 text-center">
        Link bank or wallet
      </div>
      <div className="ml-3">
        {accountList.map((account) => {
          return (
            <BankAccountCard
              key={account.id}
              accountNumber={account.account_number}
              bankName={account.bank_name}
              onClick={() => {
                accountStore.setAccount(account);
                console.log(accountStore.account);
                linkBankAccount({
                  configuration: configuration,
                  data: {
                    goal_id: goalStore.goalId,
                    bank_account_id: account.id,
                  },
                }).then((result) => {
                  console.log(result);
                  if (result) {
                    accountStore.openAccountBottomSheet(false);
                  }
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
