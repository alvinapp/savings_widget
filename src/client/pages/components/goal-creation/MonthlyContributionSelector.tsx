import React, { useState } from "react";
import MonthlyDay from "./MonthlyDaySelector";
import SelectDate from "./SelectDate";

export const MonthlyContributionSelector = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDateOption, setActiveDateOption] = useState(0);
  const selectDateOptions = [
    { id: 0, title: "Today" },
    { id: 1, title: "Tomorrow" },
    { id: 2, title: "Custom" },
  ];
  return (
    <div className="mb-3">
      <div className="flex flex-row justify-center mb-4">
        <MonthlyDay
          onClick={(day: number) => setActiveDayIndex(day)}
          activeIndex={activeDayIndex}
        />
      </div>
      <div className="flex flex-row justify-center">
        <SelectDate
          title="Starting from"
          activeOption={activeDateOption}
          onClick={(selected: number) => setActiveDateOption(selected)}
          selectDateOptions={selectDateOptions}
        />
      </div>
    </div>
  );
};
