import { getConfirmedGoals, resumeGoal } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import useNotificationStore from "client/store/notificationStore";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { NotificaitonCard } from "../components/notificaitons/NotificaitonCard";
import { NotificationEmptyState } from "./NotificationEmptyState";
const Notifications = () => {
  const navigate = useNavigate();
  const notificaitonsStore = useNotificationStore((state: any) => state) ?? [];
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const goal = useGoalStore((state: any) => state);
  const resumeAGoal = async (id: number) => {
    resumeGoal({
      configuration: configuration,
      goalId: id,
      data: {},
    }).then((result) => {
      if (result) {
        getConfirmedGoals({ configuration: configuration }).then((result) => {
          goal.setConfirmedGoals(result);
        });
      }
    });
  };
  return (
    <div className="flex flex-col relative pt-6 h-screen w-screen">
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
              <NavBarTitle title="Notifications" />
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-10 w-10"></div>
            </div>
          </div>
        }
      />
      <div className="flex flex-col mt-9 mx-3.5">
        {notificaitonsStore.notifications.length > 0 ? (
          notificaitonsStore.notifications.map((notification: any) => {
            return (
              <NotificaitonCard
                date={notification.time}
                description={notification.message}
                image={notification.image.image_url}
                type={notification.type}
                resume={() => {}}
              />
            );
          })
        ) : (
          <NotificationEmptyState />
        )}
      </div>
    </div>
  );
};
export default Notifications;
