import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Goal from "client/models/Goal";
import { FiPause, FiPlay } from "react-icons/fi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getConfirmedGoals, resumeGoal } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import goalStar from "client/assets/images/savings/complete-goal-star.svg";
import goalGreenFlag from "client/assets/images/savings/attained_flag.svg";
import { useEffect } from "react";

const GoalCard = ({
  id,
  name,
  amount,
  progress,
  status,
  imageUrl,
  onClick,
  is_active,
}: Goal) => {
  const currencySymbol = "₦";
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const goal = useGoalStore((state: any) => state);
  const queryClient = useQueryClient();

  const handleResume = async (event: any) => {
    event.stopPropagation();
    resumeTheGoal.mutate();
  };

  const resumeTheGoal = useMutation(
    () => resumeGoal({ configuration, goalId: id, data: {} }),
    {
      onSuccess: async (result) => {
        if (result) {
          const confirmedGoals = await getConfirmedGoals({ configuration });
          goal.setConfirmedGoals(confirmedGoals);
        }
      },
    }
  );

  return (
    <div
      className="rounded-lg bg-white px-4 py-4 w-auto shadow-card mb-2"
      onClick={onClick}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-4">
              <div className="h-10 w-10 relative">
                <CircularProgressbarWithChildren
                  value={progress}
                  styles={buildStyles({
                    pathColor: `${is_active ? "#33982A" : "#D0DDEA"}`,
                    trailColor: `${is_active ? "#D6EAD4" : "#D0DDEA"}`,
                  })}
                >
                  <div className="">
                    <img
                      className="rounded-full max-w-full align-middle border-none h-8 w-8
                      "
                      src={imageUrl ?? ""}
                    />
                  </div>
                </CircularProgressbarWithChildren>
                {is_active ? (
                  <div></div>
                ) : (
                  <div className="absolute bottom-0 left-1 bg-skin-accent shadow-knob w-2.5 h-2.5 rounded-full flex items-center justify-center font-custom text-xs font-semibold tracking-tight p-0.5 text-skin-neutral">
                    <FiPause color="#4E6783" />
                  </div>
                )}
                {progress === 100 ? (
                  <div className="absolute -top-4.5">
                    <img src={goalStar} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-custom text-sm font-semibold text-skin-title text-start text-ellipsis overflow-hidden whitespace-nowrap w-40 tracking-tab_text"
                id="al-transaction-card--merchant-name"
              >
                {name}
              </div>
              <div
                className={`font-custom text-xs font-medium text-skin-subtitle tracking-wide text-start mt-1`}
              >
                {status === null ? "" : status}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {is_active ? (
            <div
              className={`font-custom text-sm font-medium ${
                progress == 100 ? "text-skin-success" : "text-skin-base"
              } flex flex-row items-center`}
            >
              {progress == 100 ? (
                <div className="w-3 h-3">
                  <img src={goalGreenFlag} />
                </div>
              ) : (
                <div></div>
              )}
              <span className="mx-1">{currencySymbol}</span>
              {Math.round(amount).toLocaleString("en-US")}
            </div>
          ) : (
            <button
              className="h-8 w-8 rounded-full bg-skin-primary flex justify-center items-center"
              onClick={handleResume}
            >
              <FiPlay fill="#ffffff" color="#ffffff" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default GoalCard;
