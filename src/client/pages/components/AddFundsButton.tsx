import React from "react";
import addButtonFlag from "client/assets/images/savings/add-flag.webp";
type AddFundsProps = {
  onClick?: () => void;
};
export const AddFundsButton = ({ onClick }: AddFundsProps) => {
  return (
    <button
      className={`rounded-full ${
        "h-12 w-12"
      } bg-skin-primary shadow-button flex items-center justify-center`}
      onClick={onClick}
    >
      <div className="p-2.5">
        <img src={addButtonFlag} />
      </div>
    </button>
  );
};
