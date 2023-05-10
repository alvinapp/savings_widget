import React, { useState } from "react";
import CloseButton from "../CloseButton";
import { SavingsAccountCard } from "./SavingsAccountCard";
import { CreateSavingsAccountCard } from "./CreateSavingsAccountCard";
import useBankAccountStore from "client/store/bankAccountStore";

type ChooseSavingsAccountProps = {
  activeIndex?: number;
  click?: (savingAccount: any) => void;
};
export const ChooseSavingsAccount = ({
  activeIndex,
  click,
}: ChooseSavingsAccountProps) => {
  const accountStore = useBankAccountStore((state: any) => state);
  const savinsAccounts = accountStore.savingAccounts ?? [];

  return (
    <div className="flex flex-col items-start mx-3.5 mb-5 relative">
      <div className="absolute top-0 right-2">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={() => {
            accountStore.openSavingsAccountBottomSheet(false);
          }}
        />
      </div>
      <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-10 text-center">
        Fund to
      </div>
      <div className="w-full">
        {savinsAccounts.map((account: any, i: any) => {
          const isSelected = account.id === activeIndex;
          return (
            <SavingsAccountCard
              key={i}
              selected={isSelected}
              accountName={account.bank_name}
              accountNumber={account.account_number}
              onClick={() => {
                if (click) {
                  click(account);
                }
                accountStore.setSavingAccount(account);
              }}
            />
          );
        })}
      </div>
      <div className="w-full mt-5 mb-8">
        <CreateSavingsAccountCard />
      </div>
    </div>
  );
};
