import { getMaturityDate } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import useGoalStore from "client/store/goalStore";
import { rightDateFormat } from "client/utils/Formatters";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
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
      onChange={(date: Date) => {
        goal.setResumeAtDate(date);
        maturiryDate();
      }}
      customInput={<ExampleCustomInput />}
      minDate={new Date()}
    />
  );
};
