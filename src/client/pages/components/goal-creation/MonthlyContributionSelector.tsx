import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { useState } from "react";
import MonthlyDay from "./MonthlyDaySelector";
import SelectDate from "./SelectDate";

export const MonthlyContributionSelector = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDateOption, setActiveDateOption] = useState(0);
  const selectDateOptions = [
    { id: 0, title: "Today" },
    { id: 1, title: "Tomorrow" },
    { id: 2, title: "" },
  ];
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const weeksOfTheMonthInWords = ["", "first", "second", "third", "fourth"];
  let tomorrow = new Date();
  const today = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return (
    <div className="mb-3">
      <div className="flex flex-row justify-center mb-4">
        <MonthlyDay
          onClick={(week: number) => {
            goalContributionSettings.setMonthlyWeek(
              weeksOfTheMonthInWords[week]
            );
            setActiveDayIndex(week);
          }}
          activeIndex={activeDayIndex}
        />
      </div>
      <div className="flex flex-row justify-center">
        <SelectDate
          title="Starting from"
          activeOption={activeDateOption}
          onClick={(selected: number) => {
            if (selected === 0) {
              goalContributionSettings.setStartFromDate(today);
            } else if (selected === 1) {
              goalContributionSettings.setStartFromDate(tomorrow);
            } else {
            }
            setActiveDateOption(selected);
          }}
          selectDateOptions={selectDateOptions}
        />
      </div>
    </div>
  );
};
