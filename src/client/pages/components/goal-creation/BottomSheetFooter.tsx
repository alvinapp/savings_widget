import React from "react";
import { FiCheck } from "react-icons/fi";
import runningMan from "client/assets/images/savings/running.svg";
import tree1 from "client/assets/images/savings/tree1.svg";
import tree2 from "client/assets/images/savings/tree2.svg";
import successFlag from "client/assets/images/savings/success-flag.svg";
type BottomSheetFooterProps = {
  title?: string;
};
export const BottomSheetFooter = ({ title }: BottomSheetFooterProps) => {
  return (
    <div className="bg-bottomSheetFooterBg bg-cover bg-no-repeat h-44 relative">
      <div className="absolute -top-5 right-0 left-0 flex flex-row justify-between items-center mx-3.5">
        <img src={runningMan} />
        <img src={tree1} />
        <img src={tree2} />
      </div>
      <div className="flex flex-col items-center">
        <div className="font-semibold text-1.5xl font-workSans tracking-title text-skin-primary mb-5 mt-6 text-center w-72">
          {title ?? ""}
        </div>
        <button className="rounded-full shadow-button bg-skin-primary h-14 w-14 flex items-center justify-center text-white mb-6">
          <FiCheck size="1.125rem" />
        </button>
      </div>
    </div>
  );
};
