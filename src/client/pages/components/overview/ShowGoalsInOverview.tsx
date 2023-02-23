import React, { useState } from "react";
import TabFilter from "client/pages/components/TabFilter";
import { MyGoals } from "./MyGoals";
import { UpcomingSavings } from "./UpcomingSavings";
import { NotificationCard } from "./NotificationCard";
import { upcomingSavings, goals, tabs } from "client/utils/MockData";
import useGoalStore from "client/store/goalStore";
export const ShowGoalsInOverview = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const confirmedGoals = useGoalStore((state: any) => state.confirmedGoals);
  return (
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
          <MyGoals goals={confirmedGoals} />
        )}
      </div>
    </div>
  );
};
