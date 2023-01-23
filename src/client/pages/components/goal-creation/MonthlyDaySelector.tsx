import React, { useState } from "react";

const daysOfWeek = ["", "1st", "2nd", "3rd", "Last"];

type MonthlyDayCircleProps = {
  day: number;
  onClick?: () => void;
  isActive: boolean;
};
const MonthlyDayCircle = ({
  day,
  onClick,
  isActive,
}: MonthlyDayCircleProps) => {
  return (
    <div className="rounded-full outline outline-1 outline-skin-primary p-px mx-1">
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

const MonthlyDay = ({
  activeIndex,
  onClick,
}: {
  activeIndex: number;
  onClick?: (day: number) => void;
}) => {
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
  const [exactDay, selectExactDay] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4">
        {[1, 2, 3, 4].map((day: any, i) => {
          const active = day === activeIndex;
          return (
            <MonthlyDayCircle
              key={i}
              day={day}
              isActive={active}
              onClick={() => {
                if (onClick) {
                  onClick(day);
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
            className="text-skin-base outline outline-1 outline-skin-primary text-base font-medium font-poppins rounded-3xl px-4 py-2.5 text-center inline-flex items-center"
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
            <div className="absolute right-0 left-0 rounded-2xl bg-skin-base p-3.5 w-32 outline outline-1 outline-skin-primary h-28 overflow-y-auto">
              <ul className="">
                {exactDaysOfTheWeek.map((day, i) => {
                  return (
                    <li
                      className="text-base font-poppins font-medium tracking-progress_label"
                      key={i}
                      onClick={() => {
                        selectExactDay(day);
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
