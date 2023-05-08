import React, { useState } from "react";
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
import TransactionCardSkeleton from "../components/TransactionCardSkeleton";
import TabFilter from "../components/TabFilter";
import { UpcomingSavings } from "../components/overview/UpcomingSavings";
import { MyGoals } from "../components/overview/MyGoals";
import { upcomingSavings, tabs } from "client/utils/MockData";
import getBankAccounts from "client/api/accounts";
import useBankAccountStore from "client/store/bankAccountStore";
import { element } from "prop-types";
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
  const [tabIndex, setTabIndex] = useState(0);
  const accountStore = useBankAccountStore((state: any) => state);
  const allConfirmedGoals =
    useGoalStore((state: any) => state.confirmedGoals) ?? [];

  const completeGoals = goal.confirmedGoals.filter(
    (element: any) => element.progress === 100
  );
  const uncompleteGoals = goal.confirmedGoals.filter(
    (element: any) => element.progress !== 100
  );
  const { data } = useQuery(
    ["token"],
    () =>
      getToken(configuration).then((res) => {
        if (typeof res.user !== "undefined") {
          setUser(res.user);
          setToken(res.token);
        } else {
          navigate("/");
          showCustomToast({ message: "The sdk key is invalid" });
        }
      }),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { data: goalCreationStatusData } = useQuery(
    ["checkStatusOfGoalCreation"],
    () =>
      checkStatusOfGoalCreation(configuration).then((res) => {
        setGoalCreationStatus(res);
      }),
    { enabled: !!configuration.token }
  );
  const {
    isFetching: confirmedGoalsFetching,
    data: confirmedGoals,
    isSuccess: goalsFetched,
  } = useQuery(
    "confirmed-goals",
    () =>
      getConfirmedGoals({ configuration: configuration }).then((result) => {
        if (result) {
          goal.setConfirmedGoals(result);
        }
      }),
    { enabled: !!configuration.token, refetchOnWindowFocus: false }
  );
  const { data: totalContributions } = useQuery(
    "total-contributions",
    () =>
      totalContribution({ configuration: configuration }).then((result) => {
        if (result) {
          goal.setTotalContribution(result.total_contributions);
        }
      }),
    { enabled: !!configuration.token }
  );

  const { isFetching: fetchingBankAccounts } = useQuery(
    "bank-accounts",
    () =>
      getBankAccounts(configuration).then((result) => {
        if (result) {
          accountStore.setAccounts(result);
        }
      }),
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
      {(goalsFetched && goal.confirmedGoals.length > 0) ||
      (confirmedGoalsFetching && goal.confirmedGoals.length > 0) ? (
        <>
          <div className="mt-6">
            <NotificationCard amount={goal.totalContribution} />
          </div>
          <div className="mt-6">
            <TabFilter
              tabs={tabs}
              activeTab={tabIndex}
              onClick={(tab: any) => setTabIndex(tab.tab_id)}
            />
            <div className="mt-4">
              {tabIndex == 1 ? (
                <UpcomingSavings upcomingSavings={upcomingSavings} />
              ) : (
                <MyGoals
                  goals={uncompleteGoals}
                  completeGoals={completeGoals}
                />
              )}
            </div>
          </div>
        </>
      ) : goalsFetched && goal.confirmedGoals.length === 0 ? (
        <OverviewTrackGoalCreationProgress />
      ) : (
        <div className="mt-1 mb-4">
          {Array(10)
            .fill("a")
            .map((_, i) => {
              return <TransactionCardSkeleton key={i} />;
            })}
        </div>
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
