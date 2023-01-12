import React, { useState } from "react";
import TabFilter from "client/pages/components/TabFilter";
import { MyGoals } from "./MyGoals";
import { UpcomingSavings } from "./UpcomingSavings";
import { NotificationCard } from "./NotificationCard";
import { upcomingSavings, goals, tabs } from "client/utils/MockData";
export const ShowGoalsInOverview = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-6">
      <div className="mb-6">
        <NotificationCard amount={250000.54} />
      </div>
      <TabFilter
        tabs={tabs}
        activeTab={tabIndex}
        onClick={(tab: any) => setTabIndex(tab.tab_id)}
      />
      <div className="mt-4">
        {tabIndex == 1 ? (
          <UpcomingSavings upcomingSavings={upcomingSavings} />
        ) : (
          <MyGoals goals={goals} />
        )}
      </div>
    </div>
  );
};
