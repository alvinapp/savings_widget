import React from "react";
import depositIcon from "client/assets/images/savings/deposit.webp";
export const DepositButton = ({}) => {
  return (
    <div className="rounded-3xl bg-skin-secondaryWithOpacity px-3 py-1">
      <div className="flex flex-row items-center">
        <div className={`text-skin-primary mr-1 w-4`}>
          <img src={depositIcon} />
        </div>
        <div
          className={`text-skin-primary font-poppins text-xs font-semibold tracking-tab_text`}
        >
          Deposit
        </div>
      </div>
    </div>
  );
};
