import React from "react";
type SelectDateProps = {
  title?: string;
  activeOption: number;
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
    <div
      className="rounded-3xl outline outline-1 outline-skin-primary p-px mx-1"
      onClick={onClick}
    >
      <div
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
const SelectDate = ({ title, onClick, activeOption }: SelectDateProps) => {
  const selectDateOptions = [
    { id: 0, title: "Today" },
    { id: 1, title: "Tomorrow" },
    { id: 2, title: "Custom" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center mb-4">
        <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center">
          {title}
        </div>
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
