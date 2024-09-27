import { useState } from "react";
import { FiFlag } from "react-icons/fi";
import CloseButton from "../components/CloseButton";
import { BottomSheetFooter } from "../components/goal-creation/BottomSheetFooter";
import useGoalStore from "client/store/goalStore";
import SelectResumeDate from "../components/goalview/SelectResumeDate";
import { getConfirmedGoals, getMaturityDate, pauseGoal } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { useQuery } from "react-query";
import {
  convertDate,
  dateFormat,
  nthNumber,
  rightDateFormat,
} from "client/utils/Formatters";
import { toast } from "react-toastify";
type PauseGoalProps = {
  onClick?: () => void;
  goalName?: string;
};
export const PauseGoal = ({ onClick, goalName }: PauseGoalProps) => {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const day = nextMonth.getDate();
  const [activeDateOption, setActiveDateOption] = useState(0);
  const goal = useGoalStore((state: any) => state);
  const selectDateOptions = [
    { id: 0, title: `${day}${nthNumber(day)} next month` },
    { id: 1, title: "Custom" },
  ];
  const showToastMessage = () => {
    toast(
      `Your goal has been paused and i’ll remind you to resume on ${dateFormat(
        goal.resume_at,
        true
      )}`,
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

  const { isFetching: pausingGoal, refetch: pauseTheGoal } = useQuery(
    "pause-goal",
    () =>
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
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  const { isFetching: fetchingMaturityDate, refetch: maturiryDate } = useQuery(
    "maturity-date",
    () =>
      getMaturityDate({
        configuration: configuration,
        data: {
          date_str: rightDateFormat(goal.resume_at.toString()),
        },
        goalId: goal.confirmedGoal.id,
      }).then((result) => {
        if (result) {
          goal.setMaturityDate(result.maturity_date);
        }
      })
    // { refetchOnWindowFocus: false, enabled: false }
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
        <div className="font-custom text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center">
          I will resume
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center my-6">
        <div className="text-skin-primary mr-3">
          <FiFlag />
        </div>
        <div className="font-custom font-semibold text-tiny text-skin-base text-center tracking-title">
          {`My ${goalName} goal`}
        </div>
      </div>
      <div className="font-custom font-semibold text-base text-skin-base text-center tracking-title mb-5">
        On the
      </div>
      <div className="flex flex-row justify-center">
        <SelectResumeDate
          activeOption={activeDateOption}
          onClick={(selected: number) => {
            if (selected === 0) {
              goal.setResumeAtDate(nextMonth);
              maturiryDate();
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
          title={`${goal.maturityDate}`}
        />
      </div>
    </div>
  );
};
