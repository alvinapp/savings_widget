import React, { useState } from "react";
type CustomDropDownProps = {
  dataset: Array<any>;
  icon?: React.ReactNode;
  height?: string;
  exactData?: any;
  onClick?: (tab: any) => void;
};
export const CustomDropDown = ({
  dataset,
  icon,
  height,
  onClick,
  exactData,
}: CustomDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        id="day-dropdown"
        aria-expanded="true"
        aria-haspopup="true"
        className="text-skin-base border border-1 border-skin-primary text-base font-poppins rounded-3xl px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-skin-neutral text-lg mr-2">{icon}</div>
        {exactData}
        <div className="text-skin-neutral">
          {" "}
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
        </div>
      </button>
      {isOpen && dataset.length > 1 ? (
        <div
          className={`absolute right-0 left-0 rounded-lg bg-skin-base p-3.5 w-auto ${
            height ?? "h-20"
          } overflow-y-auto shadow-card`}
        >
          <ul className="">
            {dataset.map((data, i) => {
              return (
                <li
                  className="text-tiny font-poppins font-medium tracking-progress_label block mb-4"
                  key={i}
                  onClick={() => {
                    if (onClick) {
                      onClick(data);
                    }
                    setIsOpen(false);
                  }}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
