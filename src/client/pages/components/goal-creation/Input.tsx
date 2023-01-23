import Goal from "client/models/Goal";
import React, { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
export const AddMonthlyIncomeInput = () => {
  const currencySymbol = "₦";
  const [value, setValue] = useState(35000);
  const finalValue = `${value}`;
  return (
    <div className="flex flex-row items-center">
      <div className="flex justify-center items-center p-3.5 rounded-full outline outline-1 outline-skin-secondary">
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative rounded-full p-3.5 bg-skin-input mx-2 flex flex-row justify-center items-center">
        <div>{currencySymbol}</div>
        <input
          className="bg-transparent font-workSans text-xl tracking-title text-skin-base text-center font-semibold focus:outline-none w-48"
          type="number"
          value={value}
          max={25}
        />
      </div>
      <div className="flex justify-center items-center rounded-full p-4 outline outline-1 outline-skin-primary">
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

type GoalCreationInputProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  inputValue?: string;
  hasValue?: boolean;
  onClick?: () => void;
};
export const GoalCreationInput = ({
  label,
  leadingIcon,
  inputValue,
  hasValue = true,
  onClick,
}: GoalCreationInputProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div
          className={`font-poppins font-medium text-xs tracking-subtitle mb-2 text-skin-base`}
        >
          {label}
        </div>
      </div>
      <div className="flex flex-row" onClick={hasValue ? () => {} : onClick}>
        <div
          className={`rounded flex flex-row items-center justify-between pl-3.5 pr-3  w-screen ${
            hasValue
              ? "outline outline-1 outline-skin-base py-2"
              : "shadow-input py-3"
          }`}
        >
          <div
            className={`flex flex-col ${
              hasValue ? "text-skin-secondary" : "text-skin-inputDisabled"
            }`}
          >
            {leadingIcon}
          </div>
          <div
            className={`font-medium font-poppins text-base tracking-progress_label ${
              hasValue ? "text-skin-base" : "text-skin-inputDisabled"
            }`}
          >
            {inputValue}
          </div>
          {hasValue ? (
            <div className="rounded-full flex items-center bg-skin-secondary p-2">
              <FiX color="#4E6783" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
