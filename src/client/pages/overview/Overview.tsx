import React from "react";
import NavBar from "client/pages/components/NavBar";
import SettingsButton from "client/pages/components/SettingsButton";
import NotificaitonsButton from "client/pages/components/NotificationButton";
import BalanceView from "../components/BalanceView";
import { ShowGoalsInOverview } from "../components/overview/ShowGoalsInOverview";
import { AddGoalButton } from "../components/AddGoalButton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import getToken from "client/api/token";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { postData } from "client/api/api";
const Overview = () => {
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const authenticateUser = async () => {
    getToken(configuration).then((res) => {
      setToken(res.token);
    });
  };
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery(
    ["token"],
    () => authenticateUser,
    { refetchOnWindowFocus: false }
  );
  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden no-scrollbar px-3.5 relative">
      <div className="mt-4">
        <NavBar
          children={
            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center justify-center">
                <NotificaitonsButton
                  onClick={() => navigate("/notifications")}
                  notificationCount={1}
                />
                <div className="ml-6 mb-2">
                  <SettingsButton onClick={() => navigate("/settings")} />
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
