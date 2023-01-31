import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { NotificationsSettingsCard } from "../components/settings/NotificationsSettingsCard";

export const NotificationSettings = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative pt-6 w-screen h-screen">
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
      <div className="flex flex-row mx-3.5 mt-7">
        <NotificationsSettingsCard />
      </div>
    </div>
  );
};
