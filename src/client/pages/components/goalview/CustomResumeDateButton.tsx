import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import useGoalStore from "client/store/goalStore";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
type CustomResumeDateButtonProps = {
  isActive: boolean;
  click?: () => void;
  onSelectedOutside?: () => void;
};

export const CustomResumeDateButton = ({
  isActive,
  click,
}: CustomResumeDateButtonProps) => {
  const goal = useGoalStore((state: any) => state);
  const ExampleCustomInput = forwardRef(
    ({ value, onClick }: { value?: any; onClick?: () => void }, ref) => (
      <div
        className="rounded-3xl border border-1 border-skin-primary p-px mx-1"
        onClick={click}
      >
        <div
          onClick={onClick}
          className={`rounded-3xl py-3 px-3.5 flex items-center justify-center ${
            isActive
              ? "bg-skin-primary text-white"
              : "text-skin-neutral bg-skin-base"
          }`}
        >
          <div className="font-poppins font-medium text-xs tracking-wide text-center">
            Custom
          </div>
        </div>
      </div>
    )
  );
  return (
    <DatePicker
      selected={goal.resume_at}
      onChange={(date: Date) => goal.setResumeAtDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};
