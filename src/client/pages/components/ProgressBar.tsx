import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import yellowFlag from "../../assets/images/savings/yellow-flag.svg";
type CustomProgessBar = {
  progressPercentage: number;
};
export const CustomProgressBar = ({ progressPercentage }: CustomProgessBar) => {
  const knobPosition = progressPercentage * 3;
  console.log(knobPosition);
  return (
    <div className="relative">
      <ProgressBar
        completed={progressPercentage}
        height="8px"
        baseBgColor="#D6EAD4"
        bgColor="#85C17F"
        isLabelVisible={false}
      />
      <div className={`absolute -top-5`} style={{ left: knobPosition }}>
        <div className="w-11 h-11 rounded-full outline outline-1 outline-skin-successNeutral">
          <div className="bg-skin-successSecondary w-11 h-11 rounded-full flex items-center justify-center font-poppins text-xs text-skin-white font-semibold tracking-tight">
            {`${progressPercentage}%`}
          </div>
        </div>
      </div>
      <div className="absolute -top-6 right-1">
        <img src={yellowFlag} />
      </div>
    </div>
  );
};
