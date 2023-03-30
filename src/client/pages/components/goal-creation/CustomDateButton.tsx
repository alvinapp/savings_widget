import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
type CustomDateButtonProps = {
  isActive: boolean;
  click?: () => void;
  onSelectedOutside?: () => void;
};

export const CustomDateButton = ({
  isActive,
  click,
}: CustomDateButtonProps) => {
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
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
      selected={goalContributionSettings.startingFromDate}
      onChange={(date: Date) => goalContributionSettings.setStartFromDate(date)}
      customInput={<ExampleCustomInput />}
      minDate={new Date()}
    />
  );
};
