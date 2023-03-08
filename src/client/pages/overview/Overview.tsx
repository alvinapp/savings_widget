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
import OverviewTrackGoalCreationProgress from "../components/overview/OverviewTrackGoalCreationProgress";
import checkStatusOfGoalCreation from "client/api/user-goal-creation-status";
import useGoalCreationStore from "client/store/goalCreationStatus";
import useUserStore from "client/store/userStore";
import { getConfirmedGoals, totalContribution } from "client/api/goal";
import useGoalStore from "client/store/goalStore";
import { NotificationCard } from "../components/overview/NotificationCard";
import { ToastContainer } from "react-toastify";
import { showCustomToast } from "client/utils/Toast";
import useNotificationStore from "client/store/notificationStore";
import { TailSpin } from "react-loader-spinner";
const Overview = () => {
  const navigate = useNavigate();
  const goal = useGoalStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state: any) => state.setUser);
  const setGoalCreationStatus = useGoalCreationStore(
    (state: any) => state.setGoalCreationStatus
  );
  const notificationsStore = useNotificationStore((state: any) => state) ?? [];
  const authenticateUser = async () => {
    getToken(configuration).then((res) => {
      if (typeof res.user !== "undefined") {
        setUser(res.user);
        setToken(res.token);
      } else {
        navigate("/");
        showCustomToast({ message: "The sdk key is invalid" });
      }
    });
  };
  const checkUserStatus = async () => {
    checkStatusOfGoalCreation(configuration).then((res) => {
      setGoalCreationStatus(res);
    });
  };
  const fetchConfimedGoals = async () => {
    getConfirmedGoals({ configuration: configuration }).then((result) => {
      if (result) {
        goal.setConfirmedGoals(result);
      }
    });
  };
  const fetchTotalContribution = async () => {
    totalContribution({ configuration: configuration }).then((result) => {
      if (result) {
        goal.setTotalContribution(result.total_contributions);
      }
    });
  };
  const { data } = useQuery(["token"], () => authenticateUser, {
    refetchOnWindowFocus: false,
  });
  const { data: goalCreationStatusData } = useQuery(
    ["checkStatusOfGoalCreation"],
    () => checkUserStatus,
    { enabled: !!configuration.token }
  );
  const { data: confirmedGoals } = useQuery(
    "confirmed-goals",
    () => fetchConfimedGoals,
    { enabled: !!configuration.token }
  );
  const { data: totalContributions } = useQuery(
    "total-contributions",
    () => fetchTotalContribution,
    { enabled: !!configuration.token }
  );
  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden no-scrollbar px-3.5 relative">
      <div className="mt-4">
        <NavBar
          children={
            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center justify-center">
                <NotificaitonsButton
                  onClick={() =>
                    configuration.token ? navigate("/notifications") : null
                  }
                  notificationCount={notificationsStore.notifications.length}
                />
                <div className="ml-6 mb-2">
                  <SettingsButton
                    onClick={() =>
                      configuration.token ? navigate("/settings") : null
                    }
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="mt-6 flex flex-row justify-center">
        <BalanceView balance={goal.totalContribution} currency="₦" />
      </div>
      <div className="mt-6">
        {/* <NotificationCard amount={250000.54} /> */}
      </div>
      {goal.confirmedGoals.length === 0 ? (
        <OverviewTrackGoalCreationProgress />
      ) : (
        <ShowGoalsInOverview />
      )}
      {goal.confirmedGoals.length > 0 ? (
        <div className="fixed bottom-4 right-4">
          <AddGoalButton
            onClick={() => {
              navigate("/goal-creation");
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      <ToastContainer />
    </div>
  );
};
export default Overview;
