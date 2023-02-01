import React from "react";
type SelectDateProps = {
  title?: string;
  activeOption: number;
  selectDateOptions: Array<any>;
  onClick?: (tab: any) => void;
};
type SelectDateButtonProps = {
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
};
const SelectDateButton = ({
  label,
  isActive,
  onClick,
}: SelectDateButtonProps) => {
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
const SelectDate = ({
  title,
  onClick,
  activeOption,
  selectDateOptions,
}: SelectDateProps) => {
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
            <SelectDateButton
              key={i}
              label={option.title}
              isActive={active}
              onClick={() => {
                if (onClick) {
                  onClick(option.id);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SelectDate;
