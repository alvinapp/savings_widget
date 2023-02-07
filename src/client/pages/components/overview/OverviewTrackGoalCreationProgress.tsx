import React from "react";
import grow from "client/assets/images/savings/grow.svg";
import sky from "client/assets/images/savings/sky.svg";
import { FiBriefcase, FiFlag, FiTrendingUp } from "react-icons/fi";
import GoalCreationProgress from "client/pages/components/overview/GoalCreationProgress";
import MainButton from "client/pages/components/MainButton";
import bank from "client/assets/images/bank.svg";
import useGoalCreationStore from "client/store/goalCreationStatus";
import { useNavigate } from "react-router-dom";
const OverviewTrackGoalCreationProgress = () => {
  const goalCreationStatus = useGoalCreationStore(
    (state: any) => state.goalCreationStatus
  );
  const { has_linked_account, has_income, has_goal } = goalCreationStatus;
  const navigate = useNavigate();
  return (
    <>
      <div className="rounded-2xl my-6 pt-6 pb-4 px-3.5 shadow-card bg-overviewBg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <img src={grow} />
          </div>
          <div className="flex flex-col">
            <img src={sky} />
          </div>
        </div>
        <div className="mt-3 pr-14">
          <div className="text-skin-primary text-base font-workSans tracking-title">
            Start your savings journey with Wesley.
          </div>
        </div>
        <div className="mt-6">
          <GoalCreationProgress
            children={<FiBriefcase size="0.875rem" />}
            title="Add monthly income"
            subtitle="Budget and save with ease"
            inProgress={has_income}
          />
          <GoalCreationProgress
            children={<FiFlag size="0.875rem" />}
            title="Create a goal"
            subtitle="Save and grow with us"
            inProgress={has_goal}
          />
          <GoalCreationProgress
            children={<img src={bank} />}
            title="Link an account"
            subtitle="Track your goal with ease"
            inProgress={has_linked_account}
          />
          <GoalCreationProgress
            children={<FiTrendingUp size="0.875rem" />}
            title="Add savings trigger"
            subtitle="Boost your savings journey"
            divider={false}
          />
        </div>
        <div className="mt-6">
          <MainButton
            title="Start your journey"
            click={() => navigate("goal-creation")}
          />
        </div>
      </div>
    </>
  );
};
export default OverviewTrackGoalCreationProgress;
