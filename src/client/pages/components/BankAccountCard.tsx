import React from "react";
type BankAccountCardProps = {
  accountNumber?: number;
  bankName?: string;
  onClick?: () => void;
};

export const BankAccountCard = ({
  accountNumber,
  bankName,
  onClick,
}: BankAccountCardProps) => {
  return (
    <div className="flex flex-row mb-4" onClick={onClick}>
      <div className="flex flex-col mr-4">
        <div className="h-10 w-10 rounded-full bg-skin-iconSecondary shadow-card"></div>
      </div>
      <div className="flex flex-col">
        <div className="font-poppins font-medium text-skin-base text-tiny">
          {bankName}
        </div>
        <div className="font-poppins font-medium text-skin-subtitle text-xs">
          {accountNumber}
        </div>
      </div>
    </div>
  );
};
