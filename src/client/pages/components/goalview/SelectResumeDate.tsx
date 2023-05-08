import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import React, { useState } from "react";
import { CustomResumeDateButton } from "./CustomResumeDateButton";
type SelectResumeDateProps = {
  title?: string;
  activeOption: number;
  selectDateOptions: Array<any>;
  onClick?: (tab: any) => void;
};
type SelectResumeDateButtonProps = {
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
};
export const SelectResumeDateButton = ({
  label,
  isActive,
  onClick,
}: SelectResumeDateButtonProps) => {
  return (
    <div className="rounded-3xl border border-1 border-skin-primary p-px mx-1">
      <div
        onClick={onClick}
        className={`rounded-3xl py-3 px-3.5 flex items-center justify-center ${
          isActive
            ? "bg-skin-primary text-white"
            : "text-skin-neutral bg-skin-base"
        }`}
      >
        <div className="font-poppins font-medium text-xs tracking-wide text-center">
          {label}
        </div>
      </div>
    </div>
  );
};
const SelectResumeDate = ({
  title,
  onClick,
  activeOption,
  selectDateOptions,
}: SelectResumeDateProps) => {
  const [customButton, selectCustomButton] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center mb-4">
        {title ? (
          <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center">
            {title ?? ""}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-row">
        {selectDateOptions.map((option, i) => {
          const active = option.id === activeOption;
          return (
            <div key={i}>
              {i === 1 ? (
                <CustomResumeDateButton
                  isActive={active}
                  click={() => {
                    if (onClick) {
                      onClick(option.id);
                    }
                  }}
                />
              ) : (
                <SelectResumeDateButton
                  key={i}
                  label={option.title}
                  isActive={active}
                  onClick={() => {
                    if (onClick) {
                      onClick(option.id);
                    }
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectResumeDate;
