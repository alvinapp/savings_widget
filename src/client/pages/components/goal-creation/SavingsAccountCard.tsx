import React from "react";
type SavingsAccountCardProps = {
  selected?: boolean;
  accountName?: string;
  accountNumber?: string;
  onClick?: () => void;
};
export const SavingsAccountCard = ({
  selected,
  accountName,
  accountNumber,
  onClick,
}: SavingsAccountCardProps) => {
  return (
    <div
      className={`rounded flex flex-col pl-5 pr-2  py-3 border mb-3 ${
        selected ? "border-skin-primary" : "border-skin-secondary"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="font-workSans text-base font-medium text-skin-base tracking-title">
            {accountName}
          </div>
          <div className="font-workSans text-base font-medium text-skin-subtitle tracking-title">
            {accountNumber}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="radio"
            checked={selected}
            className="w-5 h-5 rounded-full accent-[#056489]"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
