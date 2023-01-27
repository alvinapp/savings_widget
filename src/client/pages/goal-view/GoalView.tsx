import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import overlay from "client/assets/images/savings/overlay.svg";
import goalviewOverlay from "client/assets/images/savings/goalviewoverlay.svg";
import NavBarTitle from "../components/NavBarTitle";
import SettingsButton from "../components/SettingsButton";
import settingNeutral from "../../assets/images/savings/settings-neutral.svg";
import { GoalViewBalanceView } from "../components/goalview/GoalViewBalanceView";
import { CustomProgressBar } from "../components/ProgressBar";
import { AddGoalButton } from "../components/AddGoalButton";
import { ActionComponent } from "../components/goalview/ActionComponent";
import { PauseButton } from "../components/PauseButton";
import { MoreButton } from "../components/MoreButton";
import { AddFundsButton } from "../components/AddFundsButton";
import TabFilter from "../components/TabFilter";
import { FiActivity, FiTrendingUp } from "react-icons/fi";
import { ActivitiesView } from "../components/goalview/ActivitiesView";
import { activities, triggers } from "client/utils/MockData";
import { TriggersView } from "../components/goalview/TriggersView";
import { BottomSheet } from "react-spring-bottom-sheet";
import { PauseGoal } from "./PauseGoal";

export const GoalView = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [openPauseGoalSheet, setOpenPauseGoalSheet] = useState(false);
  const goalviewTabs = [
    {
      tab_id: 0,
      name: "Activity",
      icon: <FiActivity />,
    },
    {
      tab_id: 1,
      name: "Triggers",
      icon: <FiTrendingUp />,
    },
  ];
  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            className="absolute top-0 right-0 left-0"
          />
          <img
            src={goalviewOverlay}
            className="absolute object-cover w-screen"
          />
          <div className="absolute top-28 left-0 right-0 flex flex-col items-center">
            <GoalViewBalanceView contributedAmount={20000} amount={1085776} />
            <div className="mt-8 w-screen px-3.5">
              <CustomProgressBar progressPercentage={30} />
            </div>
            <div className="text-white/80 font-semibold font-poppins text-xs tracking-subtitle text-center mt-5">
              12months
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 absolute top-0 right-0 left-0 px-3.5">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                background="bg-skin-base"
                onClick={() => navigate(-1)}
              />
              <NavBarTitle title="Spend responsibly" titleColor="text-white" />
              <SettingsButton background="bg-skin-base" icon={settingNeutral} />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-72 bottom-0 px-3.5 pt-9">
        <div className="flex flex-row justify-center">
          <ActionComponent
            child={
              <AddFundsButton
                onClick={() => {
                  navigate("");
                }}
              />
            }
            title="Add funds"
          />
          <ActionComponent
            child={
              <PauseButton
                size="h-12 w-12"
                onClick={() => {
                  setOpenPauseGoalSheet(true);
                }}
              />
            }
            title="Pause goal"
          />
          <ActionComponent
            child={
              <MoreButton
                size="h-12 w-12"
                onClick={() => {
                  navigate("");
                }}
              />
            }
            title="More"
          />
          <BottomSheet
            open={openPauseGoalSheet}
            style={{
              borderRadius: 24,
            }}
            children={
              <PauseGoal onClick={() => setOpenPauseGoalSheet(false)} />
            }
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="border rounded-2xl mt-6 bg-skin-divider"></div>
        <div className="mt-4">
          <TabFilter
            tabs={goalviewTabs}
            activeTab={tabIndex}
            onClick={(tab: any) => setTabIndex(tab.tab_id)}
          />
        </div>
        <div className="mt-5">
          {tabIndex == 0 ? (
            <ActivitiesView activities={activities} />
          ) : (
            <TriggersView triggers={triggers} />
          )}
        </div>
      </div>
    </div>
  );
};
