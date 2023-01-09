import React from "react";
import grow from "client/assets/images/savings/grow.svg";
import sky from "client/assets/images/savings/sky.svg";
import { FiBriefcase, FiFlag } from "react-icons/fi";
import GoalCreationProgress from "client/pages/components/overview/GoalCreationProgress";
import MainButton from "client/pages/components/MainButton";
const OverviewTrackGoalCreationProgress = () => {
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
            children={<FiBriefcase color="#04506e" size="0.875rem" />}
            title="Add monthly income"
            subtitle="Budget and save with ease"
          />
          <GoalCreationProgress
            children={<FiFlag color="#04506e" size="0.875rem" />}
            title="Create a goal"
            subtitle="Save and grow with us"
          />
          <GoalCreationProgress
            children={<FiBriefcase color="#04506e" size="0.875rem" />}
            title="Link an account"
            subtitle="Track your goal with ease"
          />
          <GoalCreationProgress
            children={<FiBriefcase color="#04506e" size="0.875rem" />}
            title="Add savings trigger"
            subtitle="Boost your savings journey"
            divider={false}
          />
        </div>
        <div className="mt-6">
          <MainButton title="Start your journey" />
        </div>
      </div>
    </>
  );
};
export default OverviewTrackGoalCreationProgress;
