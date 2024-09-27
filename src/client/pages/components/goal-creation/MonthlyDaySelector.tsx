import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { useState } from "react";

const weekOfTheMonth = ["", "1st", "2nd", "3rd", "Last"];

type MonthlyDayCircleProps = {
  week: number;
  onClick?: () => void;
  isActive: boolean;
};
const MonthlyDayCircle = ({
  week,
  onClick,
  isActive,
}: MonthlyDayCircleProps) => {
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
        <div className="font-semibold font-custom text-xs">
          {weekOfTheMonth[week]}
        </div>
      </div>
    </div>
  );
};

const MonthlyDay = ({
  activeIndex,
  onClick,
}: {
  activeIndex: number;
  onClick?: (week: number) => void;
}) => {
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const exactDaysOfTheWeek = [
    "",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [exactDay, selectExactDay] = useState("Select day");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4">
        {[1, 2, 3, 4].map((week: any, i) => {
          const active = week === activeIndex;
          return (
            <MonthlyDayCircle
              key={i}
              week={week}
              isActive={active}
              onClick={() => {
                if (onClick) {
                  onClick(week);
                }
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <div className="relative inline-block">
          <button
            id="day-dropdown"
            aria-expanded="true"
            aria-haspopup="true"
            className="text-skin-base border border-1 border-skin-primary text-base font-medium font-custom rounded-3xl px-4 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {exactDay}{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen ? (
            <div className="absolute right-0 left-0 rounded-2xl bg-skin-base p-3.5 w-32 border border-1 border-skin-primary h-28 overflow-y-auto">
              <ul className="">
                {exactDaysOfTheWeek.map((day, i) => {
                  return (
                    <li
                      className="text-base font-custom font-medium tracking-progress_label"
                      key={i}
                      onClick={() => {
                        selectExactDay(day);
                        goalContributionSettings.setWeekDayOfTheMonth(day);
                        setIsOpen(false);
                      }}
                    >
                      {day}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MonthlyDay;
