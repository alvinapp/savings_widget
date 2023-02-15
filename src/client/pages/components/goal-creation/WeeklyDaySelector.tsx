import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { useState } from "react";

const daysOfWeek = ["", "S", "M", "T", "W", "T", "F", "S"];

type WeekdayCircleProps = {
  day: number;
  onClick?: () => void;
  isActive: boolean;
};
const WeekdayCircle = ({ day, onClick, isActive }: WeekdayCircleProps) => {
  return (
    <div className="rounded-full border border-1 border-skin-primary p-px mx-1">
      <div
        className={`rounded-full h-9 w-9 flex items-center justify-center ${
          isActive
            ? "bg-skin-primary text-white"
            : "bg-skin-base  text-skin-neutral"
        }`}
        onClick={onClick}
      >
        <div className="font-semibold font-poppins text-xs">
          {daysOfWeek[day]}
        </div>
      </div>
    </div>
  );
};

const WeekDay = ({
  activeIndex,
  onClick,
}: {
  activeIndex: number;
  onClick?: (day: number) => void;
}) => {
  // get current date
  const exactDaysOfTheWeek = [
    "",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [exactDay, setExactDay] = useState("");
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {[1, 2, 3, 4, 5, 6, 7].map((day: any, i) => {
          const active = day === activeIndex;
          return (
            <WeekdayCircle
              key={i}
              day={day}
              isActive={active}
              onClick={() => {
                setExactDay(exactDaysOfTheWeek[day]);
                goalContributionSettings.setWeekDayToContribute(
                  exactDaysOfTheWeek[day]
                );
                if (onClick) {
                  onClick(day);
                }
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-center mt-4">
        <div className="font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center">
          {goalContributionSettings.weekDayToContibute}
        </div>
      </div>
    </div>
  );
};

export default WeekDay;
