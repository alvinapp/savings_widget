import React from "react";
import NavBar from "client/pages/components/NavBar";
import BackButton from "client/pages/components/BackButton";
import { useNavigate } from "react-router-dom";
import CloseButton from "client/pages/components/CloseButton";
import { Header } from "client/pages/components/goal-creation/Header";
import { FiFlag } from "react-icons/fi";
import { BuildGoalCard } from "../components/goal-creation/BuildGoalCard";
import { predefinedGoals } from "client/utils/MockData";
import Goal from "client/models/Goal";
import CreateGoalCard from "../components/goal-creation/CreateGoalCard";
import useGoalStore from "client/store/goalStore";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";

const CreateSavingsGoal = () => {
  const navigate = useNavigate();
  const goalStore = useGoalStore((state: any) => state);
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const setChosenGoal = goalStore.setGoal;
  return (
    <div className="h-screen w-screen relative">
      <div className="bg-curvedBg pt-6 bg-no-repeat h-64 bg-cover">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                onClick={() => {
                  navigate(-1);
                }}
              />
              <CloseButton
                onClick={() => {
                  navigate(-3);
                }}
              />
            </div>
          }
        />
        <div className="px-3.5 pt-6 pb-4">
          <Header
            title="Create a savings goal."
            children={<FiFlag color="#6F89A5" />}
            subtitle="Excepteur sint occaecat cupidatat non proident"
          />
        </div>
        <div className="mt-16 mx-3.5">
          <BuildGoalCard
            title="Let's buld one together"
            click={() => {
              goalStore.setGoalImageUrl("");
              goalStore.setGoalName("");
              goalStore.setGoalAmount("");
              setChosenGoal({});
              goalContributionSettings.setContributionFrequency("");
              navigate("/add-goal-details");
            }}
          />
        </div>
        <div className="mx-3.5 mt-6">
          <div className="font-workSans text-skin-base text-sm font-semibold tracking-title mb-3">
            Tailored inspirations just for you
          </div>
          <div className="tracking-widest font-poppins text-skin-secondary text-xxxs">
            Excepteur sint occaecat cupidatat non proident
          </div>
        </div>
        <div className=" mt-4.5 mx-3.5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {predefinedGoals.map((goal: Goal, index) => {
              return (
                <div className="mb-4">
                  <CreateGoalCard
                    key={index}
                    goalImage={goal.imageUrl}
                    goalName={goal.name}
                    onClick={() => {
                      goalStore.setGoalImageUrl(goal.imageUrl);
                      goalStore.setGoalName(goal.name);
                      goalStore.setGoalAmount(goal.amount);
                      setChosenGoal(goal);
                      goalContributionSettings.setContributionFrequency("");
                      navigate("/add-goal-details");
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateSavingsGoal;
