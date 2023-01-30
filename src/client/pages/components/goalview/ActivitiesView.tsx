import TransactionCard from "../TransactionCard";
import Transaction from "client/models/Transaction";

type ActivitiesViewProps = {
  activities: Array<Transaction>;
};
export const ActivitiesView = ({activities }: ActivitiesViewProps) => {
  return (
    <div className="overflow-y-auto px-3.5">
      {activities.map((activity:Transaction, i) => {
        return (
          <TransactionCard
            goalName={activity.goalName}
            key={i}
            amount={activity.amount}
            emoji={activity.emoji}
            type={activity.type}
            activityName={activity.activityName}
            transacted_at={activity.transacted_at}
          />
        );
      })}
    </div>
  );
};
