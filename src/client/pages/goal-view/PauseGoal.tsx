import { useState } from "react";
import { FiFlag } from "react-icons/fi";
import CloseButton from "../components/CloseButton";
import SampleDatePicker from "../components/DatePicker";
import { BottomSheetFooter } from "../components/goal-creation/BottomSheetFooter";
import SelectDate from "../components/goal-creation/SelectDate";
/* @ts-ignore */
import DatePicker from "react-mobile-datepicker";
type PauseGoalProps = {
  onClick?: () => void;
};
export const PauseGoal = ({ onClick }: PauseGoalProps) => {
  const [activeDateOption, setActiveDateOption] = useState(0);
  const currency = "₦";
  const selectDateOptions = [
    { id: 0, title: "14th next month" },
    { id: 1, title: "Custom" },
  ];
  const [openCustomDate, setOpenCustomDate] = useState(false);
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 right-2">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-row justify-center">
        <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center">
          I will resume
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center my-6">
        <div className="text-skin-primary mr-3">
          <FiFlag />
        </div>
        <div className="font-workSans font-semibold text-tiny text-skin-base text-center tracking-title">
          My Spend responsibly goal
        </div>
      </div>
      <div className="font-workSans font-semibold text-base text-skin-base text-center tracking-title mb-5">
        On the
      </div>
      <div className="flex flex-row justify-center">
        {openCustomDate ? (
          <div className="h-8">
            <DatePicker value={new Date()} />
          </div>
        ) : (
          <SelectDate
            activeOption={activeDateOption}
            onClick={(selected: number) => {
              setActiveDateOption(selected);
              if (selected == 1) setOpenCustomDate(true);
            }}
            selectDateOptions={selectDateOptions}
          />
        )}
      </div>
      <div className="mt-12">
        <BottomSheetFooter
          title={`By resuming next month, your goal will 🪴mature by Tue, Apr 8th 2023`}
        />
      </div>
    </div>
  );
};
