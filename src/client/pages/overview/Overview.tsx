import React from "react";
import AddButton from "client/pages/components/AddButton";
import InfoButton from "client/pages/components/InfoButton";
import NavBar from "client/pages/components/NavBar";
import Routes from "client/pages/routes";
import SettingsButton from "../components/SettingsButton";
import NotificaitonsButton from "../components/NotificationButton";
import BalanceView from "../components/BalanceView";
import grow from "client/assets/images/savings/grow.svg";
import sky from "client/assets/images/savings/sky.svg";
import MainButton from "../components/MainButton";
import GoalCreationProgress from "../components/overview/GoalCreationProgress";
import { FiBriefcase, FiFlag } from "react-icons/fi";
const Overview = () => {
  console.log("running");
  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden no-scrollbar al-overview px-3.5">
      <div className="mt-4">
        <NavBar
          children={
            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center justify-center">
                <div>
                  <NotificaitonsButton onClick={() => {}} />
                </div>
                <div className="ml-6">
                  <SettingsButton onClick={() => {}} />
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="mt-6 flex flex-row justify-center">
        <BalanceView balance={300000.0} currency="₦" />
      </div>
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
    </div>
  );
};
export default Overview;
