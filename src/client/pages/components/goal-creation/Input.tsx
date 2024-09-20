import Goal from "client/models/Goal";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import React, { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { TailSpin } from "react-loader-spinner";
type AddMonthlyIncomeInputProps = {
  increment?: () => void;
  decrement?: () => void;
  value?: number;
  addValue: (e: any) => void;
};

export const AddMonthlyIncomeInput = ({
  value = 0,
  increment,
  decrement,
  addValue,
}: AddMonthlyIncomeInputProps) => {
  const currencySymbol = useMonthlyIncomeStore(
    (state: any) => state.currencySymbol
  );

  // Helper function to format numbers with commas
  const formatNumberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary cursor-pointer"
        onClick={decrement}
      >
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative rounded-full py-3.5 px-12 bg-skin-input mx-2 flex flex-row justify-center items-center" style={{
        minWidth: "14rem"
      }}>
        {/* Flex container for both symbol and value to ensure they're centered together */}
        <div className="flex flex-row items-center justify-center w-full">
          {/* Currency symbol and value inside a single flex container */}
          <span
            className="text-l font-semibold"
          >
            {currencySymbol}
          </span>
          <input
            className="bg-transparent font-workSans text-xl tracking-title text-skin-base font-semibold w-full focus:border-none focus:outline-none"
            style={{
              padding: 0, // Remove padding to ensure alignment
              textAlign: "center", // Center text within the input
              // make the width of the input dynamic based on the length of the value
              width: `${value.toString().length * 15}px`
            }}
            type="text"
            value={formatNumberWithCommas(value || 0)}
            onChange={(e) => {
              const unformattedValue = e.target.value.replace(/,/g, "");
              addValue(parseInt(unformattedValue));
            }}
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary cursor-pointer"
        onClick={increment}
      >
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

//Text input field

type TextInputProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  value?: any;
  hasValue?: boolean;
  onClick?: () => void;
  addValue: (e: any) => void;
  placeHolder?: string;
  type?: any;
  hasCurrencySymbol?: boolean;
  clearInput?: any;
  isLoading?: boolean;
};
export const TextInput = ({
  label,
  leadingIcon,
  value,
  hasValue = true,
  onClick,
  addValue,
  placeHolder,
  type = "text",
  hasCurrencySymbol = false,
  clearInput,
  isLoading = false,
}: TextInputProps) => {
  const handleClearInput = (event: any) => {
    event.stopPropagation();
    clearInput();
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div
          className={`font-poppins font-medium text-xs tracking-subtitle mb-2 text-skin-base`}
        >
          {label}
        </div>
      </div>
      <div className="flex flex-row relative">
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
            className={`font-medium font-poppins text-base tracking-progress_label flex flex-row justify-center items-center ${
              hasValue ? "text-skin-base" : "text-skin-inputDisabled"
            }`}
          >
            {hasCurrencySymbol ? (
              <div className="translate-x-12">{hasValue ? "₦ " : ""}</div>
            ) : (
              <div></div>
            )}
            <input
              disabled={hasValue ? false : true}
              type={type}
              placeholder={placeHolder}
              value={value}
              className={`w-64 outline-none text-center`}
              onChange={(e) => {
                addValue(e.target.value);
              }}
            />
          </div>
          {hasValue ? (
            <button
              className="rounded-full flex items-center bg-skin-secondary p-2 absolute right-2"
              onClick={handleClearInput}
            >
              <FiX color="#4E6783" />
            </button>
          ) : isLoading ? (
            <TailSpin
              height="20"
              width="20"
              color="#056489"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

//Text field with popup

type TextInputWithPopupProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  value?: any;
  hasValue?: boolean;
  onClick?: () => void;
  addValue: (e: any) => void;
  placeHolder?: string;
  type?: any;
  hasCurrencySymbol?: boolean;
  clearInput?: any;
  isLoading?: boolean;
};
export const TextInputWithPopup = ({
  label,
  leadingIcon,
  value,
  hasValue = true,
  onClick,
  addValue,
  placeHolder,
  type = "text",
  hasCurrencySymbol = false,
  clearInput,
  isLoading = false,
}: TextInputWithPopupProps) => {
  const handleClearInput = (event: any) => {
    event.stopPropagation();
    clearInput();
  };
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
            className={`flex flex-col h-8 w-8 justify-center ${
              hasValue ? "text-skin-secondary" : "text-skin-inputDisabled"
            }`}
          >
            {leadingIcon}
          </div>
          <div
            className={`font-medium font-poppins text-base tracking-progress_label flex flex-row justify-center items-center ${
              hasValue ? "text-skin-base" : "text-skin-inputDisabled"
            }`}
          >
            {hasCurrencySymbol ? (
              <div className="translate-x-12">{hasValue ? "₦ " : ""}</div>
            ) : (
              <div></div>
            )}
            <input
              disabled={hasValue ? false : true}
              type={type}
              placeholder={placeHolder}
              value={value}
              className={`w-64 outline-none text-center`}
              onChange={(e) => {
                addValue(e.target.value);
              }}
            />
          </div>
          {hasValue ? (
            <button
              className="rounded-full flex items-center bg-skin-secondary p-2 absolute right-2"
              onClick={handleClearInput}
            >
              <FiX color="#4E6783" />
            </button>
          ) : isLoading ? (
            <TailSpin
              height="20"
              width="20"
              color="#056489"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
