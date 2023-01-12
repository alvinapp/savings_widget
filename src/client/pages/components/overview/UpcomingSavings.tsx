import React from "react";
import UpcomingSavingsCard from "client/pages/components/UpcomingSavingsCard";
import UpcomingSaving from "client/models/UpcomingSaving";

type MyUpcomingSavingsProps = {
  upcomingSavings: Array<UpcomingSaving>;
};
export const UpcomingSavings = ({
  upcomingSavings,
}: MyUpcomingSavingsProps) => {
  return (
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
  );
};
