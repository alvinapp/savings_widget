import Goal from "client/models/Goal";
import Transaction from "client/models/Goal";
import React from "react";
import GoalCard from "client/pages/components/GoalCard";
import TransactionCard from "../GoalCard";
import { useNavigate } from "react-router-dom";

type MyGoalsProps = {
  goals: Array<Goal>;
};
export const MyGoals = ({ goals }: MyGoalsProps) => {
  const navigate = useNavigate();
  return (
    <div>
      {goals.map((goal: Goal, i) => {
        return (
          <GoalCard
            onClick={() => navigate("/goal-view")}
            goalName={goal.goalName}
            key={i}
            status={goal.status}
            amount={goal.amount}
            transacted_at={goal.transacted_at}
            progress={goal.progress}
            goalImage={goal.goalImage}
          />
        );
      })}
    </div>
  );
};
