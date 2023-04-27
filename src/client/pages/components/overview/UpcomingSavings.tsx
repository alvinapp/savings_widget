import React from "react";
import UpcomingSavingsCard from "client/pages/components/UpcomingSavingsCard";
import UpcomingSaving from "client/models/UpcomingSaving";
import { useNavigate } from "react-router-dom";
import { UpcomingSavingsEmptyState } from "client/pages/overview/UpcomingSavingsEmpty";

type MyUpcomingSavingsProps = {
  upcomingSavings: Array<UpcomingSaving>;
};
export const UpcomingSavings = ({
  upcomingSavings,
}: MyUpcomingSavingsProps) => {
  const navigate = useNavigate();
  return upcomingSavings.length > 0 ? (
    <div>
      {upcomingSavings.map((upcomingSaving: UpcomingSaving, i) => {
        return (
          <UpcomingSavingsCard
            goalName={upcomingSaving.goalName}
            key={i}
            amount={upcomingSaving.amount}
            due_date={upcomingSaving.due_date}
            goalImage={upcomingSaving.goalImage}
          />
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <UpcomingSavingsEmptyState />
    </div>
  );
};
