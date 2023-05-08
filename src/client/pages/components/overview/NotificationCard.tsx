import React from "react";
import { FiX } from "react-icons/fi";
type NotificationCardProps = {
  amount: number;
};

export const NotificationCard = ({ amount }: NotificationCardProps) => {
  const currencySymbol = "₦";
  return (
    <div className="px-5 py-3.5 shadow-card bg-skin-successWithOpacity rounded-lg relative">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="text-2xl mr-3">🔥</div>
        </div>
        <div className="flex flex-col">
          <div className="text-skin-success font-poppins text-sm font-medium tracking-listtile_subtitle">
            <span className="text-skin-success">Wow!</span> You're getting it
            <span className="skin-success"> done with </span>
            <span className="text-skin-success mr-1">{currencySymbol}</span>
            <span className="text-skin-success">
              {Math.round(amount).toLocaleString("en-US")}
            </span>
            <span> saved this month.</span>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <FiX color="#878787" />
      </div>
    </div>
  );
};
