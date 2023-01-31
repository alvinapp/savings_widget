import { goalSettingTabs } from "client/utils/MockData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddGoalButton } from "../components/AddGoalButton";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import TabFilter from "../components/TabFilter";

export const GoalSettings = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="flex flex-col h-screen w-screen pt-6 relative">
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
              <NavBarTitle title="Goals" />
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-10 w-10"></div>
            </div>
          </div>
        }
      />
      <div className="flex flex-row overflow-x-auto ml-3.5 mt-2 no-scrollbar">
        <TabFilter
          tabs={goalSettingTabs}
          activeTab={tabIndex}
          onClick={(tab: any) => setTabIndex(tab.tab_id)}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        <AddGoalButton />
      </div>
    </div>
  );
};
