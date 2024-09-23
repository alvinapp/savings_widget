import React, { useEffect } from "react";
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
  getScheduleFrequencyText,
  saveGoalContributionSettings,
  updateGoalContributionSettings,
} from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import {
  calculateGoalMaturityDate,
  convertDate,
  debounce,
  formatDate,
  rightDateFormat,
} from "client/utils/Formatters";
import { dateFormat } from "client/utils/Formatters";
import useCurrencyStore from "client/store/currencyStore";
type AddContributionSettingsProps = {
  onClick?: () => void;
  updatingGoal?: boolean;
};
export const AddContributionSettings = ({
  onClick,
  updatingGoal = false,
}: AddContributionSettingsProps) => {
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
  const currencySymbol = useCurrencyStore((state: any) => state.currency);
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

  const { isFetching: frequencyFetching, refetch: getFrequencyText } = useQuery(
    "frequency-text",
    () =>
      getScheduleFrequencyText({
        configuration: configuration,
        data: {
          cron_string:
            goalContributionSettings.tabIndex === 1
              ? monthlyCronString
              : weeklyCronString,
          savings_amount: goalContributionSettings.contributionAmount,
        },
      }).then((result) => {
        if (result.frequency) {
          goalContributionSettings.setContributionFrequency(result.frequency);
          goalContributionSettings.setCronString(
            goalContributionSettings.tabIndex === 1
              ? monthlyCronString
              : weeklyCronString
          );
          goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
      }),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
  // const {
  //   isFetching: saveContributionFetching,
  //   refetch: saveContributionSettings,
  // } = useQuery(
  //   "save-contribution-settings",
  //   () =>
  //     saveGoalContributionSettings({
  //       configuration: configuration,
  //       data: {
  //         cron_string:
  //           goalContributionSettings.tabIndex === 1
  //             ? monthlyCronString
  //             : weeklyCronString,
  //         savings_amount: goalContributionSettings.contributionAmount,
  //         contribute_from: convertDate(
  //           goalContributionSettings.startingFromDate.toString()
  //         ),
  //       },
  //       goalId: goal.contributionSettingsGoalId,
  //     }).then((result) => {
  //       if (result.frequency !== "") {
  //         // goalContributionSettings.setContributionFrequency(result.frequency);
  //         // goalContributionSettings.openContributionSettingsBottomSheet(false);
  //       }
  //     }),
  //   {
  //     refetchOnWindowFocus: true,
  //     enabled: false,
  //   }
  // );
  const {
    isFetching: updateContributionFetching,
    refetch: updateContributionSettings,
  } = useQuery(
    "update-contribution-settings",
    () =>
      updateGoalContributionSettings({
        configuration: configuration,
        data: {
          cron_string:
            goalContributionSettings.tabIndex === 1
              ? monthlyCronString
              : weeklyCronString,
          savings_amount: goalContributionSettings.contributionAmount,
          contribute_from: convertDate(
            goalContributionSettings.startingFromDate.toString()
          ),
        },
        goalId: goal.confirmedGoal.id,
      }).then((result) => {
        if (result.frequency !== "") {
          // console.log(result.frequency);
          goal.setGoalFrequency(result.frequency);
          goalContributionSettings.setContributionFrequency(result.frequency);
          goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
      }),
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );
  const debouncedMaturityDate = debounce(
    (value: number, frequency?: string) => {
      goalContributionSettings.setMaturityDateText(
        calculateGoalMaturityDate({
          goalAmount: goal.goalAmount,
          contributionAmount: (monthlyIncomeAmount * value) / 100,
          frequency: frequency,
          dateStr: goalContributionSettings.startingFromDate.toString(),
        })
      );
    },
    1000
  );
  useEffect(() => {
    debouncedMaturityDate(
      goal.percentageOfSavings,
      goalContributionSettings.tabIndex === 0 ? "weekly" : "monthly"
    );
  }, [goalContributionSettings.startingFromDate]);
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
          activeTab={goalContributionSettings.tabIndex}
          onClick={(tab: any) => {
            goalContributionSettings.setTabIndex(tab.tab_id);
            if (tab.tab_id === 0) {
              goalContributionSettings.setContributionAmount(
                (monthlyIncomeAmount * 5) / 100
              );
              goal.setPercentageOfSavings(5);
              debouncedMaturityDate(5, "weekly");
            } else {
              goalContributionSettings.setContributionAmount(
                (monthlyIncomeAmount * 20) / 100
              );
              goal.setPercentageOfSavings(20);
              debouncedMaturityDate(20, "monthly");
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
          onChange={(value) => {
            goalContributionSettings.setContributionAmount(
              (monthlyIncomeAmount * value) / 100
            );
            goal.setPercentageOfSavings(value);
            debouncedMaturityDate(
              value,
              goalContributionSettings.tabIndex === 0 ? "weekly" : "monthly"
            );
          }}
        />
      </div>
      <div className="font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center mb-4">
        {`${goal.percentageOfSavings}% of my monthly net income`}
      </div>
      <div className="font-workSans font-semibold text-base text-skin-base text-center tracking-title mb-5">
        on
      </div>
      {goalContributionSettings.tabIndex === 1 ? (
        <MonthlyContributionSelector />
      ) : (
        <WeeklyContributionSelector />
      )}
      <div className="mt-12">
        <BottomSheetFooter
          title={
            goalContributionSettings.maturityDateText
              ? goalContributionSettings.tabIndex === 0
                ? `Save ${currencySymbol}${goalContributionSettings.contributionAmount.toLocaleString(
                    "en-US"
                  )} weekly to reach your goal on ${formatDate(
                    goalContributionSettings.maturityDateText ?? ""
                  )}.`
                : `Save ${currencySymbol}${goalContributionSettings.contributionAmount.toLocaleString(
                    "en-US"
                  )} monthly to reach your goal on ${formatDate(
                    goalContributionSettings.maturityDateText ?? ""
                  )}.`
              : "Calculating goal maturity date..."
          }
          onClick={() =>
            updatingGoal ? updateContributionSettings() : getFrequencyText()
          }
          loading={frequencyFetching || updateContributionFetching}
        />
      </div>
    </div>
  );
};
