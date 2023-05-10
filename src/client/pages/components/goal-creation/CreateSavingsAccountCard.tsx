import React from "react";
import { FiPlus } from "react-icons/fi";

export const CreateSavingsAccountCard = () => {
  return (
    <div
      className={`rounded flex flex-col pl-5 pr-2  py-3 border border-skin-primary`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="font-workSans text-base font-medium text-skin-base tracking-title">
            Create savings account
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-6 h-6 rounded-full flex justify-center items-center bg-skin-primary">
            <FiPlus color="#ffffff" size="1.2rem" />
          </div>
        </div>
      </div>
    </div>
  );
};
