import React from "react";
import { FiChevronDown } from "react-icons/fi";

type AccountDropDownProps = {
  accountName?: string;
  accountNumber?: string;
  disable?: boolean;
  onClick?: () => void;
};
export const AccountDropDown = ({
  accountName,
  accountNumber,
  disable = false,
  onClick,
}: AccountDropDownProps) => {
  return (
    <div className="flex flex-col mb-3" onClick={onClick}>
      <div
        className={`rounded flex flex-col pl-5 pr-2  py-3 border ${
          disable ? "border-skin-secondary" : "border-skin-primary"
        }`}
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
            <FiChevronDown
              color={`${disable ? "#d3d3d3" : "#101010"}`}
              size="1.2rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
