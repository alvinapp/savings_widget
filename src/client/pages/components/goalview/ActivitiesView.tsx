import TransactionCard from "../TransactionCard";
import Transaction from "client/models/Transaction";
import { GoalViewEmptyState } from "client/pages/goal-view/GoalViewEmptyState";

type ActivitiesViewProps = {
  activities: Array<Transaction>;
  goal: any;
};
export const ActivitiesView = ({ activities, goal }: ActivitiesViewProps) => {
  return (
    <div className="overflow-y-auto px-3.5">
      {activities.length === 0 ? (
        <GoalViewEmptyState />
      ) : (
        activities.map((activity: any, i) => {
          return (
            <TransactionCard
              goalName={goal.name}
              activityName="Deposit"
              key={activity.id}
              amount={activity.amount}
              emoji="🎯"
              transacted_at={activity.contribution_date}
            />
          );
        })
      )}
    </div>
  );
};
