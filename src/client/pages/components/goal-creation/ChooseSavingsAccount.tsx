import React, { useState } from "react";
import CloseButton from "../CloseButton";
import { SavingsAccountCard } from "./SavingsAccountCard";
import { CreateSavingsAccountCard } from "./CreateSavingsAccountCard";
import useBankAccountStore from "client/store/bankAccountStore";
import useCreateSavingsAccountStore from "client/store/createSavingsStore";
import { BottomSheet } from "react-spring-bottom-sheet";
import { SelectSavingsType } from "./SelectSavingsType";
import { SuccessClassicAccountCreation } from "./SuccessClassicAccountCreation";
import { ClassicAccount } from "./ClassicAccount";

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
  const createSavingsStore = useCreateSavingsAccountStore(
    (state: any) => state
  );
  const [accountType, showAccountType] = useState(false);
  const [selectedSavingsAccount, showSelectedSavingsAccount] = useState(false);
  const [success, showSuccess] = useState(false);
  return (
    <div className="flex flex-col items-start mx-3.5 mb-28 relative">
      <div className="absolute top-0 right-0">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={() => {
            accountStore.openSavingsAccountBottomSheet(false);
          }}
        />
      </div>
      {accountType ? (
        <SelectSavingsType
          click={() => {
            showAccountType(false);
            showSelectedSavingsAccount(true);
          }}
        />
      ) : selectedSavingsAccount ? (
        <ClassicAccount
          onClick={() => {
            showSelectedSavingsAccount(false);
            showSuccess(true);
          }}
        />
      ) : success ? (
        <SuccessClassicAccountCreation
          onClick={() => {
            showSuccess(false);
            accountStore.openSavingsAccountBottomSheet(false);
          }}
        />
      ) : (
        <div className="w-full">
          <div className="flex flex-row justify-start">
            <div className="font-custom text-base font-semibold text-skin-base tracking-title mb-6 mt-12">
              Fund to
            </div>
          </div>
          <div className="">
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
                    accountStore.openSavingsAccountBottomSheet(false);
                  }}
                />
              );
            })}
          </div>
          <div className="mt-5 mb-8">
            <CreateSavingsAccountCard
              onClick={() => {
                showAccountType(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
