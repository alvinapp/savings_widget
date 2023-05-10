import React, { useState } from "react";
import { BankAccountCard } from "../BankAccountCard";
import useBankAccountStore from "client/store/bankAccountStore";
import { useQuery } from "react-query";
import { linkBankAccount } from "client/api/accounts";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import { AccountDropDown } from "./AccountDropDown";
import MainButton from "../MainButton";
import CloseButton from "../CloseButton";
import { BottomSheet } from "react-spring-bottom-sheet";
import { PauseGoal } from "client/pages/goal-view/PauseGoal";
import { ChooseSavingsAccount } from "./ChooseSavingsAccount";
export type SelectBankProps = {
  updateBank?: boolean;
};
export const SelectBank = ({ updateBank = false }: SelectBankProps) => {
  const accountStore = useBankAccountStore((state: any) => state);
  const checkingAccounts = accountStore.checkingAccounts ?? [];
  const savingAccount = accountStore.savingAccount;
  const [cardId, setCardId] = useState(0);
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
    <div className="flex flex-col items-start mx-3.5 mb-5 relative">
      <div className="absolute top-0 right-2">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={() => {
            accountStore.openAccountBottomSheet(false);
          }}
        />
      </div>
      <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-10 text-center">
        Setup a savings funding account
      </div>
      {/* <div className="ml-3">
        {accountList.map((account) => {
          return updateBank ? (
            <BankAccountCard
              key={account.id}
              accountNumber={account.account_number}
              bankName={account.bank_name}
              onClick={() => {
                accountStore.setAccount({ bank_account: account });
                accountStore.openUpdateAccountBottomSheet(false);
              }}
            />
          ) : (
            <BankAccountCard
              key={account.id}
              accountNumber={account.account_number}
              bankName={account.bank_name}
              onClick={() => {
                accountStore.setAccount(account);
                accountStore.openAccountBottomSheet(false);
              }}
            />
          );
        })}
      </div> */}
      <div className="mb-4 w-full">
        <div className="flex flex-row justify-start mb-2">
          <div className="font-workSans text-tiny font-medium text-skin-subtitle tracking-title">
            Fund From
          </div>
        </div>
        {checkingAccounts.map((account: any, i: any) => {
          return (
            <AccountDropDown
              key={i}
              accountName={account.bank_name}
              accountNumber={account.account_number}
              disable={true}
            />
          );
        })}
      </div>
      <div className="mb-5 w-full">
        <div className="flex flex-row justify-start mb-2">
          <div className="font-workSans text-tiny font-medium text-skin-subtitle tracking-title">
            Fund To
          </div>
        </div>
        <AccountDropDown
          accountName={savingAccount.bank_name}
          accountNumber={savingAccount.account_number}
          onClick={() => {
            accountStore.openSavingsAccountBottomSheet(true);
          }}
        />
        <BottomSheet
          onDismiss={() => accountStore.openSavingsAccountBottomSheet(false)}
          open={accountStore.savingsAccountBottomSheet}
          style={{
            borderRadius: 24,
          }}
          children={
            <ChooseSavingsAccount
              click={(account) => setCardId(account.id)}
              activeIndex={cardId}
            />
          }
          defaultSnap={300}
        ></BottomSheet>
      </div>
      <MainButton
        title="Done"
        click={() => accountStore.openSavingsAccountBottomSheet(false)}
      />
    </div>
  );
};
