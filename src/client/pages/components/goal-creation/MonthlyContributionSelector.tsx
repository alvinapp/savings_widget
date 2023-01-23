import React, { useState } from "react";
import MonthlyDay from "./MonthlyDaySelector";
import SelectDate from "./SelectDate";

export const MonthlyContributionSelector = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDateOption, setActiveDateOption] = useState(0);
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
        />
      </div>
    </div>
  );
};
