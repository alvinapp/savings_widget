import { getMaturityDate } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import { rightDateFormat } from "client/utils/Formatters";
import React, { forwardRef } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker } from "../CustomDatePicker";
import { useQuery } from "react-query";

type CustomResumeDateButtonProps = {
  isActive: boolean;
  click?: () => void;
  onSelectedOutside?: () => void;
};

export const CustomResumeDateButton = ({
  isActive,
  click,
}: CustomResumeDateButtonProps) => {
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { isFetching: fetchingMaturityDate, refetch: maturiryDate } = useQuery(
    "maturity-date",
    () =>
      getMaturityDate({
        configuration: configuration,
        data: {
          date_str: rightDateFormat(goal.resume_at.toString()),
        },
        goalId: goal.confirmedGoal.id,
      }).then((result) => {
        if (result) {
          goal.setMaturityDate(result.maturity_date);
        }
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  const goal = useGoalStore((state: any) => state);

  // Get the selected date from the store
  const selectedDate = goal.resume_at;

  // Format the date to 'dd/MM/yyyy'
  const dateString = selectedDate
    ? selectedDate.toLocaleDateString('en-GB')
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
      onDateChange={(date: Date) => {
        goal.setResumeAtDate(date);
        setTimeout(() => {
          maturiryDate();
        }, 500);
      }}
      minDate={new Date()}
    >
      {({ toggleCalendar }) => (
        <ExampleCustomInput onClick={toggleCalendar} />
      )}
    </CustomDatePicker>
  );
};