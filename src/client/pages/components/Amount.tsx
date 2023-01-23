import { checkNAN } from "client/utils/Formatters";
import React from "react";
type AmountProps = {
  balance?: number;
};
export const Amount = ({ balance }: AmountProps) => {
  const currency = "₦";
  return (
    <div className="flex flex-row items-center">
      <div className="text-xl text-skin-base font-semibold font-workSans -translate-x-1 translate-y-1">
        {currency}
      </div>
      <div className="text-4xl text-skin-base font-semibold font-workSans">
        {checkNAN(Math.round(balance!)).toLocaleString()}
      </div>
    </div>
  );
};
