import React from "react";
import { FiCheck } from "react-icons/fi";
import runningMan from "client/assets/images/savings/running.svg";
import tree1 from "client/assets/images/savings/tree1.svg";
import tree2 from "client/assets/images/savings/tree2.svg";
import successFlag from "client/assets/images/savings/success-flag.svg";
import star from "client/assets/images/savings/star.svg";
import { BallTriangle, TailSpin } from "react-loader-spinner";
import { formatDate } from "client/utils/Formatters";
type BottomSheetFooterProps = {
  title?: string;
  onClick?: () => void;
  loading?: boolean;
};
export const BottomSheetFooter = ({
  title,
  onClick,
  loading,
}: BottomSheetFooterProps) => {
  const fullTitle = title ? title : "Calculating...";
  return (
    <div className="bg-bottomSheetFooterBg bg-cover bg-no-repeat h-1/2 relative pb-5 pt-3">
      <div className="absolute -top-5 right-0 left-0 flex flex-row justify-between items-center mx-3.5">
        <img src={runningMan} />
        <img src={tree1} />
        <img src={tree2} />
        <SuccessFlag />
      </div>
      <div className="flex flex-col items-center">
        <div className="font-semibold text-1.5xl font-custom tracking-title text-skin-primary mb-5 mt-6 text-center mx-2">
          {fullTitle ?? ""}
        </div>
        <button
          className="rounded-full shadow-button bg-skin-primary h-14 w-14 flex items-center justify-center text-white mb-6"
          onClick={loading ? () => {} : onClick}
        >
          {loading ? (
            <TailSpin
              height="25"
              width="25"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <FiCheck size="1.5rem" />
          )}
        </button>
      </div>
    </div>
  );
};
const SuccessFlag = () => {
  return (
    <div className="relative">
      <img src={star} className="absolute -top-6" />
      <img src={star} className="absolute left-2 -top-4" />
      <img src={star} className="absolute right-2 -top-4" />
      <img src={successFlag} />
    </div>
  );
};
