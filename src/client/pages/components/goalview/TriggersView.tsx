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
    <div className="flex flex-col px-3.5">
      <div>
        {triggers.map((trigger: any, i) => {
          return (
            <TriggerCard
              key={trigger.id}
              triggerName={trigger.merchant_name}
              image={trigger.image}
              percentage={trigger.round_up_percentage}
              appliedTo={trigger.merchant_name}
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
