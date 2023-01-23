import React, { useState } from "react";
import TabFilter from "client/pages/components/TabFilter";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { Amount } from "client/pages/components/Amount";
import ReactSlider from "react-slider";
import WeekDay from "../components/goal-creation/WeeklyDaySelector";
import CloseButton from "../components/CloseButton";
import SelectDate from "../components/goal-creation/SelectDate";
import { BottomSheetFooter } from "../components/goal-creation/BottomSheetFooter";
import WeeklyContributionSelector from "../components/goal-creation/WeeklyContributionSelector";
import { MonthlyContributionSelector } from "../components/goal-creation/MonthlyContributionSelector";
type AddContributionSettingsProps = {
  onClick?: () => void;
};
export const AddContributionSettings = ({
  onClick,
}: AddContributionSettingsProps) => {
  const currency = "₦";
  const [tabIndex, setTabIndex] = useState(0);
  const contributionSettingsTabs = [
    {
      tab_id: 0,
      name: "Weekly",
      icon: <FiToggleLeft />,
    },
    {
      tab_id: 1,
      name: "Monthly",
      icon: <FiToggleRight />,
    },
  ];
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 right-2">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-row justify-center">
        <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center">
          I will contribute
        </div>
      </div>
      <div className="mb-6">
        <TabFilter
          tabs={contributionSettingsTabs}
          activeTab={tabIndex}
          onClick={(tab: any) => setTabIndex(tab.tab_id)}
        />
      </div>
      <div className="mb-2.5 flex flex-row justify-center items-center">
        <Amount balance={10000} />
      </div>
      <div className="mb-6 px-10">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          marks={20}
        />
      </div>
      <div className="font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center mb-4">
        5% of my monthly net income
      </div>
      <div className="font-workSans font-semibold text-base text-skin-base text-center tracking-title mb-5">
        On
      </div>
      {tabIndex == 1 ? (
        <MonthlyContributionSelector />
      ) : (
        <WeeklyContributionSelector />
      )}
      <div className="mt-12">
        <BottomSheetFooter
          title={`Save weekly ${currency}10,000 by Thur, Jul 8th 2023.`}
        />
      </div>
    </div>
  );
};
