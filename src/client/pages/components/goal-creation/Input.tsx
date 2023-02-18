import Goal from "client/models/Goal";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import React, { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
type AddMonthlyIncomeInputProps = {
  increment?: () => void;
  decrement?: () => void;
  value?: number;
  addValue: (e: any) => void;
};
export const AddMonthlyIncomeInput = ({
  value,
  increment,
  decrement,
  addValue,
}: AddMonthlyIncomeInputProps) => {
  const currencySymbol = useMonthlyIncomeStore(
    (state: any) => state.currencySymbol
  );

  return (
    <div className="flex flex-row items-center">
      <div
        className="flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary"
        onClick={decrement}
      >
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative rounded-full p-3.5 bg-skin-input mx-2 flex flex-row justify-center items-center">
        <div>{currencySymbol}</div>
        <input
          className="bg-transparent font-workSans text-xl tracking-title text-skin-base text-center font-semibold w-48 focus:border-none focus:outline-none"
          type="number"
          value={value}
          max={25}
          onChange={(e) => {
            addValue(parseInt(e.target.value));
          }}
        />
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary"
        onClick={increment}
      >
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

type GoalCreationInputProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  value?: any;
  hasValue?: boolean;
  onClick?: () => void;
  addValue: (e: any) => void;
};
export const GoalCreationInput = ({
  label,
  leadingIcon,
  value,
  hasValue = true,
  onClick,
  addValue,
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
      <div
        className="flex flex-row relative"
        onClick={hasValue ? () => {} : onClick}
      >
        <div
          className={`rounded flex flex-row items-center  pl-3.5 w-screen ${
            hasValue
              ? "border border-1 border-skin-base py-2"
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
            <input
              value={value}
              className={`w-64 outline-none text-center`}
              onChange={(e) => {
                addValue(e.target.value);
              }}
              type="text"
            />
          </div>
          {hasValue ? (
            <div className="rounded-full flex items-center bg-skin-secondary p-2 absolute right-2">
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
