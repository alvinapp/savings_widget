import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
export const AddMonthlyIncomeInput = () => {
  const currencySymbol = "₦";
  const [value, setValue] = useState();
  const finalValue = `${value}`;
  return (
    <div className="flex flex-row items-center">
      <div className="flex justify-center items-center p-4 rounded-full outline outline-1 outline-skin-secondary">
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative rounded-full p-3.5 bg-skin-input mx-3 flex flex-row justify-center items-center">
        <div>
            {currencySymbol}
        </div>
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
