import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker } from "../CustomDatePicker";

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

  // Get the selected date from the store
  const selectedDate = goalContributionSettings.startingFromDate;

  // Format the date to 'dd/MM/yyyy'
  const dateString = selectedDate
    ? selectedDate.toLocaleDateString('en-GB') // This formats the date as 'dd/MM/yyyy'
    : 'Custom';

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
            {isActive? dateString: "Custom"}
          </div>
        </div>
      </div>
    )
  );

  return (
    <CustomDatePicker
      selectedDate={selectedDate}
      onDateChange={(date: Date) => goalContributionSettings.setStartFromDate(date)}
      minDate={new Date()}
    >
      {({ toggleCalendar }) => (
        <ExampleCustomInput onClick={toggleCalendar} />
      )}
    </CustomDatePicker>
  );
};