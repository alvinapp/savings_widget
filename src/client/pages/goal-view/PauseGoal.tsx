import { useState } from "react";
import { FiFlag } from "react-icons/fi";
import CloseButton from "../components/CloseButton";
import { BottomSheetFooter } from "../components/goal-creation/BottomSheetFooter";
import SelectDate from "../components/goal-creation/SelectDate";
/* @ts-ignore */
import DatePicker from "react-mobile-datepicker";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import useGoalStore from "client/store/goalStore";
import SelectResumeDate from "../components/goalview/SelectResumeDate";
import { getConfirmedGoals, pauseGoal } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { useQuery } from "react-query";
import { convertDate, dateFormat, nthNumber } from "client/utils/Formatters";
import { ToastContainer, toast } from "react-toastify";
type PauseGoalProps = {
  onClick?: () => void;
};
export const PauseGoal = ({ onClick }: PauseGoalProps) => {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const day = nextMonth.getDate();
  const [activeDateOption, setActiveDateOption] = useState(0);
  const goal = useGoalStore((state: any) => state);
  const currency = "₦";
  const selectDateOptions = [
    { id: 0, title: `${day}${nthNumber(day)} next month` },
    { id: 1, title: "Custom" },
  ];
  const showToastMessage = () => {
    toast(
      `Your goal has been paused and i’ll remind you to resume on ${dateFormat(
        goal.resume_at
      )}next month.`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: "toast",
        closeButton: false,
      }
    );
  };
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const pauseAGoal = async () => {
    pauseGoal({
      configuration: configuration,
      goalId: goal.confirmedGoal.id,
      data: {
        resume_at: convertDate(goal.resume_at.toString()),
      },
    }).then((result) => {
      if (result) {
        getConfirmedGoals({ configuration: configuration }).then((result) => {
          goal.setConfirmedGoals(result);
          goal.openPauseGoalBottomSheet(false);
          goal.openPauseDeleteBottomSheet(false);
          showToastMessage();
        });
      }
    });
  };
  const { isLoading: pausingGoal, refetch: pauseTheGoal } = useQuery(
    "pause-goal",
    () => pauseAGoal,
    { refetchOnWindowFocus: true, enabled: false }
  );
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
        <SelectResumeDate
          activeOption={activeDateOption}
          onClick={(selected: number) => {
            if (selected === 0) {
              goal.setResumeAtDate(nextMonth);
            } else {
            }
            setActiveDateOption(selected);
          }}
          selectDateOptions={selectDateOptions}
        />
      </div>
      <div className="mt-12">
        <BottomSheetFooter
          loading={pausingGoal}
          onClick={() => pauseTheGoal()}
          title={`By resuming next month, your goal will 🪴mature by Tue, Apr 8th 2023`}
        />
      </div>
    </div>
  );
};
