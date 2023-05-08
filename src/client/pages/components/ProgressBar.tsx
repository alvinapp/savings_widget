import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import yellowFlag from "../../assets/images/savings/yellow-flag.svg";
import greenFlag from "../../assets/images/savings/attained_flag.svg";
import star from "../../assets/images/savings/complete-goal-star.svg";
import { FiPause } from "react-icons/fi";
type CustomProgessBar = {
  progressPercentage: number;
  isActive?: boolean;
};
export const CustomProgressBar = ({
  progressPercentage,
  isActive = false,
}: CustomProgessBar) => {
  const knobPosition = progressPercentage * 3;
  return (
    <div className="relative">
      <ProgressBar
        completed={progressPercentage}
        height="8px"
        baseBgColor={`${isActive ? "#D6EAD4" : "#F2F5F8"}`}
        bgColor={`${isActive ? "#85C17F" : "#D0DDEA"}`}
        isLabelVisible={false}
      />
      <div className={`absolute -top-5`} style={{ left: knobPosition }}>
        {isActive ? (
          progressPercentage !== 100 ? (
            <div className="bg-skin-successSecondary border border-1 border-skin-successNeutral w-11 h-11 rounded-full flex items-center justify-center font-poppins text-xs text-skin-white font-semibold tracking-tight">
              {`${progressPercentage}%`}
            </div>
          ) : (
            <div></div>
          )
        ) : (
          <div className="bg-skin-accent shadow-knob w-9 h-9 rounded-full flex items-center justify-center font-poppins text-xs font-semibold tracking-tight mt-1 text-skin-primary">
            <FiPause />
          </div>
        )}
      </div>
      <div className="absolute -top-6 right-1">
        {progressPercentage !== 100 ? (
          <img src={yellowFlag} />
        ) : (
          <div className="relative">
            <img src={greenFlag} />
            <div className=" absolute -top-3 -left-2">
              <img src={star} />
            </div>
            <div className="absolute -top-4">
              <img src={star} />
            </div>
            <div className="absolute -right-2 -top-3">
              <img src={star} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
