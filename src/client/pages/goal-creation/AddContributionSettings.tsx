import React, { useState } from "react";
import TabFilter from "client/pages/components/TabFilter";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { Amount } from "client/pages/components/Amount";
import ReactSlider from "react-slider";
import CloseButton from "../components/CloseButton";
import { BottomSheetFooter } from "../components/goal-creation/BottomSheetFooter";
import WeeklyContributionSelector from "../components/goal-creation/WeeklyContributionSelector";
import { MonthlyContributionSelector } from "../components/goal-creation/MonthlyContributionSelector";
import useUserStore from "client/store/userStore";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import { useQuery } from "react-query";
import {
  contributionMaturityDate,
  saveGoalContributionSettings,
  updateGoalContributionSettings,
} from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import { convertDate, rightDateFormat } from "client/utils/Formatters";
import { dateFormat } from "client/utils/Formatters";
type AddContributionSettingsProps = {
  onClick?: () => void;
  updatingGoal?: boolean;
};
export const AddContributionSettings = ({
  onClick,
  updatingGoal = false,
}: AddContributionSettingsProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [maturityDateText, setMaturityDateText] = useState("");
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
  const monthlyIncome = useMonthlyIncomeStore(
    (state: any) => state.monthlyIncome
  );
  const user = useUserStore((state: any) => state.user);
  const monthlyIncomeAmount = monthlyIncome || user.income;
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const goal = useGoalStore((state: any) => state);
  const weeklyCronString = `every ${goalContributionSettings.weekDayToContibute}`;
  const monthlyCronString = `every ${goalContributionSettings.monthlyWeek} ${goalContributionSettings.weekDayOfTheMonth}`;

  const {
    isFetching: saveContributionFetching,
    refetch: saveContributionSettings,
  } = useQuery(
    "save-contribution-settings",
    () =>
      saveGoalContributionSettings({
        configuration: configuration,
        data: {
          cron_string: tabIndex === 1 ? monthlyCronString : weeklyCronString,
          savings_amount: goalContributionSettings.contributionAmount,
          contribute_from: convertDate(
            goalContributionSettings.startingFromDate.toString()
          ),
        },
        goalId: goal.contributionSettingsGoalId,
      }).then((result) => {
        if (result.frequency !== "") {
          goalContributionSettings.setContributionFrequency(result.frequency);
          goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
      }),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
  const {
    isFetching: updateContributionFetching,
    refetch: updateContributionSettings,
  } = useQuery(
    "update-contribution-settings",
    () =>
      updateGoalContributionSettings({
        configuration: configuration,
        data: {
          cron_string: tabIndex === 1 ? monthlyCronString : weeklyCronString,
          savings_amount: goalContributionSettings.contributionAmount,
          contribute_from: convertDate(
            goalContributionSettings.startingFromDate.toString()
          ),
        },
        goalId: goal.confirmedGoal.id,
      }).then((result) => {
        if (result.frequency !== "") {
          goalContributionSettings.setContributionFrequency(result.frequency);
          goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
      }),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
  const { isFetching: fetchingMaturityDate, refetch: fetchMaturityDate } =
    useQuery(
      "fetch-maturity-date",
      () =>
        contributionMaturityDate({
          configuration: configuration,
          data: {
            goal_amount: goal.goalAmount,
            frequency: tabIndex === 0 ? "weekly" : "monthly",
            contribution_amount: goalContributionSettings.contributionAmount,
            date_str: rightDateFormat(
              goalContributionSettings.startingFromDate.toString()
            ),
          },
        }).then((result) => {
          if (result) {
            setMaturityDateText(result.maturity_date);
          }
        })
      // {
      //   refetchOnWindowFocus: true,
      //   enabled: false,
      // }
    );
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
          onClick={(tab: any) => {
            setTabIndex(tab.tab_id);
            if (tab.tab_id === 0) {
              goalContributionSettings.setContributionAmount(
                (monthlyIncomeAmount * 5) / 100
              );
              goal.setPercentageOfSavings(5);
            } else {
              goalContributionSettings.setContributionAmount(
                (monthlyIncomeAmount * 20) / 100
              );
              goal.setPercentageOfSavings(20);
            }
          }}
        />
      </div>
      <div className="mb-2.5 flex flex-row justify-center items-center">
        <Amount balance={goalContributionSettings.contributionAmount} />
      </div>
      <div className="mb-6 px-10">
        <ReactSlider
          value={goal.percentageOfSavings}
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          marks={20}
          renderThumb={(props, state) => (
            <div {...props}>{`${state.valueNow}%`}</div>
          )}
          onChange={(value, index) => {
            goalContributionSettings.setContributionAmount(
              (monthlyIncomeAmount * value) / 100
            );
            goal.setPercentageOfSavings(value);
            fetchMaturityDate();
          }}
        />
      </div>
      <div className="font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center mb-4">
        {`${goal.percentageOfSavings}% of my monthly net income`}
      </div>
      <div className="font-workSans font-semibold text-base text-skin-base text-center tracking-title mb-5">
        On
      </div>
      {tabIndex === 1 ? (
        <MonthlyContributionSelector />
      ) : (
        <WeeklyContributionSelector />
      )}
      <div className="mt-12">
        <BottomSheetFooter
          title={`${maturityDateText}`}
          onClick={() =>
            updatingGoal
              ? updateContributionSettings()
              : saveContributionSettings()
          }
          loading={saveContributionFetching || updateContributionFetching}
        />
      </div>
    </div>
  );
};
