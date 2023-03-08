import Goal from "client/models/Goal";
import Transaction from "client/models/Goal";
import React from "react";
import GoalCard from "client/pages/components/GoalCard";
import TransactionCard from "../GoalCard";
import { useNavigate } from "react-router-dom";
import useGoalStore from "client/store/goalStore";
import { resumeAGoal } from "client/utils/ResumeGoal";

type MyGoalsProps = {
  goals: Array<Goal>;
};
export const MyGoals = ({ goals }: MyGoalsProps) => {
  const navigate = useNavigate();
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
    </div>
  );
};
