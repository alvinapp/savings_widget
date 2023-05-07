import Goal from "client/models/Goal";
import Transaction from "client/models/Goal";
import React, { useState } from "react";
import GoalCard from "client/pages/components/GoalCard";
import TransactionCard from "../GoalCard";
import { useNavigate } from "react-router-dom";
import useGoalStore from "client/store/goalStore";
import { resumeAGoal } from "client/utils/ResumeGoal";

type MyGoalsProps = {
  goals: Array<Goal>;
  completeGoals?: Array<Goal>;
};
export const MyGoals = ({ goals, completeGoals }: MyGoalsProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const confirmedGoal = useGoalStore((state: any) => state);
  return (
    <div>
      {goals.map((goal: any, i) => {
        return (
          <GoalCard
            key={i}
            onClick={() => {
              confirmedGoal.setConfirmedGoal(goal);
              navigate("/goal-view");
            }}
            id={goal.id}
            name={goal.name}
            amount={goal.amount}
            progress={goal.progress}
            imageUrl={goal.image_url.image_url}
            status={goal.status}
            transacted_at={goal.transacted_at}
            is_active={goal.is_active}
            resume={() => {}}
          />
        );
      })}
      <div className="flex flex-col mt-5">
        {completeGoals && completeGoals?.length > 0 ? (
          <div>
            <div
              className="flex flex-row justify-center"
              onClick={() => setOpen(!open)}
            >
              <div className="rounded-full flex justify-center items-center bg-skin-secondary1WithOpacity w-32 py-1">
                <div className="text-skin-neutral tracking-longtext font-poppins font-semibold text-xs">
                  {open ? " Hide completed" : "Show completed"}
                </div>
              </div>
            </div>
            {open ? (
              <div className="mt-3">
                {completeGoals.map((goal: any, i) => {
                  return (
                    <GoalCard
                      key={i}
                      onClick={() => {
                        confirmedGoal.setConfirmedGoal(goal);
                        navigate("/goal-view");
                      }}
                      id={goal.id}
                      name={goal.name}
                      amount={goal.amount}
                      progress={goal.progress}
                      imageUrl={goal.image_url.image_url}
                      status={goal.status}
                      transacted_at={goal.transacted_at}
                      is_active={goal.is_active}
                      resume={() => {}}
                    />
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
