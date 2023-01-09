import Goal from "client/models/Transaction";
import Transaction from "client/models/Transaction";
import React from "react";
import TransactionCard from "../GoalCard";

type MyGoalsProps = {
  goals: Array<Transaction>;
};
export const MyGoals = ({ goals }: MyGoalsProps) => {
  return (
    <div>
      {goals.map((goal: Goal, i) => {
        return (
          <TransactionCard
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
