import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { forwardRef, useState } from "react";
import SelectDate, { SelectDateButton } from "./SelectDate";
import WeekDay from "./WeeklyDaySelector";
import DatePicker from "react-datepicker";
import { CustomDateButton } from "./CustomDateButton";
const WeeklyContributionSelector = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDateOption, setActiveDateOption] = useState(0);
  const [customDateValue, setCustomDateValue] = useState(new Date());
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  let tomorrow = new Date();
  const today = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [customDate, setCustomDate] = useState(new Date());
  const selectDateOptions = [
    { id: 0, title: "Today" },
    { id: 1, title: "Tomorrow" },
  ];
  return (
    <div className="mb-3">
      <div className="flex flex-row justify-center mb-4">
        <WeekDay
          onClick={(day: number) => setActiveDayIndex(day)}
          activeIndex={activeDayIndex}
        />
      </div>
      <div className="flex flex-row justify-center items-center">
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
export default WeeklyContributionSelector;
