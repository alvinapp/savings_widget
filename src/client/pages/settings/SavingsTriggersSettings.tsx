import Trigger from "client/models/Trigger";
import { triggers } from "client/utils/MockData";
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import TriggerCard from "../components/TriggerCard";
import { fetchAllTriggers } from "client/api/savings-triggers";
import { useQuery } from "react-query";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useSavingsTriggerStore from "client/store/savingsTriggerStore";
import SavingsTriggerCardSkeleton from "../savings-triggers/SavingsTriggerSkeleton";

type SavingsTriggersSettingsProps = {
  fetching?: boolean;
};
const SavingsTriggersSettings = ({
  fetching,
}: SavingsTriggersSettingsProps) => {
  const navigate = useNavigate();
  const savingsTriggersStore = useSavingsTriggerStore((state: any) => state);
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
        {fetching
          ? Array(10)
              .fill("a")
              .map((_, i) => {
                return <SavingsTriggerCardSkeleton key={i} />;
              })
          : savingsTriggersStore.allSavingsTriggers.map(
              (trigger: any, i: any) => {
                return (
                  <TriggerCard
                    key={trigger.id}
                    image={trigger.image}
                    percentage={trigger.round_up_percentage}
                    appliedTo={trigger.merchant_name}
                    created_at={trigger.created_at}
                  />
                );
              }
            )}
      </div>
      <div className="fixed bottom-4 right-4">
        <AddButton
          onClick={() => {
            // navigate("/savings-trigger");
          }}
        />
      </div>
    </div>
  );
};
export default SavingsTriggersSettings;
