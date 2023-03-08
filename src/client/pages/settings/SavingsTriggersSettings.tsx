import Trigger from "client/models/Trigger";
import { triggers } from "client/utils/MockData";
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import TriggerCard from "../components/TriggerCard";

const SavingsTriggersSettings = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen w-screen pt-6 relative">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between mr-3.5">
            <div className="flex flex-col">
              <BackButton
                background="bg-skin-base"
                onClick={() => navigate(-1)}
              />
            </div>
            <div className="flex flex-col">
              <NavBarTitle title="Savings triggers" />
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-10 w-10"></div>
            </div>
          </div>
        }
      />
      <div className="mx-3.5 mt-5">
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
      <div className="absolute bottom-4 right-4">
        <AddButton />
      </div>
    </div>
  );
};
export default SavingsTriggersSettings;
