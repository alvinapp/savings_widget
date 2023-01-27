import React from "react";
import NavBar from "client/pages/components/NavBar";
import SettingsButton from "client/pages/components/SettingsButton";
import NotificaitonsButton from "client/pages/components/NotificationButton";
import BalanceView from "../components/BalanceView";
import { ShowGoalsInOverview } from "../components/overview/ShowGoalsInOverview";
import { AddGoalButton } from "../components/AddGoalButton";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden no-scrollbar px-3.5 relative">
      <div className="mt-6">
        <NavBar
          children={
            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center justify-center">
                <div>
                  <NotificaitonsButton
                    onClick={() => {}}
                    notificationCount={1}
                  />
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
        <BalanceView balance={300000} currency="₦" />
      </div>
      {/* <OverviewTrackGoalCreationProgress /> */}
      <ShowGoalsInOverview />
      <div className="absolute bottom-4 right-4">
        <AddGoalButton
          onClick={() => {
            navigate("/goal-creation");
          }}
        />
      </div>
    </div>
  );
};
export default Overview;
