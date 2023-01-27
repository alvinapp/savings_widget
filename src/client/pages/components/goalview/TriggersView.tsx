import TriggerCard from "../TriggerCard";
import Trigger from "client/models/Trigger";
import { AddRuleButton } from "./AddRuleButton";
import { useNavigate } from "react-router-dom";

type TriggersViewProps = {
  triggers: Array<Trigger>;
};
export const TriggersView = ({ triggers }: TriggersViewProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div>
        {triggers.map((trigger: Trigger, i) => {
          return (
            <TriggerCard
              key={i}
              triggerName={trigger.triggerName}
              image={trigger.image}
              percentage={trigger.percentage}
              appliedTo={trigger.appliedTo}
              created_at={trigger.created_at}
            />
          );
        })}
      </div>
      <div className="mt-2">
        <AddRuleButton
          label="Add rule"
          onClick={() => navigate("/savings-trigger")}
        />
      </div>
    </div>
  );
};
